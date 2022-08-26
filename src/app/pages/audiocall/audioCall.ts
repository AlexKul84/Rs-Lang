import Component from "../../../common/Component";
import { IWordsData } from '../../../asset/utils/types'
import { URL } from '../../../asset/utils/types'

class AudioCall extends Component {
  game: Component<HTMLElement>;
  chapterHard: Component<HTMLElement>;
  wordsToGuess: Component<HTMLElement>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'audio-call');

    const title = new Component(this.node, 'h2', '', 'Audio Call игра');

    this.game = new Component(this.node, 'div', 'game');
    const voice = new Component(this.game.node, 'div', 'voice');

    this.wordsToGuess = new Component(this.game.node, 'ul', 'words-to-guess');

    this.getWord(`${URL.url}${URL.group}${this.getRandome(0, 5)}${URL.page}${this.getRandome(0, 29)}`).then((data) => {

      const dataTrue = data[this.getRandome(0, 19)]
      const dataFalse = data

      voice.node.onclick = () => {
        new Audio(`https://rss-lang-backends.herokuapp.com/${dataTrue.audio}`).play();
      }
      const answer = new Component(this.game.node, 'div', 'answer');

      const word1 = new Component(this.wordsToGuess.node, 'li', 'word-to-guess active', `${dataTrue.wordTranslate}`);
      const nextWord = new Component(this.game.node, 'button', 'next-word', 'Пропустить');

    })

    this.getWord(`${URL.url}${URL.group}${this.getRandome(0, 5)}${URL.page}${this.getRandome(0, 29)}`).then((data) => {
      const dataFalse = data
      const word2 = new Component(this.wordsToGuess.node, 'li', 'word-to-guess', `${dataFalse[this.getRandome(0, 19)].wordTranslate}`);
    })

    this.getWord(`${URL.url}${URL.group}${this.getRandome(0, 5)}${URL.page}${this.getRandome(0, 29)}`).then((data) => {
      const dataFalse = data
      const word2 = new Component(this.wordsToGuess.node, 'li', 'word-to-guess', `${dataFalse[this.getRandome(0, 19)].wordTranslate}`);
    })

    this.getWord(`${URL.url}${URL.group}${this.getRandome(0, 5)}${URL.page}${this.getRandome(0, 29)}`).then((data) => {
      const dataFalse = data
      const word2 = new Component(this.wordsToGuess.node, 'li', 'word-to-guess', `${dataFalse[this.getRandome(0, 19)].wordTranslate}`);

      console.log(this.wordsToGuess.node.childNodes.length);
      console.log(this.wordsToGuess.node.childNodes[1]);

    })

    const chapters = new Component(this.node, 'div', 'chapters')

    this.chapterHard = new Component(chapters.node, 'div', 'chapter', 'Сложные слова')

  }

  // render = ()

  private getRandome = (min: number, max: number) => Math.round(min - 0.5 + Math.random() * (max - min + 1))


  private shuffleList = (listItem: Component<HTMLElement>[]) => listItem.sort(() => Math.random() - 0.5)

  private async getWord(url: string) {
    const resp = await fetch(url);
    return resp.json();
  }

}

export default AudioCall;
