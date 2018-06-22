<template>
  <div class="fixtures mt-3">
    <h1 class="text-center">{{ heading }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Fixtures',
  data() {
    return {
      heading: 'Fixtures 2018/19',
      fixtures: []
    };
  },
  created: function() {
    this.$http.get('https://api.football-data.org/v1/teams/57/fixtures?season=2019')
      .then((response) => {
        this.fixtures = response.body.fixtures;
      })
      .catch(err => console.log(err));
  }
};
</script>
