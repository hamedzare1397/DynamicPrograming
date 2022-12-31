import NameSupport from "./NameSupport";
export default class State extends NameSupport
{
  actions=[];
  addAct(act,probability=1){
    this.actions.push({act,probability});
  }
}

