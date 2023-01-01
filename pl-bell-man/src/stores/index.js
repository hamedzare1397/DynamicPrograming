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
        state.states.push(newState);
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