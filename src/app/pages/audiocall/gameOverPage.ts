import Component from "../../../common/Component";
import { IQuestionData, Ianswers } from "./dataModel";


type IGameResults = {
  rightAnswer: Ianswers;
  userAnswer: Ianswers
}[]

class GameOverPage extends Component {
  onNext: () => void;
  onCategories: (categories: string) => void

  constructor(parentNode: HTMLElement, results: IGameResults) {
    super(parentNode);

    const resultIndicator = new Component(this.node, 'div', '', '')
    resultIndicator.node.textContent = results.map((it) => {
      console.log(it);

      return it.rightAnswer.translate === it.userAnswer.translate ? it.rightAnswer.translate : it.userAnswer.translate
    }).join(' ')

    // const nextButton = new Component(this.node, 'button', '', 'next')
    // nextButton.node.onclick = () => this.onNext();

    const categoriesButton = new Component(this.node, 'button', '', 'categorises')
    categoriesButton.node.onclick = () => this.onCategories('categories')
  }
}
export default GameOverPage;
