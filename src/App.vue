<template>
  <!-- Vue 3 uses Partials, so a root element is not needed anymore -->
  <div id="header"></div>
  <the-resources></the-resources>
</template>

<script>
import TheResources from './components/learning-resources'

export default {
  name: 'App',
  components: {
    TheResources
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
