<template>
  <div id="app">
    <nav class="orange darken-4">
      <div class="nav-wrapper">
        <a href="#/" class="brand-logo">exhibitions matching</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a>A</a></li>
          <li><a>B</a></li>
          <li><a>C</a></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
