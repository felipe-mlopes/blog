import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Header } from "../../components/Header";
import { TagLink } from "../home/components/Profile/styles";
import { PostsType, repo, username } from "../home"
import { Spinner } from "../../components/Spinner";

import { faArrowUpRightFromSquare, faChevronLeft, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Container } from "../home/styles";
import { Content, ContentText, PostInfo, PostTags } from "./styles";
import { formatDate } from "../../utils/formatterDate";

interface PostProps extends PostsType {
  comments: number,
  user: {
    login: string
  }
}

export function Post() {
  const [postData, setPostData] = useState<PostProps>()
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPost = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(`/repos/${username}/${repo}/issues/${id}`)

      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [postData])

  useEffect(() => {
    getPost()
  }, [])

  return (
    <>
      <Header />
      { isLoading ? <Spinner /> : 
          <Container>
            <PostInfo>
              <header>
                <TagLink>
                  <a href="/">
                    <FontAwesomeIcon icon={faChevronLeft} className="back" />
                    voltar
                  </a>
                </TagLink>
                <TagLink>
                  <a href={postData?.html_url} target='_blank' >
                    ver no github
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                </TagLink>
              </header>
              <h2>{postData?.title}</h2>
              <PostTags>
                <div>
                  <FontAwesomeIcon icon={faGithub} />
                  <p>{postData?.user.login}</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faCalendarDay} />
                  <p>{formatDate(postData?.created_at)}</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faComment} />
                  <p>{postData?.comments} comentários</p>
                </div>
              </PostTags>
            </PostInfo>
            <Content>
              <ContentText>
                <ReactMarkdown 
                  children={postData?.body === undefined ? "" : postData?.body}  
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      return !inline ? (
                        <SyntaxHighlighter
                          children={String(children).replace(/\n$/, "")}
                          style={dracula as any}
                          language="javascript"
                          PreTag="div"
                          {...props}
                        />
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    }
                  }}
                />
              </ContentText>
            </Content>
          </Container>
      }
    </>

  )
}