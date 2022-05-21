import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Form = ({ onHandleAddActivity}) => {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [type, setType] = useState("")
  const [address, setAddress] = useState("")
  const [island, setIsland] = useState("")
  const [description, setDescription] = useState("")

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:4000/all', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name, 
            image,
            type,
            address,
            island,
            description
        })
    })
    .then(res => res.json())
    .then(data =>  onHandleAddActivity(data))
    history.push("/activities")
  }

    return (
        <div className="form-image">
        <CssBaseline />
          <Container maxWidth="xs">           
          <h3>Don't see an activity listed? Add it below</h3>
           <form onSubmit={handleSubmit} className="form">
               <label htmlFor="name" className="form-label">Name</label>
               <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
             
               <label htmlFor="image" className="form-label">Image URL:</label>
               <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)}></input>
              
               <label htmlFor="type" className="form-label">Type</label>
               <input type="text" name="type" value={type} onChange={(e) => setType(e.target.value)}></input>
               
               <label htmlFor="address" className="form-label">Address</label>
               <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
             
               <label htmlFor="island" className="form-label">Island</label>
               <input type="text" name="island" value={island} onChange={(e) => setIsland(e.target.value)}></input>
              
               <label htmlFor="description" className="form-label">Description</label>
               <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
               <br />
               <br />
               <Box
                m={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                >
               <Button type="submit" variant="outlined" fullWidth>Submit</Button>
               </Box>
           </form>           
           </Container>
        </div>
    )
}

export default Form