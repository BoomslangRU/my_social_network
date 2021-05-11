let renderEntireTree = () => {
    console.log('State changed')
}

let state = {
    profilePage: {
        posts: [
            { message: 'Hi, how are you?', likeCounter: 12 },
            { message: 'It\'s my first post', likeCounter: 15 }
        ],
        newPostText: ''
    },

    dialogsPage: {
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
        ]
    }

}

window.state = state   //temporarily

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCounter: 0
    }
    state.profilePage.posts.push(newPost)
    renderEntireTree()
    state.profilePage.newPostText = ''
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    renderEntireTree()
}

export const subscribe = (observer) => {
    renderEntireTree = observer   // pattern observer 
}

export default state