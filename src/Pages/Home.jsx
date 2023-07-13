import {Box,AppBar,InputBase, Toolbar,Typography, Divider, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useDataContext } from '../Context/DataContext';
import { MeetupCard } from '../Components/MeetupCard';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
export const Home = () => {
    const {meetupData}=useDataContext();
    const [eventType, setEventType] = useState('Both');
    const [searchData,setSearchData]=useState("");
    console.log(searchData)

    const handleChange = (event) => {
        setEventType(event.target.value);
    };
    const filteredData=()=>{
        if(eventType==="Online"){
            return meetupData.filter(({eventType})=>eventType==="Online")
        }
        if(eventType==="Offline"){
            return meetupData.filter(({eventType})=>eventType==="Offline")
        }
        return meetupData
    }
    const searchFilterData=()=>{
        return(filteredData().filter(({title,eventTags})=>title.toLowerCase().includes(searchData.toLowerCase()) || eventTags.find(tag=>tag.toLowerCase().includes(searchData.toLowerCase()))? true : false))
    }
   
  return (
   <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
     <Toolbar>
     <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           Meetup
          </Typography>
     <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>setSearchData(e.target.value)}
            />
          </Search>
     </Toolbar>
      </AppBar>
      </Box>
      <Divider/>
      <Box sx={{display:"flex",justifyContent:"space-between"}}>
        <Typography variant='h4'>Meetup Events</Typography>
        <Box sx={{ minWidth: 220 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Event Type</InputLabel>
        <Select
          value={eventType}
          label="Select Event Type"
          onChange={handleChange}
        >
          <MenuItem value="Both">Both</MenuItem>
          <MenuItem value="Offline">Offline</MenuItem>
          <MenuItem value="Online">Online</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </Box>
      <Box className="eventContainer" sx={{display:"flex",flexWrap:"wrap"}}>
        {
            searchFilterData().map(EventData=>{
               
                return(
                   <>
                   <MeetupCard EventData={EventData}/>
                   </>
                )
            })
        }

    </Box>
   </>
  )
}
