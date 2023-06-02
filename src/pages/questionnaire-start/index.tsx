import { useState } from 'react'
import { Button } from 'antd'
import { useImmer } from 'use-immer'

export const QuestionnaireStar = () => {
  const [questionList, setQuestionList] = useImmer([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: true },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
  ])

  // handle delete
  const handleDelete = (id: string) => {
    setQuestionList(draft => {
      const idx = draft.findIndex(item => item.id === id)
      draft.splice(idx, 1)
    })
  }
  return (
    <div>
      {questionList.map(item => (
        <div key={item.id} className="h-12 w-[300px] border-solid border-slate-800 mb-2">
          {item.title}
          <Button>编辑</Button>
          <Button onClick={() => handleDelete(item.id)}>删除</Button>
        </div>
      ))}
    </div>
  )
}
