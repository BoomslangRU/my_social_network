const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

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
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SEND_MESSAGE): {
            let stateCopy = { ...state }
            stateCopy.messages = [...state.messages]
            let body = stateCopy.newMessageBody
            stateCopy.messages.push({ id: 6, message: body })
            stateCopy.newMessageBody = ''
            return stateCopy
        }
        case (UPDATE_NEW_MESSAGE_BODY): {
            let stateCopy = { ...state }
            stateCopy.newMessageBody = { ...state.newMessageBody }
            stateCopy.newMessageBody = action.body
            return stateCopy
        }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreation = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: text
})

export default dialogsReducer