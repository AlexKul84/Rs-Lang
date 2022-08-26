import Component from "../../../common/Component";
import QuestionView from "./questionView";
import { IQuestionData } from "./IQuestionData";


interface IGameOptions {
  categoryIndex: number;
}

interface IGameResult {

}

class GameFildPage extends Component {
  onBack: () => void;
  onFinish: (result: IGameResult) => void
  progressIndicator: Component<HTMLElement>;
  constructor(parentNode: HTMLElement, gameOptions: IGameOptions) {
    super(parentNode);
    console.log(gameOptions);
    const header = new Component(this.node, 'h1', '', `${gameOptions.categoryIndex + 1}`)

    const backButton = new Component(this.node, 'button', '', 'back')
    backButton.node.onclick = () => this.onBack();

    this.progressIndicator = new Component(this.node, 'div', '', '')

    const questions: Array<IQuestionData> = [{ answers: [1, 2, 3, 4] }, { answers: [1, 2, 3, 4] }, { answers: [1, 2, 3, 4] }]
    // const question = new QuestionView(this.node, questions[0])
    this.questionCycle(questions, 0, () => {
      this.onFinish({});
    })

    // const finishButton = new Component(this.node, 'button', '', 'finish')
    // finishButton.node.onclick = () => this.onFinish({});
  }

  questionCycle(questions: Array<IQuestionData>, index: number, onFinish: () => void) {
    if (index >= questions.length) {
      onFinish()
      return
    }
    this.progressIndicator.node.textContent = `${index + 1} / ${questions.length}`

    const question = new QuestionView(this.node, questions[index])
    question.onAnswer = answerIndex => {
      question.destroy()
      this.questionCycle(questions, index + 1, onFinish)
    }

  }
}
export default GameFildPage;
