import NameSupport from "./NameSupport";
import Act from './Act';
export default class State extends NameSupport
{
  actions={};
  addAct(act,propabilities={},reward=0){
    this.actions[act]=new Act(act,propabilities,reward);
  }

  get topAct(){
    let topAct={value:0};
    Object.values(this.actions).forEach(action=>{
      if(action.value!==0)
      {
        if(topAct.value<action.value){
          topAct=action;
        }
      }
    });
    return topAct;
  }



  sumAndMax()
  {
    console.log('sumAndMax')
    for(let act of this.actions){
      for(const [key,val] in act.propability)
      {
        console.log(key)
        console.log(val)
      }
    }
  }

  static find(name)
  {
    return Object.find(store.getters.states,(row)=>row.name==name);
  }
}

