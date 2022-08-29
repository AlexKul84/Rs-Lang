import Component from "../../../common/Component";

type IGameResults = {
  rightAnswer: string;
  userAnswer: string
}[]

class GameOverPage extends Component {
  onNext: () => void;
  onCategories: (categories: string) => void

  constructor(parentNode: HTMLElement, results: IGameResults) {
    super(parentNode);

    const resultIndicator = new Component(this.node, 'div', '', '')
    resultIndicator.node.textContent = results.map((it) => {

      return it.rightAnswer === it.userAnswer ? it.rightAnswer : it.userAnswer
    }).join(' ')

    // const nextButton = new Component(this.node, 'button', '', 'next')
    // nextButton.node.onclick = () => this.onNext();

    const categoriesButton = new Component(this.node, 'button', '', 'categorises')
    categoriesButton.node.onclick = () => this.onCategories('categories')
  }
}
export default GameOverPage;
