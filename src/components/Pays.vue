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
                            <img src="https://upload.wikimedia.org/wikipedia/fr/9/9b/Logo_de_la_Ligue_1_%282008%29.svg" alt="logo">
                        </md-button>
                    </md-layout>
                    <md-layout md-flex="35 ">
                        <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'439'}})">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Liga_NOS_logo_white.svg" alt="logo">
                        </md-button>
                    </md-layout>
                </md-layout>
                <md-layout md-align="center " md-gutter="16 ">
                    <md-layout md-flex="35 ">
                        <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'426'}})">
                            <img src="https://upload.wikimedia.org/wikipedia/fr/e/ef/Logo_FA_Premier_League.svg" alt="logo">
                        </md-button>
                    </md-layout>
                    <md-layout md-flex="35 ">
                        <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'436'}})">
                            <img src="https://lh4.googleusercontent.com/-Ix86EQ2Vu0w/VQMWcwpVGZI/AAAAAAAABAk/6rC61reExPI/w1132-h1134/logo%2BLFP.svg.png" alt="logo">
                        </md-button>
                    </md-layout>
                </md-layout>
                <md-layout md-align="center " md-gutter="16 ">
                    <md-layout md-flex="35 ">
                        <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'430'}})">
                            <img src="https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg" alt="logo">
                        </md-button>
                    </md-layout>
                    <md-layout md-flex="35 ">
                        <md-button v-on:click.native="$router.push({name:'League', params:{idLeague:'438'}})">
                            <img src="https://upload.wikimedia.org/wikipedia/ro/a/aa/Serie_A.svg" alt="logo">
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
