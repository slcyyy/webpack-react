/**
 * !🤯这个文案必须是tsx，不能是ts,否则会报错
 */
import { createBrowserRouter } from 'react-router-dom'
import { Layout, CourseLayout } from '@/layouts'
import WebSocktDemo from '@/pages/websocket/simple'
import { QuestionnaireStar } from '@/pages/questionnaire-start'

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
  {
    path: '/course',
    element: <CourseLayout />,
    children: [{ path: '/course/questionnaire-star', element: <QuestionnaireStar /> }],
  },
])

export default router
