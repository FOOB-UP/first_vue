
import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        count: 0,
        todos: [
          { id: 1, text: '张三', done: true },
          { id: 2, text: '李四', done: false }
        ]
      }
    },
    getters:{
      gettodo(state){
        return state.todos.filter(todo => todo.done)
      }
    },
    mutations: {
      increment (state,payload) {
        state.count+=payload.comts
      },
      increments (state){
        state.count++
      }
    },
    actions: {
      increment(context) {
         context.commit("increment")
      }
    }
  })
export default store
  
