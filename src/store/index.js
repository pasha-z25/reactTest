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

    // setCardsData = async () => {
    //     console.log(this);
    //     const apiUrl = 'https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e';
    //     this.cards = await fetch(apiUrl).then(response => response.json())
    //         .catch(console.log);
    // }

    setCardsData = () => {
        const apiUrl = 'https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e';
        fetch(apiUrl).then(response => response.json())
            .then(data => {
                this.cards = data;
            })
            .catch(console.log);
    }
}

export default new Store();