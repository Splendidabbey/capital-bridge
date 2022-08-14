<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <QuestionView :countries="countries" title="Capital Bridge" :flag="flag" :country="country" :options="options" :checkAnswer="checkAnswer" :score="score" :answered="answered" :valid="valid" />

  </div>
</template>

<script>
import QuestionView from '../components/QuestionView.vue'

export default {
  props: ['title', 'flag', 'countries', 'country', 'options', 'checkAnswer', 'score', 'answered', 'valid'],
  components: {
    QuestionView
  }
}
</script>
