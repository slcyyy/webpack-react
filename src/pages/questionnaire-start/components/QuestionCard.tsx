import { Button } from 'antd'
import styles from './styles.module.css'

interface IProps {
  deleteFn: (id: string) => void
  title: string
  id: string
}
export const QuestionCard: React.FC<IProps> = ({ deleteFn, title, id }) => {
  console.log('自组件渲染了')
  return (
    <div className="h-12 w-[300px] border-solid border-slate-800 mb-2 flex space-between">
      <div>{title}</div>
      <div className={styles.card}>
        <Button>发布</Button>
        <Button onClick={() => deleteFn(id)}>删除</Button>
      </div>
    </div>
  )
}
