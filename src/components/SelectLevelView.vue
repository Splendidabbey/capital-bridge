<template>
  <div class="game-level">
      Select your game Level
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
