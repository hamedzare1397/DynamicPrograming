
export default class Environment{

  constructor(probability=[],reward=[]){
    this.rewards=reward;
    this.probability=probability;
  }

  setAgent(agent)
  {
    this.agent=agent;
    this.agent.env=this;
  }

  run()
  {
    return this.agent.run(.95);
  }

  setProbabilities(probability){
    this.probability=probability;
  }

  setReward(reward){
    this.rewards=reward;
  }

  getRewardforAction(state,act)
  {
    return this.rewards[state][act];
  }

  getPropability(sState,act)
  {
    return this.probability[act][sState]
  }

}






