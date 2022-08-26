import Component from "../../../common/Component";

class CategoriesPage extends Component {
  onBack: () => void;
  onSelect: (index: number) => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const categoriesList = [1, 2, 3, 4, 5, 6]
    // const categoryButtons = categoriesList.map((it, i) => {
    //   const button = new Component(this.node, 'button', '', it.toString())
    //   button.node.onclick = () => this.onSelect(i)
    // })
    for (let i = 0; i < 6; i++) {
      const button = new Component(this.node, 'button', '', (i + 1).toString())
      button.node.onclick = () => this.onSelect(i)
    }
  }
}
export default CategoriesPage;
