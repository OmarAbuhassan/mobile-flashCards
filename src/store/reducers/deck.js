import { ADD_CARD, ADD_DECK, RECEIVE_DECK, RECEIVE_DECKS, REMOVE_DECK } from '../actions/deck'


export default function deck(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case RECEIVE_DECK:
            return {
                ...state,
                ...action.deck
            }
        case ADD_DECK:
            const {deck} = action
            return {
                ...state,
                [deck.id]: deck
            }
        case ADD_CARD:
            return {
                ...state,
                [action.did]: {
                    ...state[action.did],
                    questions: state[action.did].questions.concat([action.card])
                }
            }
        case REMOVE_DECK:
            delete state[action.did]
            return {
                ...state
            }
        default:
            return state;


    }



}









