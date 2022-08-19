<template>
  <div>
    <score-counter :score="score" :answered="answered" />
    <div class="container">
      <div class="header">
        <h1>{{ title }}</h1>
        <select-level-view v-if="chooseLevelDisplay" :selectLevel="selectLevel" :gameLevel="gameLevel" />
        <question-view v-else :country="country" :options="options" :checkAnswer="checkAnswer" :questionsAmmount="questionsAmmount" :currentQuestion="currentQuestion" />
      </div>
    </div>
  </div>
</template>

<script>
import QuestionView from '@/components/QuestionView.vue'
import ScoreCounter from '@/components/ScoreCounter.vue'
import SelectLevelView from '@/components/SelectLevelView.vue'

export default {
  props: ['title', 'country', 'options', 'checkAnswer', 'score', 'answered', 'selectLevel', 'chooseLevelDisplay', 'gameLevel', 'questionsAmmount', 'currentQuestion'],
  components: {
    QuestionView,
    ScoreCounter,
    SelectLevelView
  }
}
</script>
