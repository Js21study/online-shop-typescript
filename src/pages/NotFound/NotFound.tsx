import React from 'react'
import { Link } from 'react-router-dom'

const NotFound:React.FC = () => {
  return (
    <div className='box text-center'> Сторінка не знайдена! Перейти на <Link className='underline underline-offset-1' to='/' >головну</Link> </div>
  )
}

export default NotFound