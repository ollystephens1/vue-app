<template>
  <div class="squad mt-3">
    <h1 class="text-center mb-2">{{ heading }}</h1>

    <div class="flex flex-wrap items-center">
      <div v-for="(player, index) in squad" :key="index" class="max-w-sm rounded overflow-hidden shadow-lg m-2">
        <div class="font-bold text-xl mb-2 bg-red text-white p-4">{{ player.jerseyNumber }}. {{ player.name }}</div>

        <div class="p-4">
          <p class="text-grey-darker text-base">
            Nationality: {{ player.nationality }}<br>
            Position: {{ player.position }}<br>
            Date of birth: {{ player.dateOfBirth }}<br>
            Contracted until: {{ player.contractUntil }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Squad',
  data() {
    return {
      heading: 'Squad',
      squad: []
    };
  },
  created: function() {
    this.$http.get('https://api.football-data.org/v1/teams/57/players')
      .then((response) => {
        this.squad = response.body.players;
      })
      .catch(err => console.log(err));
  }
};
</script>
