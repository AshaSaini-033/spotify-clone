import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
const App = () => {
  return (
    <div className='h-screen bg-black'>
      {/* <p className='text-green-600'>Hii my name is Ashish Kumar</p> */}
      <div className='h-[90%] flex '>
        <Sidebar/>
      </div>
      <Player/>
    </div>
  )
}

export default App
