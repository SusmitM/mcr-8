
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { TextField } from '@mui/material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
export const RsvpModal = ({isPaid,eventStartTime}) => {
    const currentDateTime=new Date();
    const providedDateTime = new Date(eventStartTime);
  
      const [open, setOpen] = useState(false);
      const [isRsvp,setIsRsvp]=useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      const [formData,setFormData]=useState({Name:"",Email:""})

      const handleSubmit=()=>{
        if(formData.Name!=="" && formData.Email!=="" ){
            setIsRsvp(true)
        handleClose()

        }
        else{
            alert("Invalid Details")
        }
        

      }
  return (
    <>
    <div>
        {providedDateTime > currentDateTime &&  <Button disabled={isRsvp} variant='contained'  color="secondary" onClick={handleOpen}>{isRsvp ? "Already RSVPed" :"RSVP"}</Button>}
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{display:"flex",flexDirection:"column",gap:"5px"}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Complete your RSVP
          </Typography>
          <Typography sx={{color:"grey"}}>
            Fill in your personal information
          </Typography>
          <label><b>Name:</b></label>
          <TextField
          onChange={(e)=>setFormData(prev=>({...prev,Name:e.target.value}))}
           type='text' required variant="outlined" />

          <label><b>Email:</b></label>

          <TextField
          onChange={(e)=>setFormData(prev=>({...prev,Email:e.target.value}))}
           type='email' required variant="outlined" />

          {isPaid && <Typography>* You have to make the payment at the venue.</Typography>}

          <Button variant='contained' onClick={handleSubmit}>RSVP</Button>
          </Box>
          </Box>
          </Modal>
          </div>
    </>
  )
}
