<template>
  <div id ="score-counter">
  <p class="score-text">CORRECT: <span id="score">{{ score }}</span> / <span id="answered">{{ answered }}</span></p>
  </div>
</template>

<script>

export default {
  props: ['score', 'answered']
}
</script>
