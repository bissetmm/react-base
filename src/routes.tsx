import type { RouteObject } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Post from './pages/Post'
import NotFound from './pages/NotFound'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/posts', element: <Posts /> },
      { path: '/post/:postId', element: <Post /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
