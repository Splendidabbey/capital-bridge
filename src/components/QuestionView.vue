<template>
  <div>
    <score-counter :score="score" :answered="answered" />
    <div class="container">
      <div class="header">
        <h1>{{ title }}</h1>
        <div class="question-tab" id="quest">
          <div class="question-image">
            <img :src="[this.flag]" />
          </div>
          <div class="question">
            <p>
              Which of this is the capital of {{ country }} (GT)
            </p>
          </div>
          <div v-for="(option, index) in options" :key="index" style="width:100%;">
            <option-view :option="option" :checkAnswer="checkAnswer" :index="index" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScoreCounter from './ScoreCounter.vue'
import OptionView from './OptionView.vue'

export default {
  name: 'QuestionView',
  props: ['title', 'flag', 'countries', 'country', 'options', 'checkAnswer', 'score', 'answered', 'valid'],
  data () {
    return {
    }
  },
  components: {
    ScoreCounter,
    OptionView
  }
}
</script>
