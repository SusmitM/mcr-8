import { useParams } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { RsvpModal } from "../Components/RsvpModal";
import { useState } from "react";
export const EventDetails = () => {
  const { meetupData } = useDataContext();

  const { eventId } = useParams();
  const selectedEvent = meetupData.find(({ id }) => id === eventId);

  const {
    id,
    title,
    eventStartTime,
    eventEndTime,
    location,
    address,
    eventThumbnail,
    eventDescription,
    hostedBy,
    eventType,
    isPaid,
    eventTags,
    speakers,
    price,
    additionalInformation,
  } = selectedEvent;
  console.log();

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          gap: "10px",
          minHeight: "100vh",
          justifyContent: "space-between",
        }}
        className="leftSection"
      >
        <Typography variant="h4">{title}</Typography>
        <Typography>
          Hosted By:
          <br />
          <b>{hostedBy}</b>
        </Typography>
        <Box>
          <img height="250px" width="450px" src={eventThumbnail} alt={title} />
        </Box>
        <Typography>
          <b>Details:</b>
          <br />
          <Box sx={{ maxWidth: "450px" }}>{eventDescription}</Box>
        </Typography>
        <Box>
          <Typography variant="h6">Additional Information:</Typography>
          <Typography>
            <b>Dress Code:</b> {additionalInformation.dressCode}
          </Typography>
          <Typography>
            <b>Age Restrictions</b> {additionalInformation.ageRestrictions}
          </Typography>
          <Typography variant="h5">
            Event Tags:
            {eventTags?.map((tag) => {
              return (
                <div
                  style={{
                    display: "inline",
                    margin: "5px",
                    padding: "5px",
                    color: "white",
                    borderRadius: "10px",
                    backgroundColor: "tomato",
                  }}
                >
                  {tag}
                </div>
              );
            })}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{ display: "flex", flexDirection: "column", width: "40%" }}
        className="rightSection"
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            minHeight: "150px",
            padding: "10px",
            maxWidth: "350px",
            mb: 5,
          }}
          elevation={5}
        >
          <Typography variant="button" display="block" gutterBottom>
            <AccessTimeIcon />
            {new Date(eventStartTime)
              .toDateString()
              .split(" ")
              .slice(1, 4)
              .join(" ")}{" "}
            to{" "}
            {new Date(eventEndTime)
              .toDateString()
              .split(" ")
              .slice(1, 4)
              .join(" ")}
          </Typography>{" "}
          <Typography variant="button" display="block" gutterBottom>
            <LocationOnIcon /> {location}
            {address}
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            <CurrencyRupeeIcon /> {price}
          </Typography>
        </Paper>
        <Typography variant="h3">Speakers:{speakers?.length}</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}>
          {speakers.map((data) => {
            return (
              <Paper
                sx={{
                  minWidth: "75px",
                  margin: "5px",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Avatar alt={data?.name} src={data?.image} />
                <Typography>{data?.name}</Typography>
                <Typography>{data?.designation}</Typography>
              </Paper>
            );
          })}
        </Box>
        <RsvpModal isPaid={isPaid} eventStartTime={eventStartTime} />
      </Box>
    </Box>
  );
};
