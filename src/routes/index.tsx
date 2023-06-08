/**
 * !🤯这个文案必须是tsx，不能是ts,否则会报错
 */
import { createBrowserRouter } from 'react-router-dom'
import { Layout, CourseLayout } from '@/layouts'
import WebSocktDemo from '@/pages/websocket/simple'
import { QuestionnaireStar } from '@/pages/questionnaire-start'
import { QMainLayout, QManageLayout } from '@/layouts/question'
import NotFound from '@/pages/not-found'

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
  // 问卷星
  {
    path: 'question',
    element: <QMainLayout />,
    children: [{ path: 'manage', element: <QManageLayout /> }],
  },
  { path: '*', element: <NotFound /> },
])

export default router

// ------------ 分割线 ------------

// 常用的路由，常量
export const HOME_PATHNAME = '/'
export const LOGIN_PATHNAME = '/login'
export const REGISTER_PATHNAME = '/register'
export const MANAGE_INDEX_PATHNAME = '/manage/list'

export function isLoginOrRegister(pathname: string) {
  if ([LOGIN_PATHNAME, REGISTER_PATHNAME].includes(pathname)) return true
  return false
}

export function isNoNeedUserInfo(pathname: string) {
  if ([HOME_PATHNAME, LOGIN_PATHNAME, REGISTER_PATHNAME].includes(pathname)) return true
  return false
}
