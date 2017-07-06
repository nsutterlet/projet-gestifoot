<template>
    <div class="favoris">
        <md-card>
            <md-card-header>
                <div class="md-display-1 titre-vues">Mes équipes favorites</div>
            </md-card-header>
            <md-card-content>
                <md-layout md-align="center" md-gutter="16">
    
                    <md-table>
                        <md-table-header>
                            <md-table-row>
                                <md-table-head></md-table-head>
                                <md-table-head>Equipe</md-table-head>
                                <md-table-head>Supprimer</md-table-head>
                            </md-table-row>
                        </md-table-header>
    
                        <md-table-body>
                            <md-table-row v-for="(footTeam,index) in maList" v-bind:key="index">
                                <md-table-cell>
                                    <img :src="footTeam.logoURI" alt="logo" width="20px" height="20px">
                                </md-table-cell>
                                <md-table-cell>{{ footTeam.nom }}</md-table-cell>
                                <md-table-cell>
                                    <md-button v-on:click="removeFromList(footTeam)">
                                        <md-icon>remove</md-icon>
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
const LOCALSTORAGE_KEY = 'malist-fav';
let maList;

export default {
    name: 'favoris',
    data () {
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
            maList
        };
    },
    methods: {
        removeFromList (equipe) {
            this.maList.splice(this.maList.indexOf(equipe), 1);
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
.favoris {
    flex-direction: column;
    flex: 1;
}
</style>
