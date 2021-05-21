const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case (SEND_MESSAGE):
            let body = state.newMessageBody
            state.messages.push({ id: 6, message: body })
            state.newMessageBody = ''
            return state
        case (UPDATE_NEW_MESSAGE_BODY):
            state.newMessageBody = action.body
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: 'SEND_MESSAGE' })
export const updateNewMessageBodyCreation = (text) => ({
    type: 'UPDATE_NEW_MESSAGE_BODY', body: text
})

export default dialogsReducer