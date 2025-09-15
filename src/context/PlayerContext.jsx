import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

  export const PlayerContext = createContext()
  const PlayerContextProvider = (props)=>{
    const audioRef  =useRef()
    const seekBg = useRef()
    const seekBar = useRef()
    const [track,setTrack] = useState(songsData[1])//default track will be 1st song
    const [playStatus,setPlayStatus]=useState(false);//pause
    const[time,setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
             second:0,
            minute:0
        }
    })
    const play=()=>{
        audioRef.current.play();
        setPlayStatus(true)
    }
    const pause=()=>{
        audioRef.current.pause()
        setPlayStatus(false)
    }
    useEffect(()=>
    {
        audioRef.current.ontimeupdate=()=>{
            //for greenn bar
            seekBar.current.style.width = (Math.floor(audioRef.current.currentTime /audioRef.current.duration * 100))+"%"
            setTime({
                currentTime:{
                    second:Math.floor(audioRef.current.currentTime % 60 ),
                    minute:Math.floor(audioRef.current.currentTime /60)
                },
                totalTime:{
                    second:Math.floor(audioRef.current.duration % 60 ),
                    minute:Math.floor(audioRef.current.duration /60)
                }
            })
        }
    })
    const contextValue={
     audioRef,seekBar,seekBg,track,setTrack,playStatus,setPlayStatus,time,setTime,play,pause
    }
    return(
        <PlayerContext.Provider value = {contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
 }
 export default PlayerContextProvider;
 