import React from 'react'
import LeftSideBar from './LeftSideBar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3'>
            <LeftSideBar/>
            </div>
            <div className='col-md-9'>
                <Outlet/>
            </div>
        </div>
    </div>


    </>
    
  )
}

export default MainLayout