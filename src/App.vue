<template>
  <div id="app">
    <img src="./assets/arsenal-logo.png">
    <ul>
      <li v-for="(link, index) in routes" :key="index">
       <router-link v-bind:to="link.link">{{ link.name }}</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
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
  text-align: center;
  color: #484848;
  margin-top: 60px;
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
