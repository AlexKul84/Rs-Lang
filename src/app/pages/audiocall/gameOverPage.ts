import Component from "../../../common/Component";

class GameOverPage extends Component {
  onNext: () => void;
  onCategories: (categories: string) => void

  constructor(parentNode: HTMLElement, results: boolean[]) {
    super(parentNode);

    const resultIndicator = new Component(this.node, 'div', '', '')
    resultIndicator.node.textContent = results.map((it: boolean) => it ? '+' : '-').join(' ')

    // const nextButton = new Component(this.node, 'button', '', 'next')
    // nextButton.node.onclick = () => this.onNext();

    const categoriesButton = new Component(this.node, 'button', '', 'categorises')
    categoriesButton.node.onclick = () => this.onCategories('categories')
  }
}
export default GameOverPage;
