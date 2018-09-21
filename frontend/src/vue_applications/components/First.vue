<template>
  <div>
    ひとつめのコンポーネント
    <div>
      {{ firstGetter }}
    </div>
    <div>
      {{ secondGetter }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'First',
  computed: {
    ...mapGetters('first', [
      'firstGetter'
    ]),
    ...mapGetters('second', [
      'secondGetter'
    ]),
  },
  methods: {

  },
}
</script>
