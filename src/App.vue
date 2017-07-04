<template>
    <div id="app">
        <md-toolbar>
            <center><h1 class="md-title">GestiFoot</h1></center>
        </md-toolbar>
        <div class="menu-principal">
            <md-list>
                <md-list-item>
                    <span class="flag-icon flag-icon-ch"></span>
                </md-list-item>
                <md-list-item>
                    <span class="flag-icon flag-icon-pt"></span>
                </md-list-item>
                <md-list-item>
                    <span class="flag-icon flag-icon-gb"></span>
                </md-list-item>
                <md-list-item>
                    <span class="flag-icon flag-icon-es"></span>
                </md-list-item>
                <md-list-item>
                    <span class="flag-icon flag-icon-de"></span>
                </md-list-item>
                <md-list-item>
                    <span class="flag-icon flag-icon-it"></span>
                </md-list-item>
            </md-list>
        </div>
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
    border-radius: 10px;
    font-size: 200px;
}
</style>
