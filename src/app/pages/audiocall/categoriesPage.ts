import Component from "../../../common/Component";

class CategoriesPage extends Component {
  onBack: () => void;
  onSelect: (index: number) => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode);

    for (let i = 0; i < 6; i++) {
      const button = new Component(this.node, 'button', '', (i + 1).toString())
      button.node.onclick = () => this.onSelect(i)
    }
  }
}
export default CategoriesPage;
