const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
    dialogs: [
        { id: 'id1', name: 'Alexander' },
        { id: 'id2', name: 'Anna' },
        { id: 'id3', name: 'Ivan' },
        { id: 'id4', name: 'Oleg' },
        { id: 'id5', name: 'Dmitriy' },
        { id: 'id6', name: 'Ekaterina' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Yo' }
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: action.message }],
            }
        default:
            return state
    }
}

// Action Creators
export const sendMessage = (message) => ({ type: SEND_MESSAGE, message })


export default dialogsReducer