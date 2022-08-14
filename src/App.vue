<template>
  <nav>
    <router-link to="/">
      <span>Home</span>
    </router-link>
    <router-link to="/about">
      <span>About</span>
    </router-link>
  </nav>
  <router-view :countries="countries" title="Capital Bridge" :flag="flag" :country="country" :options="options" :checkAnswer="checkAnswer" :score="score" :answered="answered" :gameOver="gameOver" :valid="valid" />
</template>

<script>
import countries from './countries.json'

export default {
  data () {
    return {
      gameOver: false,
      countries,
      randomPosition: null,
      country: null,
      answer: null,
      countryCode: null,
      flag: null,
      options: null,
      optionOne: null,
      score: 0,
      answered: 0,
      valid: null
    }
  },
  methods: {
    renderGame () {
      this.valid = true
      this.countries.sort(() => 0.5 - Math.random())
      this.randomPosition = Math.floor(Math.random() * this.countries.length)
      this.country = countries[this.randomPosition].country
      this.answer = this.countries[this.randomPosition].capital
      this.countryCode = this.countries[this.randomPosition].code
      this.flag = './png100px/' + this.countries[this.randomPosition].flag
      this.options = [this.answer]
      const possibleSelections = document.querySelectorAll('.input-radio')
      while (this.options.length < 4) {
        const random = Math.floor(Math.random() * countries.length)
        const randomOptions = countries[random].capital
        if ((randomOptions !== this.answer) && (randomOptions != null)) {
          this.options.push(randomOptions)
        }
        this.options.sort(() => 0.5 - Math.random())
      }
      possibleSelections.forEach(possibleSelection => {
        possibleSelection.classList.remove('wrong')
        possibleSelection.classList.remove('answer')
      })
    },
    checkAnswer (e) {
      if (this.valid === true) {
        this.valid = false
        const selected = e.target.getAttribute('id')
        const possibleSelections = document.querySelectorAll('.input-radio')
        if (selected === this.answer) {
          this.score++
        }
        possibleSelections.forEach(possibleSelection => {
          if (possibleSelection.id !== this.answer) {
            possibleSelection.classList.add('wrong')
          } else {
            possibleSelection.classList.add('answer')
          }
        })
        this.answered++
        setTimeout(this.renderGame, 1000)
      }
    }
  },
  created () {
    this.renderGame()
  }
}
</script>
