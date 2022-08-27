import Component from "../../../common/Component";
import { IQuestionData } from "./dataModel";

class QuestionView extends Component {
  onAnswer: (index: number) => void;
  constructor(parentNode: HTMLElement, questionData: IQuestionData) {
    super(parentNode);

    const question = new Component(this.node, 'div', 'voice', '')

    // const voice = new Component(question.node, 'div', 'voice');
    // voice.node.onload = () => {
    //   new Audio(`https://rss-lang-backends.herokuapp.com/${questionData.voiceUrl}`).play();
    // }
    // console.log(voice);

    const voice = new Audio(`https://rss-lang-backends.herokuapp.com/${questionData.voiceUrl}`)

    question.node.onclick = () => {
      new Audio(`https://rss-lang-backends.herokuapp.com/${questionData.voiceUrl}`).play();
    }

    window.onload = () => {
      new Audio(`https://rss-lang-backends.herokuapp.com/${questionData.voiceUrl}`).play();
    }

    question.node.append(voice)

    const answerButtons = questionData.answers.map((it, i) => {
      const categoriesButton = new Component(this.node, 'button', '', it)
      categoriesButton.node.onclick = () => this.onAnswer(i)
    })


  }
}
export default QuestionView;