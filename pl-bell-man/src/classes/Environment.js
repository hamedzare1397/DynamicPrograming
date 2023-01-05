
export default class Environment{

  constructor(propability=[],reward=[]){
    this.rewards=reward;
    this.propability=propability;
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

  setProbabilities(propability){
    this.propability=propability;
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
    return this.propability[act][sState]
  }

}






