import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../client/module/auth/core/actions'
const Header = () => {
  const {data} = useAuth()
  

  return (
    <div>
        <header className='p-4 bg-gray-800 text-white'>
          <div className='container mx-auto  flex justify-between items-center'>
            <h2>
                <Link to='/'>My Learning Camp</Link>
            </h2>

            <ul className='flex space-x-12'>
              <li>
                <Link to='/explore'>Explore</Link>
              </li>
              {
                data ? (
                  <p>{data.name}</p>
                ):(
                  <li>
                    <Link to='/auth/login'>Login</Link>
                  </li> 
                )
              }
            </ul>
          </div>
        </header>
    </div>
  )
}

export default Header