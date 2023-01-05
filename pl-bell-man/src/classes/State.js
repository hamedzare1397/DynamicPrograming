import NameSupport from "./NameSupport";
import Act from './Act';
export default class State extends NameSupport
{
  actions=[];
  addAct(act,propabilities={}){
    this.actions.push(new Act(act,propabilities));
  }

  get topAct(){
    let maxAct=null
    for(act of this.actions)
    {
      if(maxAct===null){
        maxAct=act;
        continue;
      }
      else if(maxAct.val<act.val){
        maxAct=act;
      }
    }
    return maxAct;
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

