import { Route, Routes } from "react-router-dom"
import { EventDetails } from "../Pages/EventDetails"
import { Home } from "../Pages/Home"



export const AllRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/eventDetails/:eventId" element={<EventDetails/>}/>
  </Routes>
  )
}
