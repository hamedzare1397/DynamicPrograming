import NameSupport from "./NameSupport";

export default class Data{
    constructor(data){
        this. data=data;
    }
    get printData()
    {
        return this.data
    }
    get states(){
        return this.data.states;
    }
    get transitions(){
        return this.data.transitions;
    }
    get actions()
    {
        return this.data.actions
    }
    get rewards()
    {
        return this.data.rewards;
    }
}
