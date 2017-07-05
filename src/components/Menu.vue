<template>
    <md-card>
        <md-card-header>
            <div class="md-title"> Your Football Stats</div>
            <div class="md-subhead">by Hugo & Nico</div>
        </md-card-header>
        <md-card-content>
            <md-layout md-align="center" md-gutter="16">
                <md-layout md-flex="35">
                    <md-button href="http://api.football-data.org/v1/competitions/434">
                        <span class="flag-icon flag-icon-fr"></span>
                    </md-button>
                </md-layout>
                <md-layout md-flex="35">
                    <md-button>
                        <span class="flag-icon flag-icon-pt"></span>
                    </md-button>
                </md-layout>
            </md-layout>
            <md-layout md-align="center" md-gutter="16">
                <md-layout md-flex="35">
                    <md-button>
                        <span class="flag-icon flag-icon-gb"></span>
                    </md-button>
                </md-layout>
                <md-layout md-flex="35">
                    <md-button>
                        <span class="flag-icon flag-icon-es"></span>
                    </md-button>
                </md-layout>
            </md-layout>
            <md-layout md-align="center" md-gutter="16">
                <md-layout md-flex="35">
                    <md-button>
                        <span class="flag-icon flag-icon-ge"></span>
                    </md-button>
                </md-layout>
                <md-layout md-flex="35">
                    <md-button>
                        <span class="flag-icon flag-icon-it"></span>
                    </md-button>
                </md-layout>
            </md-layout>
        </md-card-content>
    </md-card>
</template>

<script>
import axios from 'axios';

const maConfig = {
    headers: { 'X-Auth-Token': '7b8a71dc7eec4bbca11371f65c4e95ff' }
};

let league;

export default {

    data () {
        axios.get('http://api.football-data.org/v1/competitions/434', maConfig).then(function (response) {
            league = response.data;
        });
        return league;
    },
    name: 'menu'
};
</script>

<style>

</style>
