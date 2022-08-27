import Component from "../../../common/Component";
import QuestionView from "./questionView";
import { IQuestionData } from "./dataModel";

type IGameResults = Array<boolean>

class GameFildPage extends Component {
  onBack: () => void;
  onFinish: (result: IGameResults) => void
  progressIndicator: Component<HTMLElement>;
  results: IGameResults;
  answersIndicator: Component<HTMLElement>;

  constructor(parentNode: HTMLElement, categoryIndex: number, questionsData: Array<IQuestionData>) {
    super(parentNode);
    const header = new Component(this.node, 'h1', '', `${categoryIndex + 1}`)

    const backButton = new Component(this.node, 'button', '', 'back')
    backButton.node.onclick = () => this.onBack();

    this.progressIndicator = new Component(this.node, 'div', '', '')
    this.answersIndicator = new Component(this.node, 'div', '', '')

    this.results = []
    this.questionCycle(questionsData, 0, () => {
      this.onFinish(this.results);
    })
  }

  questionCycle(questions: Array<IQuestionData>, index: number, onFinish: () => void) { //questions: Array<any>
    if (index >= questions.length) {
      onFinish()
      return
    }
    this.progressIndicator.node.textContent = `${index + 1} / ${questions.length}`
    this.answersIndicator.node.textContent = this.results.map((it) => it ? '+' : '-').join(' ')

    const question = new QuestionView(this.node, questions[index])
    question.onAnswer = answerIndex => {
      question.destroy()
      this.results.push(answerIndex === questions[index].correctAnswerIndex)
      this.questionCycle(questions, index + 1, onFinish)
    }
  }
}
export default GameFildPage;
