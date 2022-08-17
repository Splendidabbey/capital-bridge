<template>
  <div>
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
</template>

<script>
import OptionView from './OptionView.vue'

export default {
  name: 'QuestionView',
  props: ['flag', 'country', 'options', 'checkAnswer'],
  components: {
    OptionView
  }
}
</script>
