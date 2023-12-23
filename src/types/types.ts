export interface PostDTO {
  userId: number
  id: number
  title: string
  body: string
}

export interface UserDTO {
  id: number
  username: string
}

export interface CommentDTO {
  postId: number,
  id: number,
  name: string
  email: string
  body: string
}

export interface LoginErrors {
  email?: string
  password?: string
}

export interface LoginValues {
  email: string
  password: string
}
