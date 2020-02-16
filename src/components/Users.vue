<template>
    <div>
        <ul>
            <ExactUser
                    v-for="(user, i) of users"
                    v-bind:user="user"
                    v-bind:index="i"
            />
        </ul>
    </div>
</template>

<script>
  import ExactUser from '@/components/ExactUser';

  export default {
    props: ['users'],
    components: {
      ExactUser,
    },

  };
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>
