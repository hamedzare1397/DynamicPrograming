
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
  Q0=[];
  constructor(name,data,countIterator=20){
    super(name);
    this.data=data;
    this.countIterator=countIterator;
    this.Q0=this.makeQ();
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
  makeQ(){
    let Q=[];
    let cols=this.actions.length;
    let rows=this.states.length;
    for(let i=0;i<rows;i++){
      let row=this.rewards[1]
      let row=[];
      for(let j=0;j<cols;j++){
        this.rewards["1load"]
        row.push(0);
      }
      Q.push(row);
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
