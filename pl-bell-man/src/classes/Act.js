import NameSupport from "./NameSupport";
export default class Act extends NameSupport
{
  val=0;
  propability={}
  constructor(name,propability={},reward=0){
    super(name);
    this.propability=propability;
    this.reward=reward;
  }

  reward=0;

  get prob()
  {
    return this.propability;
  }

  get value()
  {
    return this.val;
  }
}
