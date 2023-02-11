

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import '../App.css'
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [num, setNum] = useState("")
  const [userName, setUserName] = useState("");



  const Click = (e: any) => {
    e.preventDefault();

    if (name === "") {
      alert("Name Is Required");
    } else if (email === "" || email === "@") {
      alert("Email Is Required");
    } else if (num === "") {
      alert("Number is Required");
    } else {

      localStorage.setItem('name', name)
      localStorage.setItem("email", email)
      localStorage.setItem("Number", num)
      console.log(name, email, num)

      alert("Welcome")
      navigate('/data')
    }
  }


  return (
    <div>
      <div className="logo">
        <Typography component="h1" variant="h5" >
          Welcome
        </Typography>
        <Box component="form"
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            label="Name"
            value={name}
            autoFocus
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Number"
            autoFocus
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
         
          <Button variant="contained" onClick={Click}>Register</Button>

        </Box>

      </div>


    </div>
  )

}

export default Register