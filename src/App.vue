<template>
  <div>
    <router-view title="Capital Bridge" :country="country" :options="options" :checkAnswer="checkAnswer" :score="score" :answered="answered" :gameOver="gameOver" :chooseLevelDisplay="chooseLevelDisplay" :selectLevel="selectLevel" :gameLevel="gameLevel" :questionsAmmount="questionsAmmount" :currentQuestion="currentQuestion" />
    <div>
      <a href="https://www.linkedin.com/in/abiodun-olorunda-3176b6142/" style="text-decoration: none" target="_blank">
        <h3 style="text-align: center; color: var(--bodyBackgroundFirst);">
          Designed and Developed with ❤ by <span style="text-decoration: underline">Abiodun Olorunda</span>
        </h3>
      </a>
    </div>
  </div>
</template>

<script>
import countries from './countries.json'

export default {
  data () {
    return {
      chooseLevelDisplay: true,
      gameOver: false,
      countries,
      randomPosition: null,
      country: null,
      answer: null,
      options: null,
      optionOne: null,
      score: 0,
      answered: 0,
      currentQuestion: 0,
      valid: null,
      questionsAmmount: null,
      gameLevel: [
        {
          name: 'easy',
          questions: 10
        },
        {
          name: 'medium',
          questions: 20
        },
        {
          name: 'hard',
          questions: 60
        }
      ]
    }
  },
  methods: {
    renderGame () {
      this.currentQuestion++
      this.valid = true
      this.countries.sort(() => 0.5 - Math.random())
      this.randomPosition = Math.floor(Math.random() * this.countries.length)
      this.country = countries[this.randomPosition]
      this.answer = this.country.capital
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
    checkAnswer (option) {
      if (this.valid === true) {
        this.valid = false
        const possibleSelections = document.querySelectorAll('.input-radio')
        if (option === this.answer) {
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
        if (this.answered === this.questionsAmmount) {
          this.gameOver = true
          setTimeout((e) => {
            this.$router.replace('/about')
          }, 1000)
        }
        setTimeout(this.renderGame, 1000)
      }
    },
    selectLevel (level) {
      this.gameLevel.forEach(eachLevel => {
        if (level.name === eachLevel.name) {
          this.questionsAmmount = eachLevel.questions
        }
      })
      this.chooseLevelDisplay = false
    }
  },
  created () {
    this.renderGame()
  }
}
</script>
