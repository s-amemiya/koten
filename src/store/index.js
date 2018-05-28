import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  museums: [{
    id: 'tobikan',
    name: '東京都美術館',
    url: 'www.tobikan.jp/',
  }, {
    id: 'nmwa',
    name: '国立西洋美術館',
    url: 'www.nmwa.go.jp/',
  }],
  exhibitions: [{
    id: 0,
    museumId: '',
    name: '都美セレクション 新鋭美術家 2017',
    session: {
      from: '2017-02-19',
      to: '2017-03-15'
    }
  }, {
    id: 1,
    museumId: '',
    name: 'ティツィアーノとヴェネツィア派展',
    session: {
      from: '2017-01-21',
      to: '2018-04-02'
    }
  }]
}

const getters = {}
const actions = {}
const mutations = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
