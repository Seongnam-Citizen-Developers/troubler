import { UUID } from "../../types/UUID"
import { Comment } from "./Comment"

type Post = {
  _id: UUID,
  createdAt: Date // z string
  updatedAt?: Date // z string

  title: string,
  body: string,

  comments: Comment[]

  isSigned: boolean
}

type PostByUnsigned = Post & {
  isSigned: false,
  user: string,
}

type PostBySigned = Post & {
  isSigned: true,
  user: UUID,
}

function isPostByUnsigned(post: Post): post is PostByUnsigned {
  return post.isSigned === false
}

export { PostByUnsigned, isPostByUnsigned }