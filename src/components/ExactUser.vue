<template>
    <li>
        <span>
            <img v-bind:src="user.picture.thumbnail"/>
                        <router-link :to="{path: '/user/' + user.name.title + user.name.first + user.name.last}">
                            <big>{{user.name.title}} {{user.name.first}} {{user.name.last}}</big>
                        </router-link>
                        <span>born: {{user.dob.date}}</span>
        </span>
    </li>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
        required: true,
      },
      index: Number,
    },
  };
</script>

<style scoped>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }

    img {
        padding-right: 20px;
    }

    big {
        color: black;
    }

    span {
        padding-left: 50px;
    }
</style>
