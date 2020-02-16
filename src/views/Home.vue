<template>
    <div id="users">
        <h2>Phone Book</h2>
        <DateFilter />
        <Users v-bind:users="filteredUsers"
        />
    </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import Users from '../components/Users'
  import DateFilter from '../components/DateFilter';

  export default {
    name: 'Home',
    computed: mapGetters(['filteredUsers']),
    methods: mapActions(['fetchUsers']),
    async mounted() {
      this.fetchUsers();
    },
    components: {
      Users,
      DateFilter
    }
  };
</script>

<style scoped>
    #users {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 60px auto;
        width: 800px
    }
</style>
