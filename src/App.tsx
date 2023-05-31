import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUsersData } from './store/modules/user'
import { fetchUsers, addUser } from '@/store/modules/user'

import { useAppDispatch } from './store'
import { nanoid } from '@reduxjs/toolkit'
import router from './routes'
import 'antd/dist/reset.css'
import { RouterProvider } from 'react-router-dom'

function App() {
  const usersData = useSelector(selectUsersData)
  const { users, status } = usersData
  const dispatch = useAppDispatch()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [sex, setSex] = useState('')

  useEffect(() => {
    // dispatch(fetchUsers());
  }, [])

  const addUserEvent = async (e: any) => {
    // 防止页面刷新？
    e.preventDefault()

    const param = {
      id: nanoid(),
      name: username,
      email: email,
      sex: sex,
    }
    await dispatch(addUser(param))
    setUsername('')
    setEmail('')
    setSex('')
  }

  return <RouterProvider router={router} />
}

export default App
