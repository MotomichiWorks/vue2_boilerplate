<template>
  <section>
    <h2>Second.vueのテンプレート部分</h2>
    <div>
      説明用ということで、ごちゃごちゃしないようにSecond.vueには何も記述していませんが、<br>
      基本的には1コンポーネントにつき1モジュールの関係を作るのが一般的で解りやすい気がします。
    </div>
  </section>
</template>

<script>
export default {
  name: 'Second',
  // ここにFirst.vueみたいな感じで書きます。
  computed: {
  },
}
</script>
