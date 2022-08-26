import Component from "../../../common/Component";

class StartPage extends Component {
  onCategories: (categories: string) => void
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const categoriesButton = new Component(this.node, 'button', '', 'categorises')
    categoriesButton.node.onclick = () => this.onCategories('categories')
  }
}
export default StartPage;
