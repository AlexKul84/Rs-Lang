import Component from "../../../common/Component";
import { IWordsData } from '../../../asset/utils/types'
import { URL } from '../../../asset/utils/types'

class AudioCall extends Component {
  game: Component<HTMLElement>;
  currentChapter: number;
  currentPage: number;
  currentPageIndex: number;
  chapterHard: Component<HTMLElement>;
  gameWrapper: Component<HTMLElement>;


  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'audio-call');
    this.currentChapter = 0;
    this.currentPage = 0;
    this.currentPageIndex = 1;
    this.getItemWord(`${URL.url}${URL.group}${this.currentChapter}${URL.page}${this.currentPage}`);

    const title = new Component(this.node, 'h2', '', 'Audio Call игра');

    this.game = new Component(this.node, 'div', 'game');

    const chapters = new Component(this.node, 'div', 'chapters')
    for (let i = 0; i < 6; i++) {
      const chapter = new Component(chapters.node, 'div', 'chapter', `Раздел ${i + 1}`)
      chapter.node.onclick = () => {
        this.currentChapter = i;
        this.currentPage = 0;
        this.currentPageIndex = 1;
        // this.updatePagginator();

        this.getItemWord(`${URL.url}${URL.group}${this.currentChapter}${URL.page}${this.currentPage}`)
      }
    }
  }

  private getItemWord(url: string) {
    this.getWord(url).then((data) => {

      const dataTrue = data[this.getRandomeWord(0, 19)]
      const dataFalse = data
      const voice = new Component(this.game.node, 'div', 'voice');
      voice.node.onclick = () => {
        new Audio(`https://rss-lang-backends.herokuapp.com/${dataTrue.audio}`).play();
      }
      const answer = new Component(this.game.node, 'div', 'answer');
      const wordsToGuess = new Component(this.game.node, 'ul', 'words-to-guess');
      const word1 = new Component(wordsToGuess.node, 'li', 'word-to-guess', `${dataTrue.wordTranslate}`);
      const word2 = new Component(wordsToGuess.node, 'li', 'word-to-guess', `${dataFalse[this.getRandomeWord(0, 19)].wordTranslate}`);
      const word3 = new Component(wordsToGuess.node, 'li', 'word-to-guess', `${dataFalse[this.getRandomeWord(0, 19)].wordTranslate}`);
      const word4 = new Component(wordsToGuess.node, 'li', 'word-to-guess', `${dataFalse[this.getRandomeWord(0, 19)].wordTranslate}`);
      const nextWord = new Component(this.game.node, 'button', 'next-word', 'Пропустить');

    })
  }

  private updatePagginator() {
    this.game.destroy();
    this.game = new Component(this.game.node, 'div', 'game');
  }

  private getRandomeWord = (min: number, max: number) => Math.round(min - 0.5 + Math.random() * (max - min + 1))


  private async getWord(url: string) {
    const resp = await fetch(url);
    return resp.json();
  }

}

export default AudioCall;
