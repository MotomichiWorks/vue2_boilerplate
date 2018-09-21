<template>
  <section>
    <h2>First.vueのテンプレート部分</h2>
    <section>
      <h3>computedの値を出力</h3>
      <div>
        rootExampleGetter: {{ rootExampleGetter }}
      </div>
      <div>
        firstGetter: {{ firstGetter }}
      </div>
      <div>
        secondGetter: {{ secondGetter }}
      </div>
      <div>
        firstGetterCombination: {{ firstGetterCombination }}
      </div>
      <div>
        secondCloneGetter: {{ secondCloneGetter }}
      </div>
      <div>
        rootExampleState: {{ rootExampleState }}
      </div>
      <div>
        firstState: {{ firstState }}
      </div>
      <div>
        secondState: {{ secondState }}
      </div>
      <div>
        secondCloneState: {{ secondCloneState }}
      </div>
    </section>
    <section>
      <h3>mutationsでStateを変化させる</h3>
      <div>
        文字列を変更してblurするとfirstStateが変更されます。
        <input
          type="text"
          :value="firstState"
          @change="(e) => {setFirstState(e.target.value)}"
        >
      </div>
      <div>
        <button @click="resetFirstState">
          クリックしてfirstStateの値を初期値に戻す(非同期処理を挟んでStateを更新します)
        </button>
      </div>
      <div>
        文字列を変更してblurするとsecondStateが変更されます。
        <input
          type="text"
          :value="secondState"
          @change="(e) => {setSecondState(e.target.value)}"
        >
      </div>
      <div>
        <button @click="resetSecondState">
          クリックしてsecondStateの値を初期値に戻す(非同期処理を挟んでStateを更新します)
        </button>
      </div>
      <div>
        文字列を変更してblurするとsecondCloneのstateが変更されます。
        <input
          type="text"
          :value="secondCloneState"
          @change="(e) => {setSecondCloneState(e.target.value)}"
        >
      </div>
    </section>

  </section>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'First',
  computed: {
    exampleComputed() {
      return 'mappingではなく、普通にcomputedを定義したい場合'
    },
    ...mapGetters([
      'rootExampleGetter'
    ]),
    ...mapGetters('first', [
      'firstGetter',
      'firstGetterCombination',
    ]),
    ...mapGetters('second', [
      'secondGetter'
    ]),
    ...mapGetters('secondClone', {
      secondCloneGetter: 'secondGetter'
    }),
    ...mapState([
      'rootExampleState',
    ]),
    ...mapState('first', [
      'firstState',
    ]),
    ...mapState('second', [
      'secondState',
    ]),
    ...mapState('secondClone', {
      secondCloneState: 'secondState',
    }),
  },
  methods: {
    resetFirstState() {
      const promise = this.asyncFirst()
      promise.then(this.successFnFirst)
    },
    successFnFirst() {
      this.setFirstState('firstStateの初期値')
    },
    resetSecondState() {
      const promise = this.asyncSecond()
      promise.then(this.successFnSecond)
    },
    successFnSecond() {
      this.setSecondState('secondStateの初期値')
    },
    ...mapActions('first', [
      'asyncFirst',
    ]),
    ...mapActions('second', [
      'asyncSecond',
    ]),
    ...mapMutations('first', [
      'setFirstState',
    ]),
    ...mapMutations('second', [
      'setSecondState',
    ]),
    ...mapMutations('secondClone', {
      setSecondCloneState: 'setSecondState'
    }),
  },
}
</script>
