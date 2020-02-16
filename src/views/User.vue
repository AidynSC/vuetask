<template>
    <div>
        <div v-if="full">
            <img    v-on:click="full=!full"
                    v-bind:src="exactUser.picture.medium"/>
        </div>
        <div v-else>
            <img    v-on:click="full=!full"
                    v-bind:src="exactUser.picture.large"/>
        </div>
        <h1>{{exactUser.name.title}} {{exactUser.name.first}} {{exactUser.name.last}}</h1>
        <h2>{{exactUser.phone}}</h2>
        <h2>{{exactUser.cell}}</h2>
        <h2>{{exactUser.email}}</h2>
        <router-link to="/">Home</router-link>
    </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';

  export default {
    data() {
      return {
        full: false,
      };
    },
    computed: mapGetters(['exactUser']),
    methods: {
      ...mapMutations(['getUser'])
    },
    mounted() {
      this.getUser(this.$route.params.name);
    },
  };
</script>
