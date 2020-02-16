<template>
    <div>
        <div>
            <input type="text" v-model="date" v-on:input="dateF" placeholder="YYYY-MM-DD">
        </div>
        <div>
            <input type="text" v-model="name" v-on:input="nameF" placeholder="Search by name">
        </div>
        <select v-model="sort" v-on:change="sortBy">
            <option value="" disabled selected style='display:none;'>выберите из списка</option>
            <option value="name">Sort by name</option>
            <option value="dob">Sort by birthdate</option>
        </select>
        <button @click="noFilterSort">Clear all filters ans sorts</button>
    </div>
</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
    data() {
      return {
        date: '',
        name: '',
        sort: '',
      };
    },
    methods: {
      ...mapMutations(['dateFilter', 'nameFilter', 'noSort', 'sortByName', 'sortByBirthdate', 'clear']),
      dateF() {
        this.dateFilter(this.date);
      },
      nameF() {
        this.nameFilter(this.name);
      },
      sortBy() {
        switch (this.sort) {
          case 'name':
            return this.sortByName();
          case 'dob':
            return this.sortByBirthdate();
        }
      },
      noFilterSort(){
        this.clear();
        this.date = '';
        this.name = '';
        this.sort = ''
      }
    }
  };
</script>
