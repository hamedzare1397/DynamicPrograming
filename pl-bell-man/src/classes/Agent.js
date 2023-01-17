import NameSupport from './NameSupport.js'
import Environment from './Environment';
import State from './State';
import Act from './Act';
import store from './../stores';

export default class Agent extends NameSupport
{
  neta;
  states={};

  get states()
  {
    return this.states;
  }

  get statesLen()
  {
    return this.states.length;
  }

  get QStar()
  {
    let q={};
    Object.entries(this.states).forEach(state=>{
      const [cns,cstate]=state;
      let temp={};
      Object.entries(cstate.actions).forEach(act=>{
        const [an,cact]=act;
        // console.log(cact.value);
        temp[an]=cact.value;
      })
      q[cns]=temp;
    })
    // console.log('q',q);
    return q;
  }

  constructor(name,neta=.95)
  {
    super(name);
    this.neta=neta;
  }

  get lenStates()
  {
    return Object.keys(this.states).length;
  }

  init()
  {
    for(let i=0;i<store.getters.rawStates.length;i++)
    {
      const nameState=store.getters.rawStates[i];
      const cState=new State(nameState);
      for(let j=0;j<store.getters.rawActions.length; j++)
      {
        const cAct=store.getters.rawActions[j];
        const propabilities=store.getters.rawTransitions[cAct][nameState];
        const reward=store.getters.rawRewards[nameState][store.getters.rawActions[j]];
        cState.addAct(store.getters.rawActions[j],propabilities,reward);
      }
      this.states[nameState]=cState;
    }


  }

  run()
  {
    const Q=Object.assign({},this.QStar);
    Object.entries(this.states).forEach(state=>{
      const [cStateName,CState]=state;
      Object.entries(CState.actions).forEach(act=>{
        const [cActName,cAct]=act;
        let sum=0;
        Object.entries(cAct.propability).forEach(row=>{
          const [destState,propability]=row;
          const maxQ=Math.max(...Object.values(Q[destState]));
          // const maxQ=Q[destState].topAct.value;
          // if(cStateName=='3load')
            // console.log(`${cStateName}|${destState},${cActName})=${propability}*${maxQ}`)
          sum+=propability*maxQ;
        })
        cAct.val=cAct.reward+(this.neta*sum)
      })
    })
  }

  maxQ(destState)
  {
    // console.log(destState);
    return destState.topAct.value;
  }


}
