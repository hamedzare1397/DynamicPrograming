import NameSupport from './NameSupport.js'
import Environment from './Environment'

export default class Agent extends NameSupport
{
  QStar=[];
  constructor(name,data,countIterator=2){
    super(name);
    this.data=data;
    this.env=new Environment(this.transitions,this.rewards);
    this.countIterator=countIterator;
    // this.QStar=this.makeQ();
  }
  setEnv(env){
    this.env=env;
    env.setReward(this.rewards)
    env.setProbabilities(this.transitions);
    this.env.agent=this;
  }

  get printData()
  {
    return this.data
  }
  get states(){
    return this.data.states;
  }
  get transitions(){
    return this.data.transitions;
  }
  get actions()
  {
    return this.data.actions
  }
  get rewards()
  {
    return this.data.rewards;
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
  run(neta=.95){
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

}