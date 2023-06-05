import { useState, useCallback, memo } from 'react'
import { Button } from 'antd'
import { useImmer } from 'use-immer'
import { QuestionCard } from './components'

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
      // const idx = draft.findIndex(item => item.id === id)
      // draft.splice(idx, 1)
      const item = draft.find(item => item.id === id)
      item!.id = item!.id + 'test'
    })
  }
  return (
    <div>
      {questionList.map(item => (
        <QuestionCard key={item.id} deleteFn={handleDelete} title={item.title} id={item.id} />
      ))}
    </div>
  )
}
