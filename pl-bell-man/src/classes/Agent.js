import NameSupport from './NameSupport.js'
import Environment from './Environment';
import State from './State';
import Act from './Act';
import store from './../stores';

export default class Agent extends NameSupport
{
  
  get QStar(){
    return store.getters.states
  }

  get actions()
  {
    return store.getters.rawActions
  }
  get states(){
    return store.getters.rawStates
  }
  get transitions(){
    return store.getters.rawTransitions
  }
  get rewards(){
    return store.getters.rawRewards
  }

 constructor(name,countIterator=2){
    super(name);
    this.env=new Environment(this.transitions,this.rewards);
    this.countIterator=countIterator;
    // this.QStar=this.makeQ();
  }

  makeStatesFromData(){
    this.makeStates();
    this.makeActionsInStates();
  }  
  makeStates(){
    for(let i=0;i<this.states.length;i++)
    {
      store.commit('addState',new State(`${this.states[i]}`));
    }
  }
  makeActionsInStates()
  {
    for(let i=0;i<this.actions.length;i++)
    {
      let cAct=this.actions[i];
      for(let state of store.getters.states){
        let propabilities=this.transitions[cAct][state.name]
        // console.log('propabilities',propabilities);
        state.addAct(this.actions[i],propabilities)
      }
      // console.log(store.getters.states)
    }
  }


 
  setEnv(env){
    this.env=env;
    env.setReward(this.rewards)
    env.setProbabilities(this.transitions);
    this.env.agent=this;
  }

  

  maxQ(Q,state){    
    // console.log((Q));
    // return 0;
     return Math.max(...Object.values(Q[state]));
  }

  sumMax(state,act,p_tr,Q){
    let res=0;
    let indexs=Object.keys(p_tr)
    for(let i=0;i<indexs.length;i++){
      let pDestState=p_tr[indexs[i]];
      let maxQ=this.maxQ(Q,indexs[i]);
      res+=maxQ*pDestState;
    }
    // console.log(`sumAndMax(${state},${act})=${res}`)
    return res;
  }
  ////////////////////////////////////////////////////////////////////////////////////////////
  oldrun(neta=.95){
    let Q;
    if(Object.keys(this.QStar).length==this.states.length)
      Q=this.QStar;
    else{
      Q={};
      this.states.forEach(element => {
        let actions={};
        this.actions.forEach(act=>{
          actions[act]=0;
        });
        Q[element]=actions;
      });
    }
    let LActions=this.actions.length;
    let LStates=this.states.length;
    const oldQ=Object.assign({},Q);
    
    for(let i=0;i<LActions;i++) {
      for (let j=0;j<LStates;j++) {
        let cState=this.states[j];
        let cAct=this.actions[i];
        let R=this.env.getRewardforAction(cState,cAct);
        let P_tr=this.env.getPropability(cState,cAct);

        let resSumMax=this.sumMax(cState,cAct,P_tr,oldQ);
        Q[cState][cAct]=R+(neta*resSumMax);
        // console.log(`(${cState},${cAct})====>${R}+(${neta}*${resSumMax})=${Q[cState][cAct]}`)
        
      }
    }
    this.QStar=Object.assign({},Q);
    return this.QStar;
    }
  run(neta=.95){
    let OldStates=Object.assign({},this.QStar);

    for(let state of store.getters.states)
    {
      for(let act of state.actions)
      {
        let R=this.env.getRewardforAction(state.name,act.name);
        console.log(state.sumAndMax());
        // res=R+neta*(state.sumAndMax())
      }
    }
  }
}