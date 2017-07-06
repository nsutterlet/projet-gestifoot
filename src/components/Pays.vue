<template>
    <div class="pays">
        <md-card>
            <md-card-header>
                <div class="md-title">Football Stats</div>
            </md-card-header>
            <md-card-content>
    
                <md-layout md-align="center " md-gutter="16 ">
                    <md-layout md-flex="35 ">
                        <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'434'}})">
                            <img src="../assets/ligue_1.svg" alt="logo">
                        </md-button>
                    </md-layout>
                    <md-layout md-flex="35 ">
                        <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'439'}})">
                            <img src="../assets/liga_nos.svg" alt="logo">
                        </md-button>
                    </md-layout>
                </md-layout>
                <md-layout md-align="center " md-gutter="16 ">
                    <md-layout md-flex="35 ">
                        <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'426'}})">
                            <img src="../assets/premier_league.svg" alt="logo">
                        </md-button>
                    </md-layout>
                    <md-layout md-flex="35 ">
                        <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'436'}})">
                            <img src="../assets/la_liga.png" alt="logo">
                        </md-button>
                    </md-layout>
                </md-layout>
                <md-layout md-align="center " md-gutter="16 ">
                    <md-layout md-flex="35 ">
                        <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'430'}})">
                            <img src="../assets/bundesliga.svg" alt="logo">
                        </md-button>
                    </md-layout>
                    <md-layout md-flex="35 ">
                        <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'438'}})">
                            <img src="../assets/serie_a.svg" alt="logo">
                        </md-button>
                    </md-layout>
                </md-layout>
            </md-card-content>
        </md-card>
    </div>
</template>

<script>

export default {
    name: 'pays'
};
</script>

<style>

</style>
