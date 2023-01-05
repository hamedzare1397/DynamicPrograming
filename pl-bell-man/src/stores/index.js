import { createStore } from 'vuex'

export default createStore({
    state:{
        raw:{},
        states:[],
        data:{},
    },
    mutations: {
      setCache({data},{name,val}) {
        Object.defineProperty(data,name,val);
      },
      addState(state,newState){
        // console.log(state.states)
        for(let ndex of state.states){
          if(ndex.name==newState.name){
            return false;
          }
        }
        state.states.push(newState);
        return true;
      },
      setRawData(state,val)
      {
        state.raw=val
      }
    },
    getters:{
      rawTransitions:state=> state.raw.transitions,
      rawActions:state=> state.raw.actions,
      rawRewards:state=> state.raw.rewards,
      rawStates:state=> state.raw.states,
      states:state=>state.states,
    },
    actions:{
        val({state},name){
            if(Object.hasOwn(state.data,name))
            {
                return state.data[name];
            }
        }
    }
  })