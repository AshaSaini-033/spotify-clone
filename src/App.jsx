import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
const App = () => {
  const {audioRef} = useContext(PlayerContext)
  return (
    <div className='h-screen bg-black'>
      {/* <p className='text-green-600'>Hii my name is Ashish Kumar</p> */}
      <div className='h-[90%] flex '>
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio ref = {audioRef} preload='auto'></audio>
    </div>
  )
}

export default App
