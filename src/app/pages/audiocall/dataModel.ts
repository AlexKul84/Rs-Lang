import { IWordsData } from '../../../asset/utils/types'

export interface IQuestionData {
  answers: string[];
  correctAnswerIndex: number;
  voiceUrl: string;
}

export class DataModel {
  data: Array<IWordsData>
  data1: Array<IWordsData>;
  data2: Array<IWordsData>;
  data3: Array<IWordsData>;
  constructor() {
    this.data
  }

  public getQuestions() {
    const result: IQuestionData[] = []
    console.log(this.data);
    // console.log(this.data1);
    // console.log(this.data2);
    // console.log(this.data3);

    for (let i = 0; i < 10; i++) {
      const answers: Array<string> = []
      const answersCount = 4
      const correctAnswerIndex = Math.floor(Math.random() * answersCount)
      const correctAnswer = this.data[i].wordTranslate
      const answer1 = this.data1[i].wordTranslate
      const answer2 = this.data2[i].wordTranslate
      const answer3 = this.data3[i].wordTranslate

      for (let j = 0; j < answersCount; j++) {

        if (correctAnswerIndex == j) {
          answers.push(correctAnswer)
        } else {
          const variantWord = this.data1[Math.floor(Math.random() * this.data1.length)].wordTranslate
          if (!answers.includes(variantWord)) {
            answers.push(variantWord)
          }
        }
      }
      if (answers.length < 4) answers.push(this.data2[Math.floor(Math.random() * this.data2.length)].wordTranslate)
      const question: IQuestionData = {
        voiceUrl: this.data[i].audio,
        answers: answers,
        correctAnswerIndex: correctAnswerIndex
      }
      result.push(question)
    }
    return result
  }

  public async build(url: string, url1: string, url2: string, url3: string) {
    this.data = await this.getWord(url)
    this.data1 = await this.getWord(url1)
    this.data2 = await this.getWord(url2)
    this.data3 = await this.getWord(url3)
    return this
  }

  private getWord(url: string) {
    return fetch(url).then(res => res.json())
  }
}