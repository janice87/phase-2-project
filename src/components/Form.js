import React, {useState} from 'react'

const Form = () => {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [type, setType] = useState("")
  const [address, setAddress] = useState("")
  const [island, setIsland] = useState("")
  const [description, setDescription] = useState("")

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
    .then(data => console.log(data))
  }

    return (
        <div>
            <h3>New Activity</h3>
           <form onSubmit={handleSubmit}>
               <label htmlFor="name">Name</label>
               <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
               <br />
               <br />
               <label htmlFor="image">Image URL:</label>
               <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)}></input>
               <br />
               <br />
               <label htmlFor="type">Type</label>
               <input type="text" name="type" value={type} onChange={(e) => setType(e.target.value)}></input>
               <br />
               <br />
               <label htmlFor="address">Address</label>
               <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
               <br />
               <br />
               <label htmlFor="island">Island</label>
               <input type="text" name="island" value={island} onChange={(e) => setIsland(e.target.value)}></input>
               <br />
               <br />
               <label htmlFor="description">Description</label>
               <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
               <br />
               <br />
               <button type="submit">Submit New Activity</button>
           </form>

        </div>
    )
}

export default Form