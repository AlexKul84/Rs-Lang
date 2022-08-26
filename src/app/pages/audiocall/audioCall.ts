import Component from "../../../common/Component";
import CategoriesPage from "./categoriesPage";
import GameFildPage from "./gameFildPage";
import GameOverPage from "./gameOverPage";
import StartPage from "./startPage";

class AudioCall extends Component {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'audio-call');
    this.mainCycle()
  }

  private gameCycle(categoryIndex: number) {
    const gameFild = new GameFildPage(this.node, { categoryIndex: categoryIndex })
    gameFild.onBack = () => {
      gameFild.destroy()
      this.mainCycle()
    }
    gameFild.onFinish = (result) => {
      gameFild.destroy()
      const gameOverPage = new GameOverPage(this.node, result)

      gameOverPage.onCategories = () => {
        gameOverPage.destroy()
        this.mainCycle()
      }

      gameOverPage.onNext = () => {
        gameOverPage.destroy()
        this.gameCycle(categoryIndex + 1)
      }
    }
  }

  private mainCycle() {
    const categories = new CategoriesPage(this.node)
    categories.onSelect = (index) => {
      categories.destroy()
      this.gameCycle(index)
    }
  }

}
export default AudioCall;
