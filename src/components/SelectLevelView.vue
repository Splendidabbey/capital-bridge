<template>
  <div class="game-level">
      <div class="select-info">Select your game Level<span>Questions</span></div>
      <div v-for="(level, index) in gameLevel" :key="index">
        <input type="radio" name="medium">
        <label @click="selectLevel(level)" for="medium">{{ level.name }}<span>{{ level.questions}}</span></label>
      </div>
  </div>
</template>

<script>

export default {
  props: ['selectLevel', 'gameLevel']
}
</script>
