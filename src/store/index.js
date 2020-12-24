import { makeObservable, observable, computed, action } from "mobx";

class Store {
    cards = [];

    constructor(cards = []) {
        this.cards = cards;

        makeObservable(this, {
            cards: observable,
            getCardsLength: computed,
            setCardsData: action
        })
    }

    get getCardsLength() {
        return this.cards.length
    }

    setCardsData = () => {
        const apiUrl = 'https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e';
        fetch(apiUrl).then(response => response.json())
            .then(data => {
                console.log(data);
                this.cards = data;
            })
            .catch(console.log);
    }
}

export default new Store();