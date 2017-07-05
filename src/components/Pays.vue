<template>
    <md-card>
        <md-card-header>
            <div class="md-title"> Your Football Stats</div>
            <div class="md-subhead">by Hugo & Nico</div>
        </md-card-header>
        <md-card-content>
            <md-layout md-align="center" md-gutter="16">
                <md-layout md-flex="35">
                    <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'434'}})">
                        <span class="flag-icon flag-icon-fr">
                            <!--<router-link v-bind:to="{name:'League', params:{idLeague:'434'}}"></router-link>-->
                        </span>
                    </md-button>
                </md-layout>
                <md-layout md-flex=" 35 ">
                    <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'439'}})">
                        <span class="flag-icon flag-icon-pt "></span>
                    </md-button>
                </md-layout>
            </md-layout>
            <md-layout md-align="center " md-gutter="16 ">
                <md-layout md-flex="35 ">
                    <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'426'}})">
                        <span class="flag-icon flag-icon-gb "></span>
                    </md-button>
                </md-layout>
                <md-layout md-flex="35 ">
                    <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'436'}})">
                        <span class="flag-icon flag-icon-es "></span>
                    </md-button>
                </md-layout>
            </md-layout>
            <md-layout md-align="center " md-gutter="16 ">
                <md-layout md-flex="35 ">
                    <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'430'}})">
                        <span class="flag-icon flag-icon-de "></span>
                    </md-button>
                </md-layout>
                <md-layout md-flex="35 ">
                    <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'438'}})">
                        <span class="flag-icon flag-icon-it "></span>
                    </md-button>
                </md-layout>
            </md-layout>
        </md-card-content>
    </md-card>
</template>

<script>

export default {
    name: 'pays'
};
</script>

<style>

</style>
