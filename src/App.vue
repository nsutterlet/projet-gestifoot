<template>
    <div id="app">
        <md-toolbar>
            <h2 class="md-title" style="flex: 1">GestiFoot</h2>
        </md-toolbar>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'app'
};
</script>

<style>
.flag-icon {
    border-radius: 20px;
    font-size: 100px;
}
</style>
