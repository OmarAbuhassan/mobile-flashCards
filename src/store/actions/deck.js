import {  saveDeckTitle, addCardDeck, removeDeck } from '../../utils/api'

export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const RECEIVE_DECK = "RECEIVE_DECK"
export const ADD_DECK = "ADD_DECK"
export const ADD_CARD = "ADD_CARD"
export const REMOVE_DECK = "REMOVE_DECK"


export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function receiveDeck(deck) {
    return {
        type: RECEIVE_DECK,
        deck
    }
}

function addCard(did,card) {
    return {
        did,
        card,
        type: ADD_CARD
    }
}

export function handleAddCard(q, a) {
    return (dispatch, getState) => {
        const { did } = getState()
        const card = {question :q , answer:a}

        return addCardDeck(did, card )
            .then((did,card) => dispatch(addCard(did,card)))


    }

}

function addDeck(deck) {
    return {
        deck,
        type: ADD_DECK
    }
}



export function handleAddDeck(title) {
    return (dispatch) => {
        return saveDeckTitle(title)
            .then((deck) => dispatch(addDeck(deck)))
    }
}

function remove(did) {
    return {
        did,
        type: REMOVE_DECK
    }
}

export function handleRemoveDeck(did) {
    return (dispatch) => {
        return removeDeck(did)
            .then((did) => dispatch(remove(did)))
    }
}