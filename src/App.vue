<template>
  <div id="app">
    <nav class="flex items-center justify-between flex-wrap bg-red p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <img width="54" height="54" src="./assets/arsenal-icon.png">
      </div>
      <div class="w-full block flex-grow flex lg:items-center lg:w-auto text-right">
        <div class="text-sm lg:flex-grow">
          <router-link v-for="(link, index) in routes"
                       :key="index"
                       v-bind:to="link.link"
                       class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal mr-4">
                       {{ link.name }}
          </router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import '@/assets/styles/main.css';

export default {
  name: 'App',
  data() {
    return {
      routes: [
        { name: 'Home', link: '/' },
        { name: 'Squad', link: 'squad' },
        { name: 'Fixtures', link: 'fixtures' },
        { name: 'Information', link: 'information' }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #484848;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ff0000;
}
</style>
