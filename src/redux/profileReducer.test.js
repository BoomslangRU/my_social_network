import profileReducer, { deletePost, onAddPost } from './profileReducer'

//1. test data
let action = onAddPost('boomslang.ru')
let state = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likeCounter: 12 },
		{ id: 2, message: 'It\'s my first post', likeCounter: 15 }
	]
}
//2. action
let newState = profileReducer(state, action)



it('length of posts should be incremented', () => {
	//3. expectation
	expect(newState.posts.length).toBe(3)
})


it('message of new post should be correct', () => {
	//3. expectation
	expect(newState.posts[2].message).toBe('boomslang.ru')
})


it('after deleting length of messages should be decrement', () => {
	//1. test data
	let action = deletePost(1)
	//2. action
	let newState = profileReducer(state, action)
	//3. expectation
	expect(newState.posts.length).toBe(1)
})
