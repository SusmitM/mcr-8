import { useParams } from "react-router-dom"
import { useDataContext } from "../Context/DataContext";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { RsvpModal } from "../Components/RsvpModal";
import { useState } from "react";
export const EventDetails = () => {
    const {meetupData}=useDataContext()

   

    const {eventId}=useParams();
    const selectedEvent=meetupData.find(({id})=>id===eventId)
    console.log(selectedEvent)
    const{id,title,eventStartTime,eventEndTime,location,address,eventThumbnail,eventDescription,hostedBy,eventType,isPaid,
        eventTags,speakers,price,additionalInformation,dressCode,ageRestrictions}=selectedEvent;
  return (
   <Box sx={{display:"flex"}}>
    <Box sx={{display:"flex",flexDirection:"column",width:"60%"}} className="leftSection">
        <Typography variant="h4">{title}</Typography>
        <Typography>Hosted By: <b>{hostedBy}</b></Typography>
        <Box>
            <img height="250px" width="150px" src={eventThumbnail} alt={title}/>
        </Box>
        <Typography>
            <b>Details:</b>
            {eventDescription}
        </Typography>
        <Box>
            <b>Additional Information:</b>
            <Typography>
            <b>Dress Code:</b> {dressCode}
           
        </Typography>
        <Typography>
            <b>Age Restrictions</b> {ageRestrictions}
           
        </Typography>
        <Typography variant="h5">
            Event Tags:
            {
                eventTags?.map(tag=>{
                    return(
                        <div style={{display:"inline",margin:"5px",padding:"5px",color:"white",borderRadius:"10px",backgroundColor:"tomato"}}>{tag}</div>
                        
                    )
                })
            }
        </Typography>
        </Box>




    </Box>

    <Box sx={{display:"flex",flexDirection:"column",width:"40%"}} className="rightSection">
        <Paper>
            <Box>
                <AccessTimeIcon/> {new Date(eventStartTime)
                  .toDateString()
                  .split(" ")
                  .slice(1, 4)
                  .join(" ")} to {new Date(eventEndTime)
                    .toDateString()
                    .split(" ")
                    .slice(1, 4)
                    .join(" ")}
            </Box>
            <Box>
                <LocationOnIcon/>{location}{address}
            </Box>
            <Box>
                <CurrencyRupeeIcon/>{price}
            </Box>

        </Paper>
        <Typography variant="h3">Speakers:{speakers?.length}</Typography>
        <Box sx={{display:"flex",flexWrap:"wrap"}}>
            {speakers.map(data=>{
                return(
                    <Paper sx={{minWidth:"75px",margin:"5px",padding:"5px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                        <Avatar alt={data?.name} src={data?.image} />
                        <Typography>{data?.name}</Typography>
                        <Typography>{data?.designation}</Typography>
                    </Paper>
                )
            })}
        </Box>
        <RsvpModal isPaid={isPaid} eventStartTime={eventStartTime}/>



    </Box>
   </Box>
  )
}
