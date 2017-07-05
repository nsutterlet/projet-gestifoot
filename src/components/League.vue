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
                            <md-table-row v-for="(team,index) in league.standing" :team="team" v-bind:key="index">
                                <!--<md-table-cell><img src="{{team.crestURI}}" alt="team" width="15px" height="15px"></md-table-cell>-->
                                <md-table-cell>{{ team.position }}</md-table-cell>
                                md-button v-on:click.native="$router.push({name:'Team', params:{idTeam:'434'}})">
                                <md-table-cell>{{ team.teamName }}</md-table-cell>
                                
                                </md-button>
    
                                <md-table-cell>{{ team.playedGames }}</md-table-cell>
                                <md-table-cell>{{ team.wins}}</md-table-cell>
                                <md-table-cell>{{ team.draws }}</md-table-cell>
                                <md-table-cell>{{ team.losses }}</md-table-cell>
                                <md-table-cell>{{ team.goals}}</md-table-cell>
                                <md-table-cell>{{ team.goalsAgainst }}</md-table-cell>
                                <md-table-cell>{{ team.points}}</md-table-cell>
                            </md-table-row>
                        </md-table-body>
                    </md-table>
                </md-layout>
<!--                <md-layout md-align="center" md-gutter="16">
    
                    <md-table>
                        </md-table-header>
    
                        <md-table-body>
                            <md-table-row v-for="(game,index) in journey.standing" :team="team" v-bind:key="index">
                                <!--<md-table-cell><img src="{{team.crestURI}}" alt="team" width="15px" height="15px"></md-table-cell>
                                <md-table-cell>{{ game.home}}</md-table-cell>
                                <md-table-cell>{{ game.score }}</md-table-cell>
                                <md-table-cell> - </md-table-cell>
                                <md-table-cell>{ game.score }}</md-table-cell>
                                <md-table-cell>{{ game.away }}</md-table-cell>
                            </md-table-row>
                        </md-table-body>
                    </md-table>
                </md-layout>-->
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
       // this.getJourney();
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
        }
        // getJourney (matchday) {
        //     axios.get(`http://api.football-data.org/v1/competitions/${this.$route.params.idLeague}/leagueTable/?matchday=${this.league.matchday}`, maConfig).then((response) => {
        //         this.journey = response.data;
        //     });
        // }
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
