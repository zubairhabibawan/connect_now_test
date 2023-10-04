import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {

    gameList:[],
    filteredGameList:[],
    selectedFilters:{
      name:'',
      rating:''
    },
    sortData:{
      key:'first_release_date',
      direction:'dsc',
      sortOptionList:[{
        name:'Release Date',
        value:'first_release_date'
      },
      {
        name:'Score',
        value:'rating'
      },
      {
        name:'Name',
        value:'name'
      },]
    },
    
    isDataLoading:false,
    APIUrlToGetGameList:'http://public.connectnow.org.uk/applicant-test/'
  },
  getters: {
    getFilteredGameList(state){
      return state.filteredGameList
    },
    getSelectedFilterList(state){
      return state.selectedFilters
    },
    getDataLoadingStatus(state){
      return state.isDataLoading
    },
    getSortData(state){
      return state.sortData
    },
  },
  mutations: {
    mutateGameList(state,list){
      state.gameList=[...list]
    },
    mutateFilteredGameList(state,list){
      state.filteredGameList=[...list]
    },
    mutateSelectedFilter(state,data){
      Object.assign(state.selectedFilters,data)
    },
    mutateDataLoadingStatus(state,status){
      state.isDataLoading=status
    },
    mutateSortData(state,data){
      Object.assign(state.sortData,data)
    }
  },
  actions: {
    requestAPIForGameList(context){ 
      axios.get(context.state.APIUrlToGetGameList)
      .then(function (response) {
        context.commit('mutateGameList',response.data)
        context.commit('mutateFilteredGameList',response.data)
      })
      .catch(function (error) {
        console.error('Error:', error);
      })
      .finally(function () {
        console.log('Request completed, whether it succeeded or failed.');
      });
    },
    applyFiltersOnGameList(context){
      const {selectedFilters,gameList} = context.state
      const filteredList = gameList.filter(game => {
        let name = game.name.toLowerCase()
        let rating = Math.floor(game.rating / 10).toString()
        if (selectedFilters.name && selectedFilters.rating) {
          return name.includes(selectedFilters.name) && rating >= selectedFilters.rating;
        } else if (selectedFilters.name) {
          return name.includes(selectedFilters.name);
        } else if (selectedFilters.rating) {
          return rating >= selectedFilters.rating;
        } else{
          return game
        }
      });
      context.dispatch('sortFilteredGameList',filteredList)
    },
    sortFilteredGameList(context,filteredList=[]){
      const {sortData} = context.state
      const sortedList = filteredList.sort((a, b) => {
        if (sortData.direction === 'asc') {
          if (sortData.key === 'name') {
            return a.name.localeCompare(b.name); // Sort by name (strings)
          } else if (sortData.key === 'first_release_date') {
            return new Date(a.first_release_date) - new Date(b.first_release_date); // Sort by date (Date objects)
          } else if (sortData.key === 'rating') {
            return a.rating - b.rating; // Sort by number (numeric values)
          }
        } else {
          // Handle descending order
          if (sortData.key === 'name') {
            return b.name.localeCompare(a.name);
          } else if (sortData.key === 'first_release_date') {
            return new Date(b.first_release_date) - new Date(a.first_release_date);
          } else if (sortData.key === 'rating') {
            return b.rating - a.rating;
          }
        }
      });
      context.commit('mutateFilteredGameList',sortedList)
    },
    toggleSortDirection(context){
      const {sortData ,filteredGameList} = context.state
      let oldDirection = sortData.direction
      let newDirection = ''
      if(oldDirection === 'dsc'){
        newDirection = 'asc'
      }else{
        newDirection = 'dsc'
      }
      context.commit('mutateSortData',{direction:newDirection})
      context.dispatch('sortFilteredGameList', filteredGameList)
    }

  },
  modules: {
  }
})
