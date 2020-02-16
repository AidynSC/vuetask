export default {
  actions: {
    async fetchUsers(ctx) {
      const response = await fetch('https://randomuser.me/api/?results=20');
      const result = await response.json();
      ctx.commit('updateUsers', result.results);
    },
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users;
    },
    getUser(state, name){
      state.exactUser = state.users.filter(u => u.name.title + u.name.first + u.name.last === name)[0]
    },
    dateFilter(state, date){
      if(state.filteredUsers.length){
        state.filteredUsers = state.filteredUsers.filter(u => u.dob.date.includes(date))
      } else {
        state.filteredUsers = state.users.filter(u => u.dob.date.includes(date))
      }
    },
    nameFilter(state, name){
      if(state.filteredUsers.length){
        state.filteredUsers = state.filteredUsers.filter(u => (`${u.name.title} ${u.name.first} ${u.name.last}`).toUpperCase().includes(name.toUpperCase()))
      } else {
      state.filteredUsers = state.users.filter(u => (`${u.name.title} ${u.name.first} ${u.name.last}`).toUpperCase().includes(name.toUpperCase()))
      }
    },
    sortByName(state){
      if(state.filteredUsers.length) {
        state.filteredUsers = state.filteredUsers.sort((a, b) => {
          if ((a.name.title + a.name.first + a.name.last) >
              (b.name.title + b.name.first + b.name.last)) {
            return 1;
          }
          if ((a.name.title + a.name.first + a.name.last) <
              (b.name.title + b.name.first + b.name.last)) {
            return -1;
          }
          return 0;
        })
      } else {
        state.filteredUsers = state.users.sort((a, b) => {
          if ((a.name.title + a.name.first + a.name.last) >
              (b.name.title + b.name.first + b.name.last)) {
            return 1;
          }
          if ((a.name.title + a.name.first + a.name.last) <
              (b.name.title + b.name.first + b.name.last)) {
            return -1;
          }
          return 0;
        })
      }
    },
    sortByBirthdate(state){
      if(state.filteredUsers.length) {
        state.filteredUsers = state.filteredUsers.sort((a, b) => {
          if (a.dob.date > b.dob.date) {
            return 1;
          }
          if (a.dob.date < b.dob.date) {
            return -1;
          }
          return 0;
        })
      } else {
        state.filteredUsers = state.users.sort((a, b) => {
          if (a.dob.date > b.dob.date) {
            return 1;
          }
          if (a.dob.date < b.dob.date) {
            return -1;
          }
          return 0;
        })
      }
    },
    clear(state){
      state.filteredUsers = state.users
    }
  },
  state: {
    users: [],
    filteredUsers: [],
    exactUser: {}
  },
  getters: {
    exactUser(state){
      return state.exactUser
    },
    filteredUsers(state){
      if(state.filteredUsers.length){
        return state.filteredUsers
      } else {
        return state.users
      }
    }
  },
};
