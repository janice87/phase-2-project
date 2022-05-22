import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Form = ({ onHandleAddActivity}) => {
const [formData, setFormData] = useState({
    name: "", 
    image: "",
    address: "", 
    island: "",
    description: ""
})

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:4000/all', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data =>  onHandleAddActivity(data))
    history.push("/activities")
  }

  const handleChange = (e) => {
    setFormData({
        ...formData,
      [e.target.name]: e.target.value
    })      
  }

    return (
        <div className="form-image">
        <CssBaseline />
          <Container maxWidth="xs">           
           <form onSubmit={handleSubmit} className="form">
            <h3>Don't see an activity? Add it below!</h3>
               <label htmlFor="name" className="form-label">Name:</label>
               <input type="text" name="name" value={formData.name} onChange={handleChange}></input>
             
               <label htmlFor="image" className="form-label">Image URL:</label>
               <input type="text" name="image" value={formData.image} onChange={handleChange}></input>
                             
               <label htmlFor="address" className="form-label">Address:</label>
               <input type="text" name="address" value={formData.address} onChange={handleChange}></input>
             
               <label htmlFor="island" className="form-label">Island:</label>
               <input type="text" name="island" value={formData.island} onChange={handleChange}></input>
              
               <label htmlFor="description" className="form-label">Description:</label>
               <textarea rows="4" cols="40" name="description" value={formData.description} onChange={handleChange}></textarea>
               <br />
               <br />
               <Box
                m={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                >
               <Button type="submit" variant="contained" fullWidth>Submit</Button>
               </Box>
           </form>           
           </Container>
        </div>
    )
}

export default Form

