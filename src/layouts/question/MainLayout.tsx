import { Layout, Spin } from 'antd'
import styles from './MainLayout.module.scss'
import { Outlet } from 'react-router-dom'

const { Header, Content, Footer } = Layout
export const QMainLayout = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>log</div>
        <div className={styles.right}>userInfo</div>
      </Header>
      <Layout className={styles.main}>
        <Content>
          <Outlet />
          {/* {waitingUserData ? (
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <Spin />
            </div>
          ) : (
            <Outlet />
          )} */}
        </Content>
      </Layout>
      <Footer className={styles.footer}>问卷 &copy;2023 - present. Created by Ceci</Footer>
    </Layout>
  )
}
