import Component from "../../../common/Component";
import { IQuestionData } from "./IQuestionData";



class QuestionView extends Component {
  onAnswer: (index: number) => void;
  constructor(parentNode: HTMLElement, questionData: IQuestionData) {
    super(parentNode);

    const question = new Component(this.node, 'div', '', 'Вопрос?')
    const answerData = questionData.answers.map((it, i) => {
      const categoriesButton = new Component(this.node, 'button', '', i.toString())
      categoriesButton.node.onclick = () => this.onAnswer(i)
    })


  }
}
export default QuestionView;