/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chains = new Map();

    for (let i = 0; i < this.words.length; i += 1) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      if (chains.has(word)) chains.get(word).push(nextWord);
      else chains.set(word, [nextWord]);
    }
    this.chains = chains;
  }

  static choice(ar) {
    return ar[Math.floor(Math.random() * ar.length)];
  }

  /** return random text from chains */

  makeText(numWords = 50) {
    // TODO
    let keys = Array.from(this.chains.keys());
    let key = MarkovMachine.choice(keys);
    let out = [];

    while (out.length < numWords && key !== null) {
      out.push(key);
      key = MarkovMachine.choice(this.chains.get(key));
    }
    return out.join(" ");
  }
}

module.exports = {
  MarkovMachine,
};



// Step 2 - In Terminal write
// node makeText.js file eggs.txt
// I do not like them, Sam-I-am! I will not Like them, Sam-I-am That Sam-I-am That Sam-I-am Would you say. Try them! And I will not, would not, could you, On a fox. And I am Sam I do not like them With a mouse. I do not like green eggs

// node makeText.js url http://www.gutenberg.org/files/11/11-0.txt
// know!” exclaimed in dancing.” Alice again, and the Mouse did not gone from a tea-tray in a telescope.” And yesterday things indeed to laugh; and, as she was out that they hit her head impatiently; and, as well as she dropped them, in it,” said the March Hare. “Exactly so,”