import { Card,CardMedia,CardContent,Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const styles = {
    overlay: {
       position: 'absolute',
       top: '20px',
       left: '20px',
       color: 'black',
       backgroundColor: 'white'
    }
 }
export const MeetupCard = ({EventData}) => {
    const {id,title,eventStartTime,eventThumbnail,eventType}=EventData;
    const navigate=useNavigate()




  return (
    <>
     <Card sx={{ maxWidth: 245,position: 'relative' }} onClick={()=>navigate(`/eventDetails/${id}`)}>
       
        <CardMedia
        sx={{ height: 140 }}
        image={eventThumbnail}
      
      />
      <div style={styles.overlay}>
      {eventType}
   </div>

        
      
      <CardContent>
        <Typography  variant="overline">{new Date(eventStartTime)
                  .toDateString()
                  .split(" ")
                  .slice(1, 4)
                  .join(" ")}</Typography>
        <Typography className="eventTitle" gutterBottom variant="h5" component="div">
         {title}
        </Typography>
       </CardContent>
        </Card>
    
    </>
  )
}
