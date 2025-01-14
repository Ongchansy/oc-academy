import React from 'react'
import { Outlet } from 'react-router-dom'

const InstructureLayout = () => {
  return (
    <div>
        <header>
            Instructure Header
        </header>
        <Outlet />
    </div>
  )
}

export default InstructureLayout