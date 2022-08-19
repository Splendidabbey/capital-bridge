<template>
  <div class="game-info">
    <div class="header">
      <h1 v-if="!gameOver" id="game-over">Game On</h1>
      <h1 v-else id="game-over">Game Over</h1>
      <h2 style="margin-top: 100px">
        Keep up the good work, You scored<br />
        <span id="end-score">{{ score }}</span> out of
        <span>{{ answered }}</span>
      </h2>
      <div style="margin-top: 50px">
        <a id="btn-play-again" type="submit" href="/">Play Again</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['score', 'answered', 'gameOver']
}
</script>
