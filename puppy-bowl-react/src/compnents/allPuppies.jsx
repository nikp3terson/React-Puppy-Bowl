import { useState, useEffect } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

function AllPuppies() {
const [puppies, setPuppies] = useState([])
const navigate = useNavigate()

useEffect(() => {

    fetchPuppies()

}, [] ) 


async function fetchPuppies() {
    let API = 'https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-FT/'
    try {
    const { data: response } = await Axios.get(`${API}/players`) // 'data: response' renames data to response 

    // response.data.players
    // console.log('players', response.data.players)

    setPuppies(response.data.players)
} 
catch (err) {
    console.error(err.message)
}
}

async function removePuppy(id) {
    let API = 'https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-FT/'
try {
    await Axios.delete(`${API}/players/${id}`)
    // after deleting, update page with new list of puppies:
    fetchPuppies()

} catch(error) {
    console.error(error.message)
}

}


return <ul className="puppies-container">
    {
        puppies.length ? 
        puppies.map(puppy => {
            return <li key={puppy.id}>
                <h3>{puppy.name}</h3>
                <h3>#{puppy.id}</h3>
                <img src={puppy.imageUrl}/>
                <button onClick={() => navigate(`/details/${puppy.id}`)}> Show Details </button>
                <button className='deletedBtn' onClick={() => removePuppy(puppy.id)}>Delete</button>
            </li>
        })
        :
        <h2>No Puppies Were Found</h2>
    }
</ul>
}

export default AllPuppies