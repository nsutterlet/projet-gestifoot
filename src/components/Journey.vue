<template>
    <div class="journey">
        <md-card>
            <md-card-header>
                <div class="md-display-1 titre-vues">{{league.leagueCaption}}</div>
    
            </md-card-header>
            <md-card-content>
                <md-layout md-align="center" md-gutter="16">
                    <div class="md-title">Journée : {{this.$route.params.matchday}}</div>
                </md-layout>
               
                <md-layout md-align="center" md-gutter="16">
    
                    <md-table>
                        </md-table-header>
                        <md-table-body>
                            <md-table-row v-for="(game,index) in journey.fixtures" v-bind:key="index">
                                <md-table-cell class="home-name">{{ game.homeTeamName}}</md-table-cell>
                                <md-table-cell>{{ game.result.goalsHomeTeam}}</md-table-cell>
                                <md-table-cell> - </md-table-cell>
                                <md-table-cell>{{game.result.goalsAwayTeam}}</md-table-cell>
                                <md-table-cell class="away-name">{{ game.awayTeamName }}</md-table-cell>
                            </md-table-row>
                        </md-table-body>
                    </md-table>
    
                </md-layout>
            </md-card-content>
        </md-card>
    </div>
</template>

<script>
import axios from 'axios';

const maConfig = { headers: { 'X-Auth-Token': '7b8a71dc7eec4bbca11371f65c4e95ff' } };
export default {
    data () {
        this.getLeague();
        this.getJourney();
        return {
            league: {},
            journey: {}
        };
    },
    name: 'league',
    methods: {
        getLeague () {
            axios.get(`https://api.football-data.org/v1/competitions/${this.$route.params.idLeague}/leagueTable`, maConfig).then((response) => {
                this.league = response.data;
            });
        },
        getJourney () {
            axios.get(`https://api.football-data.org/v1/competitions/${this.$route.params.idLeague}/fixtures?matchday=${this.$route.params.matchday}`, maConfig).then((response) => {
                this.journey = response.data;
            });
        }
    }
};
</script>
<style>

.journey {
    flex-direction: column;
    flex: 1;
}
.away-name{
    text-align: right;
}
</style>
