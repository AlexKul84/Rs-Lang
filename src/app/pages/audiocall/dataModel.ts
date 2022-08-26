import { IWordsData } from '../../../asset/utils/types'
import { URL } from '../../../asset/utils/types'

export class DataModel {
  data: Array<IWordsData>
  constructor() {

  }

  public async getWord(url: string) {
    const resp = await fetch(url);
    return resp.json();
  }
}