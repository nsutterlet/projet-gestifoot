<template>
    <div id="app">
        <md-toolbar>
            <md-button class="md-icon-button">
                <md-icon>menu</md-icon>
            </md-button>
    
            <h2 class="md-title" style="flex: 1">GestiFoot</h2>
    
            <md-button class="md-icon-button">
                <md-icon>favorite</md-icon>
            </md-button>
        </md-toolbar>
        <md-card>
            <md-card-header>
                <div class="md-title"> Your Football Stats</div>
                <div class="md-subhead">by Hugo & Nico</div>
            </md-card-header>
            <md-card-content>
                <md-layout md-align="center" md-gutter="16">
                    <md-layout md-flex="35">
                        <md-button><span class="flag-icon flag-icon-fr"></span></md-button>
                    </md-layout>
                    <md-layout md-flex="35">
                        <md-button><span class="flag-icon flag-icon-pt"></span></md-button>
                    </md-layout>
                </md-layout>
                <md-layout md-align="center" md-gutter="16">
                    <md-layout md-flex="35">
                        <md-button><span class="flag-icon flag-icon-gb"></span></md-button>
                    </md-layout>
                    <md-layout md-flex="35">
                        <md-button><span class="flag-icon flag-icon-es"></span></md-button>
                    </md-layout>
                </md-layout>
                <md-layout md-align="center" md-gutter="16">
                    <md-layout md-flex="35">
                        <md-button><span class="flag-icon flag-icon-ge"></span></md-button>
                    </md-layout>
                    <md-layout md-flex="35">
                        <md-button><span class="flag-icon flag-icon-it"></span></md-button>
                    </md-layout>
                </md-layout>
            </md-card-content>
        </md-card>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.flag-icon {
    border-radius: 20px;
    font-size: 100px;
}
</style>
