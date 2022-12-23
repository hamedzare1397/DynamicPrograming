
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
    this.QStar=this.makeQ();
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

  maxQ(action){
    this.QStar[action]
  }

  sumMax(state,act,p_tr,Q){
    // console.clear()
    console.log(state,act,p_tr);
    let res=0;
    for(let i=0;i<Object.keys(p_tr).length;i++)
    {
      let max=Math.max(...Object.values(Q[state]));
      res+=p_tr[state]*max;
      console.log('Q[state]')
      console.log(Q[state])
      console.log('max');
      console.log(max);
      console.log(p_tr[state])
      console.log(Q[state])
      // debugger;
    }
    // debugger;
    console.log('res',res)
    return res;
  }
  makeQ(neta=.95){
    console.clear()
    let Q;
    if(this.QStar.length==this.states.length)
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
    let oldQ=Object.assign({},Q);
    do{
    for(let i=0;i<LActions;i++) {
      for (let j=0;j<LStates;j++) {
        let cState=this.states[j];
        let cAct=this.actions[i];
        let R=this.rewards[cState][cAct];
        let P_tr=this.transitions[cAct][cState];

        Q[cState][cAct]=R+(neta*this.sumMax(cState,cAct,P_tr,oldQ));
      }
    }
    this.countIterator--;
    this.QStar=Q;
    console.clear()
    console.log(Q);
debugger;
  }while(this.countIterator>0);
    return Q;
/*
      let currentState=this.states[i];
      let qrow=[]
      for(let j=0;j<LStates;j++)
      {
        let currentAction=this.actions[j];
        // console.log(`R(${currentState},${currentAction})=${this.rewards[currentState][currentAction]}`)
        let p_tr=this.transitions[currentAction][currentState];


        qrow[this.actions[k(this.rewards[currentState]+(neta*this.sumMax()));
      }
*/
      console.log(Q);
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
