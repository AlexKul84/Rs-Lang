import Component from "../../../common/Component";
import CategoriesPage from "./categoriesPage";
import GameFildPage from "./gameFildPage";
import StartPage from "./startPage";

class AudioCall extends Component {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'audio-call');
    this.mainCycle()
  }

  private mainCycle() {
    const categories = new CategoriesPage(this.node)
    categories.onSelect = (index) => {
      categories.destroy()
      const gameFild = new GameFildPage(this.node, { categoryIndex: index })
      gameFild.onBack = () => {
        gameFild.destroy()
        this.mainCycle()
      }
    }
  }

}
export default AudioCall;
