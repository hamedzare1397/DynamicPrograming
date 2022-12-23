
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
  constructor(name,data,countIterator=20){
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

  sumMax(p_tr){
    for(let k=0;k<Object.keys(p_tr).length;k++)
    {
      console.log(this.states[k])
      console.log(p_tr[this.states[k]])

    }
  }
  makeQ(neta=.95){
    console.clear()
    let Q=[];
    let LActions=this.actions.length;
    let LStates=this.states.length;
    for(let i=0;i<LActions;i++)
    {
      let currentState=this.states[i];
      let qrow=[]
      for(let j=0;j<LStates;j++)
      {
        let currentAction=this.actions[j];
        // console.log(`R(${currentState},${currentAction})=${this.rewards[currentState][currentAction]}`)
        let p_tr=this.transitions[currentAction][currentState];


        qrow[this.actions[k(this.rewards[currentState]+(neta*this.sumMax()));
      }
      Q.push(qrow);
    }
    return Q;
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
