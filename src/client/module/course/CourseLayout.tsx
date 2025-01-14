import React from 'react'
import { Outlet } from 'react-router-dom'

const CourseLayout = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default CourseLayout