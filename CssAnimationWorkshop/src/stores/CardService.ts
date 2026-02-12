import TCGdex from '@tcgdex/sdk'

export class CardService {

  tcgdex = new TCGdex('de');

  constructor() {
    this.tcgdex = new TCGdex('de');
  }

  async getCard() {
    return await this.tcgdex.random.card()
  }

}
