<template>
  <div id="app">
    <meta charset="utf-8">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Pacifico|Vibur:300,400,500,700,400italic">
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="manifest" href="static/manifest.json">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="application-name" content="Shop Memo">
    <meta name="apple-mobile-web-app-title" content="Shop Memo">
    <meta name="theme-color" content="#388E3C">
    <meta name="msapplication-navbutton-color" content="#388E3C">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="msapplication-starturl" content="/">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="icon" type="image/png" sizes="192x192" href="static/icons/logo-192.png">
    <link rel="apple-touch-icon" href="static/icons/logo-192.png">


  
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
