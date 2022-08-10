import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Post: React.FC = () => {
  const { postId } = useParams()

  const [searchParams] = useSearchParams()
  console.log(searchParams.get('title'))

  return (
    <div>
      <h2>投稿詳細</h2>
      <p>ID:{postId}</p>
    </div>
  )
}

export default Post
