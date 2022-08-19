<template>
  <div>
    <div class="question-tab" id="quest">
      <div class="question-image">
        <img :src="`/png100px/${country.flag}`" />
      </div>
      <div class="question">
        <p>QUESTION {{ currentQuestion }} OF {{ questionsAmmount }}</p>
        <p>
          Which of this is the capital of {{ country.name }} ({{ country.code}})
        </p>
      </div>
      <div v-for="(option, index) in options" :key="index" style="width:100%;">
        <option-view :option="option" :checkAnswer="checkAnswer" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import OptionView from './OptionView.vue'

export default {
  name: 'QuestionView',
  props: ['country', 'options', 'checkAnswer', 'questionsAmmount', 'currentQuestion'],
  components: {
    OptionView
  }
}
</script>
