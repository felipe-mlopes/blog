import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Header } from "../../components/Header";
import { Spinner } from "../../components/Spinner";
import { api } from "../../lib/axios";
import { PreviewPost } from "./components/PreviewPost";
import { Profile } from "./components/Profile";

import { Container, Feed, SearchWrapper } from "./styles";

export interface PostsType {
  number: number,
  html_url: string,
  title: string,
  created_at: string,
  body: string
}

export const username = 'felipe-mlopes'
export const repo = 'github-blog'

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Home() { 
  const [posts, setPosts] = useState<PostsType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  const fetchPosts = useCallback(
    async (query: string = "") => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repo}`
        )

        setPosts(response.data.items)
      } finally {
        setIsLoading(false)
      }
  }, [posts])

  useEffect(() => {
    fetchPosts()
  }, [])

  async function handleChangeSearch(data: SearchFormInputs) {
    await fetchPosts(data.query)
  }
  
  return (
    <>
      <Header />
      <Container>
        { isLoading ? <Spinner /> : 
          <>
            <Profile />
            <SearchWrapper onSubmit={handleSubmit(handleChangeSearch)}>
              <div>
                <p>Publicações</p>
                <span>{posts.length} publicações</span>
              </div>
              <input
                type="text" 
                placeholder="Buscar conteúdo"
                {...register('query')}
              />
            </SearchWrapper>
            <Feed>
              {posts.map(item => {
                return (
                  <PreviewPost
                    key={item.number}
                    title={item.title}
                    created_at={item.created_at}
                    body={item.body}
                    html_url={item.html_url} 
                    number={item.number}                      
                  />
                )
              })}
            </Feed>
          </>
        }
      </Container>
    </>
  )
}