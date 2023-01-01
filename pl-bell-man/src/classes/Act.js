import NameSupport from "./NameSupport";
export default class Act extends NameSupport
{
  constructor(name,probability=1){
    super(name);
    this.probability=probability;
    this.destination=destination;
  }

  setDestination(dest){
    
    this.destination=dest;
  }
}
