export interface Comment {
  id?: string,
  userId: string,
  postId: string,
  text: string,
  createdAt?: Date,
  updatedAt?: Date
}
