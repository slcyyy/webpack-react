import { Button } from 'antd'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { AnimatedCircleBackground } from './background'

const MENU = [
  {
    label: 'websocket-webAPI',
    path: '/websocket/simple',
  },
  {
    label: '心跳检测',
    path: '/websocket/hearbeat',
  },
]
type MENU_ITEM = {
  label: string
  path: string
  children?: null | Array<MENU_ITEM>
}

const MenuContainer = styled.div`
  backdrop-filter: blur(14px) saturate(187%);
  -webkit-backdrop-filter: blur(14px) saturate(187%);
  background-color: rgba(255, 255, 255, 0.36);
`
export const Layout = () => {
  const handleClick = () => {
    // console.log(a); // 会有一个报错
  }
  return (
    // todo:mark tailwind background属性不能一起使用图片 background-size norepear,最好这样分开
    <div
      className="w-full h-full bg-cover bg-no-repeat overflow-auto"
      style={{ backgroundImage: 'url(/bg.png)' }}
    >
      <AnimatedCircleBackground />
      <header className="fixed top-0 glass h-[80px] w-full">
        <Link to="/question">问卷星</Link>
      </header>
      <main className="pb-[80px]">
        <Outlet></Outlet>
      </main>
    </div>
  )
}
