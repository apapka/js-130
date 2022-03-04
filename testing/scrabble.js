class Scrabble {
  static POINTS = {
    'AEIOULNRST': 1,
    'DG': 2,
    'BCMP': 3,
    'FHVWY': 4,
    'K': 5,
    'JX': 8,
    'QZ': 10,
  };

  constructor(word) {
    this.word = word ? word : '';
  }

  score() {
    let letters = this.word.toUpperCase().replace(/[^A-Z]/g, '').split('');
    let total = 0;

    letters.forEach(letter => {
      Object.keys(Scrabble.POINTS).forEach(allLetters => {
        if (allLetters.includes(letter)) {
          total += Scrabble.POINTS[allLetters];
        }
      });
    });

    return total;
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;