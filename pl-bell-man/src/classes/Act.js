import NameSupport from "./NameSupport";
export default class Act extends NameSupport
{
  val=0;
  propability={}
  constructor(name,propability={}){
    super(name);
    this.propability=propability;
  }

  get prob()
  {
    return this.propability;
  }
}
