
class NameSupport
{
  constructor(name)
  {
    this.name=name;
  }
}

class Environment{
  constructor(probability,reward,Q0){
    this.Q0=Q0;
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
  constructor(name,data,countIterat=20){
    super(name);
    this.data=data;
    this.countIterat=countIterat;
  }

  get printData()
  {
    console.log(this.data);
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

