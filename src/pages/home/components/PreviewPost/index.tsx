import { PostsType } from "../..";
import { formatDate } from '../../../../utils/formatterDate';
import { PostContainer } from "./styles";

export function PreviewPost({ title, created_at, body, number }: PostsType) {

  return (
    <PostContainer to={`/post/${number}`}>
      <header>
        <strong>{title}</strong>
        <span>{formatDate(created_at)}</span>
      </header>
      <p>{body}</p>
    </PostContainer>
  )
}