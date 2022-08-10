// import React, { lazy, Suspense } from 'react'
// import './App.scss'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Layout from 'components/Layout'

// const Home = lazy(() => import('./pages/Home'))
// const Posts = lazy(() => import('pages/Posts'))
// const Post = lazy(() => import('pages/Post'))

// const App: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={
//             <Suspense fallback={<p>Loading...</p>}>
//               <Home />
//             </Suspense>
//           } />
//           <Route path="posts" element={
//             <Suspense fallback={<p>Loading...</p>}>
//               <Posts />
//             </Suspense>
//           } />
//           <Route path="post/:postId" element={
//             <Suspense fallback={<p>Loading...</p>}>
//               <Post />
//             </Suspense>
//           } />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }
// export default App

import React from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from 'routes'

const App: React.FC = () => {
  const router = useRoutes(routes)
  return <>{router}</>
}

export default App
