<template>
  <div id="app">
    <First/>
    <Second/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import First from './components/First'
import Second from './components/Second'

export default {
  name: 'app',
  components: {
    First,
    Second,
  },
}
</script>
