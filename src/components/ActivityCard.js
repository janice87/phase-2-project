import styled from 'styled-components'

const ActivityCard = ({activity}) => {
   const {name, image, address, island} = activity
    const Div = styled.div`
    
    `

    return (
        <Div>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{address}</p>
            <p>{island}</p>
            <button>MORE</button>
        </Div>
    )
}

export default ActivityCard