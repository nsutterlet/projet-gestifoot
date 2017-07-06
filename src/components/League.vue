<template>
    <div class="league">
        <md-card>
            <md-card-header>
                <div class="md-title">{{league.leagueCaption}}</div>
            </md-card-header>
            <md-card-content>
                <md-layout md-align="center" md-gutter="16">
    
                    <md-table>
                        <md-table-header>
                            <md-table-row>
                                <!--<md-table-head ></md-table-head>-->
                                <md-table-head>Position</md-table-head>
                                <md-table-head>Equipe</md-table-head>
                                <md-table-head>J</md-table-head>
                                <md-table-head>V</md-table-head>
                                <md-table-head>N</md-table-head>
                                <md-table-head>D</md-table-head>
                                <md-table-head>BM</md-table-head>
                                <md-table-head>BE</md-table-head>
                                <md-table-head>Point</md-table-head>
                            </md-table-row>
                        </md-table-header>
    
                        <md-table-body>
                            <md-table-row v-for="(footTeam,index) in league.standing" v-bind:key="index">
                                <!--<md-table-cell><img src="{{footTeam.crestURI}}" alt="footTeam" width="15px" height="15px"></md-table-cell> -->
                                <md-table-cell>{{ footTeam.position }}</md-table-cell>
                               <md-button v-on:click.native="$router.push({name:'Equipe', params:{linkTeam: footTeam._links.team.href }})">
                                <md-table-cell>{{ footTeam.teamName }}</md-table-cell>
                                
                                </md-button>
    
                                <md-table-cell>{{ footTeam.playedGames }}</md-table-cell>
                                <md-table-cell>{{ footTeam.wins}}</md-table-cell>
                                <md-table-cell>{{ footTeam.draws }}</md-table-cell>
                                <md-table-cell>{{ footTeam.losses }}</md-table-cell>
                                <md-table-cell>{{ footTeam.goals}}</md-table-cell>
                                <md-table-cell>{{ footTeam.goalsAgainst }}</md-table-cell>
                                <md-table-cell>{{ footTeam.points}}</md-table-cell>
                            </md-table-row>
                        </md-table-body>
                    </md-table>
                </md-layout>
                 <!--<router-link v-bind:to="{name:'League', params:{idLeague:'434'}}"></router-link>-->
 
                
                 <md-layout md-align="center" md-gutter="16">
                <div class="md-title">Journée : {{league.matchday}}</div>
           </md-layout>
                <md-layout md-align="center" md-gutter="16">
                
                    <md-table>
                        </md-table-header>
                        
                        <md-table-body>
                            <md-table-row v-for="(game,index) in journey.fixtures" v-bind:key="index">
                                <!--<md-table-cell><img src="{{team.crestURI}}" alt="team" width="15px" height="15px"></md-table-cell>!-->
                                <md-table-cell>{{ game.homeTeamName}}</md-table-cell>
                                <md-table-cell>{{ game.result.goalsHomeTeam}}</md-table-cell>
                                <md-table-cell> - </md-table-cell>
                                <md-table-cell>{{game.result.goalsAwayTeam}}</md-table-cell>
                                <md-table-cell>{{ game.awayTeamName }}</md-table-cell>
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
            axios.get(`http://api.football-data.org/v1/competitions/${this.$route.params.idLeague}/leagueTable`, maConfig).then((response) => {
                this.league = response.data;
            });
        },
        getJourney () {
            axios.get(`http://api.football-data.org/v1/competitions/${this.$route.params.idLeague}/fixtures?matchday=38`, maConfig).then((response) => {
                this.journey = response.data;
            });
        }
    }
};
</script>

<style>
.md-title {
    text-align: center;
}

.thd {
    text-align: center;
    Font-Weight: Bold;
}
</style>
