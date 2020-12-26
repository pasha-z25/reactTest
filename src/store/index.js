import { makeObservable, observable, computed, action } from "mobx";

class Store {
    apiUrl = 'https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e';
    cards = [];
    modalState = false;
    modalCard = [];

    constructor(cards = []) {
        this.cards = cards;

        makeObservable(this, {
            cards: observable,
            modalState: observable,
            modalCard: observable,
            getCardsLength: computed,
            getModalState: computed,
            getDataFromApi: action,
            addCardToModal: action,
            clearModalCard: action,
            setModal: action
        })
    }

    get getCardsLength() {
        return this.cards.length
    }

    get getModalState() {
        return this.modalState
    }

    getDataFromApi = () => {
        fetch(this.apiUrl).then(response => response.json())
            .then(data => {
                this.cards = data;
            })
            .catch(console.log);
    }

    setModal = status => this.modalState = status;

    addCardToModal = item => this.modalCard.push(item)

    clearModalCard = () => this.modalCard = [];
}

export default new Store();