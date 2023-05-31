/**
 * !🤯这个文案必须是tsx，不能是ts,否则会报错
 */
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/layouts'
import WebSocktDemo from '@/pages/websocket/simple'
import '@/styles/common'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/websocket/simple',
        element: <WebSocktDemo></WebSocktDemo>,
      },
    ],
  },
])

export default router
