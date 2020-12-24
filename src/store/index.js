import { makeObservable, observable, computed, action } from "mobx";

class Store {
    cards = [];

    constructor(cards) {
        this.cards = cards

        makeObservable(this, {
            cards: observable,
            getCardsLength: computed,
            increment: action
        })
    }

    get getCardsLength() {
        return 'this.cards.length'
        // return this.cards.length
    }

    setCardsData() {
        const apiUrl = 'https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e';
        fetch(apiUrl).then(response => response.json())
            .then(data => {
                this.cards.concat(data);
                console.log('Result ' + this.cards)
            })
            .catch(console.log);
    }
}

export default Store;