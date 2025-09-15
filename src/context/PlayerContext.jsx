import { createContext, useRef } from "react";

  export const PlayerContext = createContext()
  PlayerContextProvider = (props)=>{
    const audioRef  =useRef()
    const contextValue={
     audioRef,
    }
    return(
        <PlayerContext.Provider value = {contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
 }
 export default PlayerContextProvider;
 