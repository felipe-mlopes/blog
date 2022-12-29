import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';

export function formatDate(date: any) {
  const transformDate = new Date(date)
  const postCreatedAt = formatDistanceToNow(transformDate, {
    locale: ptBR,
    addSuffix: true
  })

  return postCreatedAt[0].toUpperCase() + postCreatedAt.substring(1)
}