<template>
    <input :id="[option]" type="radio" class="input-radio" @click="checkAnswer">
    <label :for="[option]" class="radio-label">
      <span class="alphabet">A</span>{{ option }}
    </label>
</template>

<script>

export default {
  props: ['option', 'answer', 'checkAnswer', 'index'],
  data () {
    return {
      valid: true
    }
  }
}
</script>
