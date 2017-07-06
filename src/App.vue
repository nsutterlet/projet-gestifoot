<template>
  <div id="app">



  
        
    <md-toolbar>
        <md-button class="md-icon-button" v-on:click="$router.push({name: 'Pays'})">
            <md-icon>home</md-icon>
        </md-button>
    
        <h2 class="md-title" style="flex: 1">GestiFoot</h2>

         <md-button class="md-icon-button" v-on:click="$router.push({name: 'Favoris'})">
            <md-icon>favorite</md-icon>
        </md-button>
    </md-toolbar>

        <router-view class="main-content"></router-view>
    </div>
</template>

<script>

export default {
    name: 'app'
};

</script>

<style>
.img-league {
    width: 150px;
}
#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.main-content{
    display: flex;
    flex-direction: column;
    flex: 1;
}
.md-card {
    flex-direction: column;
    flex: 1;
}
.md-table{
    flex-direction: column;
    flex: 1;
}
.titre-vues {
    font-family: Verdana;
    color: grey;
    text-align: center;
}
.md-icon {
    color:white;
}
.md-toolbar .md-title{
    color: white;
}
</style>
