<template>
  <div class="home mt-3 p-4">
    <h1 class="text-center mb-2">{{ heading }}</h1>

    <spinner v-if="!loaded"></spinner>

    <div class="flex">
      <table v-if="loaded" class="border-separate border-solid w-full">
        <thead>
          <tr class="text-left">
            <th></th>
            <th>Position</th>
            <th>Team</th>
            <th>Played</th>
            <th>Wins</th>
            <th>Draws</th>
            <th>Losses</th>
            <th>Goals scored</th>
            <th>Goals conceded</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(team, index) in standings" :key="index" class="p-4">
            <td><img class="h-4" v-bind:src="team.crestURI"></td>
            <td>{{ team.position }}</td>
            <td>{{ team.teamName }}</td>
            <td>{{ team.playedGames }}</td>
            <td>{{ team.wins }}</td>
            <td>{{ team.draws }}</td>
            <td>{{ team.losses }}</td>
            <td>{{ team.goals }}</td>
            <td>{{ team.goalsAgainst }}</td>
            <td>{{ team.points }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      heading: 'Season 2017/18 Overview',
      standings: [],
      loaded: false
    };
  },
  created: function() {
    this.$http.get('http://api.football-data.org/v1/competitions/445/leagueTable')
      .then((response) => {
        this.standings = response.body.standing;
        this.loaded = true;
      })
      .catch(err => console.log(err));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
