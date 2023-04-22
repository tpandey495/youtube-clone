import React from 'react'
import Sidebar from '../component/Sidebar';
import MainContainer from '../component/MainContainer';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
  <div className="flex">
        <Sidebar />
        <Outlet />
  </div>
  )
}

