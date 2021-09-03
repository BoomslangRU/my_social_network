export type postsType = {
   id: number
   message: string
   likeCounter: number
}
export type profileType = {
   userId: number
   lookingForAJob: boolean
   lookingForAJobDescription: string
   fullName: string
   contacts: contactsType
   photos: photosType
}
export type contactsType = {
   github: string
   vk: string
   facebook: string
   instagram: string
   twitter: string
   website: string
   youtube: string
   mainLink: string
}
export type photosType = {
   small: null | string
   large: null | string
}
export type usersType = {
   id: number
   name: string
   status: string
   photos: photosType
}