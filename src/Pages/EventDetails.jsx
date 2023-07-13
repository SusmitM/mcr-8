import { useParams } from "react-router-dom"


export const EventDetails = () => {

    const {eventId}=useParams();
    console.log(eventId)
  return (
    <div>EventDetails</div>
  )
}
