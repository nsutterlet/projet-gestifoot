<template>
    <div class="pays">
        <md-card>
            <md-card-header>
            </md-card-header>
            <md-card-content>
    
                <md-layout md-align="center " md-gutter="16">
                    <md-layout md-align="center" md-flex="35 ">
                        <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'434'}})">
                            <img class="img-league" src="../assets/ligue_1.svg" alt="logo">
                        </md-button>
                    </md-layout>
                    <md-layout md-align="center" md-flex="35 ">
                        <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'439'}})">
                            <img class="img-league" src="../assets/liga_nos.svg" alt="logo">
                        </md-button>
                    </md-layout>
                </md-layout>
                <md-layout md-align="center " md-gutter="16">
                    <md-layout md-align="center" md-flex="35 ">
                        <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'426'}})">
                            <img class="img-league" src="../assets/premier_league.svg" alt="logo">
                        </md-button>
                    </md-layout>
                    <md-layout md-align="center" md-flex="35 ">
                        <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'436'}})">
                            <img class="img-league" src="../assets/la_liga.png" alt="logo">
                        </md-button>
                    </md-layout>
                </md-layout>
                <md-layout md-align="center" md-gutter="16">
                    <md-layout md-align="center" md-flex="35 ">
                        <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'430'}})">
                            <img class="img-league" src="../assets/bundesliga.svg" alt="logo">
                        </md-button>
                    </md-layout>
                    <md-layout md-align="center" md-flex="35 ">
                        <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'431'}})">
                            <img class="img-league" src="../assets/bundesliga_2.svg" alt="logo">
                        </md-button>
                    </md-layout>
                </md-layout>
                <md-layout md-align="center" md-gutter="16">
                    <md-layout md-align="center" md-flex="35 ">
                        <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'433'}})">
                            <img class="img-league" src="../assets/eredivisie.svg" alt="logo">
                        </md-button>
                    </md-layout>
                    <md-layout md-align="center" md-flex="35 ">
                        <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'438'}})">
                            <img class="img-league" src="../assets/serie_a.svg" alt="logo">
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
.pays {
    flex-direction: column;
    flex: 1;
}
</style>
