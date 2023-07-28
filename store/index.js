import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      thanks: false,
      quiz: false
    },
    getters:{
      getThanks: state => state.thanks,
      getQuiz: state => state.quiz
    },
    mutations: {
      setThanks(state, thanks) {
        state.thanks = thanks
      },
      setQuiz(state, quiz) {
        state.quiz = quiz
      }
    },
    actions: {}
  })
}

export default createStore