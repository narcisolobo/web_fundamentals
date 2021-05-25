const answers = [
  {
    answer: 'It is certain.',
    type: 'affirmative'
  },
  {
    answer: 'It is decidedly so.',
    type: 'affirmative'
  },
  {
    answer: 'Without a doubt.',
    type: 'affirmative'
  },
  {
    answer: 'Yes definitely.',
    type: 'affirmative'
  },
  {
    answer: 'You may rely on it.',
    type: 'affirmative'
  },
  {
    answer: 'As I see it, yes.',
    type: 'affirmative'
  },
  {
    answer: 'Most likely.',
    type: 'affirmative'
  },
  {
    answer: 'Outlook good.',
    type: 'affirmative'
  },
  {
    answer: 'Yes.',
    type: 'affirmative'
  },
  {
    answer: 'Signs point to yes.',
    type: 'affirmative'
  },
  {
    answer: 'Reply hazy, try again.',
    type: 'non-committal'
  },
  {
    answer: 'Ask again later.',
    type: 'non-committal'
  },
  {
    answer: 'Better not tell you now.',
    type: 'non-committal'
  },
  {
    answer: 'Cannot predict now.',
    type: 'non-committal'
  },
  {
    answer: 'Concentrate and ask again.',
    type: 'non-committal'
  },
  {
    answer: 'Don\'t count on it.',
    type: 'negative'
  },
  {
    answer: 'My reply is no.',
    type: 'negative'
  },
  {
    answer: 'My sources say no.',
    type: 'negative'
  },
  {
    answer: 'Outlook not so good.',
    type: 'negative'
  },
  {
    answer: 'Very doubtful.',
    type: 'negative'
  },
]

var fortune = document.querySelector('#fortune')

function shakeIt() {
  var randIdx = Math.floor(Math.random() * answers.length)
  var color = ''
  if(answers[randIdx].type == 'affirmative') {
    color = 'green'
  } else if(answers[randIdx].type == 'non-committal') {
    color = 'yellow'
  } else {
    color = 'red'
  }
  fortune.innerHTML = answers[randIdx].answer
  fortune.style.backgroundColor = color
}

var cookieBox = document.querySelector('#cookies')

function accept() {
  cookieBox.style.display = 'none'
}