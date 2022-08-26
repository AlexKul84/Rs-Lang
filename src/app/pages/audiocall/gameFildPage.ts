import Component from "../../../common/Component";

interface IGameOptions {
  categoryIndex: number;
}

interface IGameResult {

}

class GameFildPage extends Component {
  onBack: () => void;
  onFinish: (result: IGameResult) => void
  constructor(parentNode: HTMLElement, gameOptions: IGameOptions) {
    super(parentNode);
    console.log(gameOptions);
    const header = new Component(this.node, 'h1', '', `${gameOptions.categoryIndex + 1}`)

    const backButton = new Component(this.node, 'button', '', 'back')
    backButton.node.onclick = () => this.onBack();

    const finishButton = new Component(this.node, 'button', '', 'finish')
    finishButton.node.onclick = () => this.onFinish({});
  }
}
export default GameFildPage;
