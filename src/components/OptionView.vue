<template>
    <input :id="[option]" type="radio" class="input-radio" @click="checkAnswer(option)">
    <label :for="[option]" class="radio-label">
      <span class="alphabet" v-if="index == 0">A</span>
      <span class="alphabet" v-else-if="index == 1">B</span>
      <span class="alphabet" v-else-if="index == 2">C</span>
      <span class="alphabet" v-else-if="index == 3">D</span>
        {{ option }}
    </label>
</template>

<script>

export default {
  props: ['option', 'answer', 'checkAnswer', 'index']
}
</script>
