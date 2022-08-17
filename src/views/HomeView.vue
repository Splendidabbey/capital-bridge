<template>
  <div>
    <score-counter :score="score" :answered="answered" />
    <div class="container">
      <div class="header">
        <h1>{{ title }}</h1>
        <select-level-view v-if="chooseLevel" :selectLevel="selectLevel" :gameLevel="gameLevel" />
        <question-view v-else :flag="flag" :country="country" :options="options" :checkAnswer="checkAnswer" />
      </div>
    </div>
  </div>
</template>

<script>
import QuestionView from '@/components/QuestionView.vue'
import ScoreCounter from '@/components/ScoreCounter.vue'
import SelectLevelView from '@/components/SelectLevelView.vue'

export default {
  props: ['title', 'flag', 'country', 'options', 'checkAnswer', 'score', 'answered', 'selectLevel', 'chooseLevel', 'gameLevel'],
  components: {
    QuestionView,
    ScoreCounter,
    SelectLevelView
  }
}
</script>
