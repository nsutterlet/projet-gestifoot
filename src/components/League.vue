<template>
    <div class="league">
        <md-card>
            <md-card-header>
                <div class="md-title">{{league.leagueCaption}}</div>
            </md-card-header>
            <md-card-content>
                <md-layout md-align="center" md-gutter="16">
                    <md-list>
                        <md-list-item> 1. PSG</md-list-item>
                    </md-list>
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
        return {
            league: {}
        };
    },
    name: 'league',
    methods: {
        getLeague () {
            axios.get(`http://api.football-data.org/v1/competitions/${this.$route.params.idLeague}/leagueTable`, maConfig).then((response) => {
                this.league = response.data;
            });
        }
    }
};
</script>

<style>

</style>
