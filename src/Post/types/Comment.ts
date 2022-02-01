import { UUID } from "../../types/UUID"

type Comment = {
  id: UUID,
  createdAt: Date, // z string

  body: string

  isSigned: boolean
}

type CommentByUnsigned = Comment & {
  signed: false,
  user: string
}

type CommentBySigned = Comment & {
  signed: true,
  user: UUID
}

function isCommentByUnsigned(comment: Comment): comment is CommentByUnsigned {
  return comment.isSigned === false
}

export { Comment, CommentByUnsigned, isCommentByUnsigned }