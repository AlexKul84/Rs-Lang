import { IWordsData } from '../../../asset/utils/types'

export interface IQuestionData {
  answers: string[];
  correctAnswerIndex: number;
  voiceUrl: string;
}

export class DataModel {
  data: Array<IWordsData>
  constructor() {
    this.data
  }

  public getQuestions() {
    const result: IQuestionData[] = []
    for (let i = 0; i < 10; i++) {
      const answers: Array<string> = []
      const answersCount = 4
      const correctAnswerIndex = Math.floor(Math.random() * answersCount)
      const correctAnswer = this.data[i].wordTranslate
      for (let j = 0; j < answersCount; j++) {
        if (correctAnswerIndex == j) {
          answers.push(correctAnswer)
        } else {
          const variantWord = this.data[Math.floor(Math.random() * this.data.length)].wordTranslate
          answers.push(variantWord)
        }
      }
      const question: IQuestionData = {
        voiceUrl: this.data[i].audio,
        answers: answers,
        correctAnswerIndex: correctAnswerIndex
      }
      result.push(question)
    }
    return result
  }

  public async build(url: string) {
    this.data = await this.getWord(url)
    return this
  }

  private getWord(url: string) {
    return fetch(url).then(res => res.json())
  }
}