import { createContext, useContext, useState } from "react"
import { MeetupData } from "../Data/MeetupData";

 const DataContext=createContext();

export const DataContextProvider=({children})=>{
    const [meetupData,setMeetupData]=useState([...MeetupData.meetups])
    return(
        <DataContext.Provider value={{meetupData}}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext=()=>useContext(DataContext);