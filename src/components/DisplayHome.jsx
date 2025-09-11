import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
const DisplayHome = () => {
  return (
   <>
   <Navbar/>
   <div className='mb-4'>
    <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
    {/* passed image name desc as props */}
      <div className='flex overflow-auto'>
       {albumsData.map((item,index)=>(<AlbumItem key ={index} name={item.name} desc = {item.desc} image = {item.image} id={item.id}/>))}
      </div>
   </div>
    <div className='mb-4'>
    <h1 className='my-5 font-bold text-2xl'>Today's Top Hits</h1>
    {/* passed image name desc as props */}
      <div className='flex overflow-auto'>
       {songsData.map((item,index)=>(<AlbumItem key ={index} name={item.name} desc = {item.desc} image = {item.image} id={item.id}/>))}
      </div>
   </div>

   </>
  )
}

export default DisplayHome
