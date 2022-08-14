<template>
  <div class="about">
    <GameInfo :score="score" :answered="answered" :gameOver="gameOver"/>
  </div>
</template>

<script>
import GameInfo from '@/components/GameInfo.vue'

export default {
  name: 'AboutView',
  props: ['score', 'answered', 'gameOver'],
  components: {
    GameInfo
  }
}
</script>
