<template>
    <div class="league">
        <md-card class="md-league">
            <md-card-header>
                <div class="md-display-1">{{league.leagueCaption}}</div>
            </md-card-header>
            <md-card-content>
                <md-layout md-align="center" md-gutter="16">
                    <md-button class="md-raised md-primary" v-on:click.native="$router.push({name:'Journey', params:{matchday: league.matchday }})">
                        Dernière journée
                    </md-button>
                </md-layout>
                
                <md-layout md-align="center" md-gutter="16">
    
                    <md-table>
                        <md-table-header>
                            <md-table-row>
                                <md-table-head>Position</md-table-head>
                                <md-table-head></md-table-head>
                                <md-table-head>Equipe</md-table-head>
                                <md-table-head>J</md-table-head>
                                <md-table-head>V</md-table-head>
                                <md-table-head>N</md-table-head>
                                <md-table-head>D</md-table-head>
                                <md-table-head>BM</md-table-head>
                                <md-table-head>BE</md-table-head>
                                <md-table-head>Points</md-table-head>
                                <md-table-head>Favoris</md-table-head>
                            </md-table-row>
                        </md-table-header>
                        <md-table-body>
                            <md-table-row v-for="(footTeam,index) in league.standing" v-bind:key="index">
                                <md-table-cell>{{ footTeam.position }}</md-table-cell>
                                <md-table-cell>
                                    <img :src="footTeam.crestURI" alt="logo" width="20px" height="20px">
                                </md-table-cell>
                                <md-table-cell>{{ footTeam.teamName }}</md-table-cell>
                                <md-table-cell>{{ footTeam.playedGames }}</md-table-cell>
                                <md-table-cell>{{ footTeam.wins}}</md-table-cell>
                                <md-table-cell>{{ footTeam.draws }}</md-table-cell>
                                <md-table-cell>{{ footTeam.losses }}</md-table-cell>
                                <md-table-cell>{{ footTeam.goals}}</md-table-cell>
                                <md-table-cell>{{ footTeam.goalsAgainst }}</md-table-cell>
                                <md-table-cell>{{ footTeam.points}}</md-table-cell>
                                <md-table-cell>
                                    <md-button v-if="isFavorite(footTeam.teamName)" v-on:click="removeFromList(footTeam)">
                                        <md-icon>remove</md-icon>
                                    </md-button>
                                    <md-button v-else v-on:click="addToList(footTeam)">
                                        <md-icon>add</md-icon>
                                    </md-button>
                                </md-table-cell>
                            </md-table-row>
                        </md-table-body>
    
                    </md-table>
                </md-layout>
                <!--<router-link v-bind:to="{name:'League', params:{idLeague:'434'}}"></router-link>-->
    
            </md-card-content>
        </md-card>
    </div>
</template>

<script>

import axios from 'axios';

const maConfig = { headers: { 'X-Auth-Token': '7b8a71dc7eec4bbca11371f65c4e95ff' } };
const LOCALSTORAGE_KEY = 'malist-fav';

export default {
    data () {
        this.getLeague();
        this.getJourney();
        let maList;
        try {
            const jsonList = localStorage.getItem(LOCALSTORAGE_KEY);
            maList = JSON.parse(jsonList);
            if (!maList) {
                throw new Error();
            }
        } catch (e) {
            maList = [];
        }

        return {
            league: {},
            journey: {},
            maList
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
            axios.get(`https://api.football-data.org/v1/competitions/${this.$route.params.idLeague}/fixtures?matchday=38`, maConfig).then((response) => {
                this.journey = response.data;
            });
        },
        addToList (team) {
            const equipe = {
                nom: team.teamName,
                logoURI: team.crestURI
            };
            this.maList.push(equipe);
        },
        removeFromList (equipe) {
            this.maList.splice(this.maList.indexOf(equipe), 1);
        },
        isFavorite (teamName) {
            for (let team of this.maList) {
                if (team.nom === teamName) {
                    return true;
                }
            }
            return false;
        }
    },
    watch: {
        maList: {
            handler () {
                const jsonList = JSON.stringify(this.maList);
                localStorage.setItem(LOCALSTORAGE_KEY, jsonList);
            },
            deep: true
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
.md-card {
    flex-direction: column;
    flex: 1;
}
.md-table{
    flex-direction: column;
    flex: 1;
}
.md-display-1{
    font-family: Verdana;
    color: grey;
    text-align: center;
}
</style>
