import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
        <aside>
            sidebar
        </aside>
        <Outlet />
        <footer>
            footer
        </footer>
    </div>
  )
}

export default AdminLayout