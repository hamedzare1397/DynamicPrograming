
class NameSupport
{
  constructor(name)
  {
    this.name=name;
  }
}

class Environment{
  constructor(probability,reward){
    this.reward=reward;
    this.probability=probability;
  }

  setProbabilities(probability){
    this.probability=probability;
  }

  setReward(reward){
    this.reward=reward;
  }
}

class Agent extends NameSupport
{
  QStar=[];
  constructor(name,data,countIterator=2){
    super(name);
    this.data=data;
    this.countIterator=countIterator;
    // this.QStar=this.makeQ();
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
    return Math.max(...Object.values(Q[state]));
  }

  sumMax(state,act,p_tr,Q){
    // console.clear()
    let res=0;
    console.log(`Q[${state}]`,Q[state]);
    for(let i=0;i<Object.keys(p_tr).length;i++)
    {
      let max=Math.max(...Object.values(Q[state]));
      res+=p_tr[this.states[i]]*max;
    }
    return res;
  }
  ////////////////////////////////////////////////////////////////////////////////////////////
  makeQ(neta=.95){
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
    const oldQ=new Proxy(Q,{
      set(obj, property, value) {
        console.log(obj);
        alert('set for '+' propery['+property+'] ='+value);
      }
    });
    console.log(oldQ)
    // debugger;
    for(let i=0;i<LActions;i++) {
      for (let j=0;j<LStates;j++) {
        let cState=this.states[j];
        let cAct=this.actions[i];
        let R=this.rewards[cState][cAct];
        let P_tr=this.transitions[cAct][cState];
        if(cAct=='right' && cState=='3load'){
          // debugger;
        }          
        let resSumMax=this.sumMax(cState,cAct,P_tr,oldQ);
        Q[cState][cAct]=R+(neta*resSumMax);
        console.log(`(${cState},${cAct})====>${R}+(${neta}*${resSumMax})=${Q[cState][cAct]}`)
        
      }
    }
    // this.countIterator--;
    this.QStar=Object.assign({},Q);
    //  Q;
    return this.QStar;
    }

}

class State extends NameSupport
{
  actions=[];
  addAct(act,probability=1){
    this.actions.push({act,probability});
  }
}

class Act extends NameSupport
{
  constructor(name,destination,probability=1){
    super(name);
    this.probability=probability;
    this.destination=destination;
  }
}

export  {Agent,Environment,Act,State}

