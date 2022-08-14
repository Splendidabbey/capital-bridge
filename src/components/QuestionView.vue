<template>
  <div>
    <div id ="score-counter">
      <p class="score-text">CORRECT: <span id="score">{{ score }}</span> / <span id="answered">{{ answered }}</span></p>
    </div>
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
            <input :id="[option]" type="radio" class="input-radio" @click="checkAnswer">
            <label :for="[option]" class="radio-label">
              <span class="alphabet">A</span>{{ option }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionView',
  props: ['title', 'flag', 'countries', 'country', 'options', 'checkAnswer', 'score', 'answered', 'valid'],
  data () {
    return {
    }
  },
  computed: {
  }
}
</script>
