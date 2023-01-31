import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SinglePet(){
    const { id } = useParams();
    const [pet, setPet] = useState(null)
    const navigate = useNavigate();
    useEffect(() => {
        const controller = new AbortController();
        axios
            .get(`http://localhost:8000/api/pets/${id}`)
            .then(res => setPet(res.data))
            .catch(err => console.log(err));
        return() => controller.abort();
    },[])
    const handleDelete = () =>{
        axios
            .delete(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
            .catch(err => console.log(err));
    }


    return(
        <div>
            {pet&& <div>
                <div>
                <h1>Pet Shelter</h1>
                <Link to={'/pets'}>Go back home</Link>
                </div>
                <div>
                <button onClick={handleDelete}>Adopt {pet.name}</button>
                <h3> details about {pet.name}</h3>
                </div>
                <div>
                    <h3>Pet Type: {pet.type}</h3>
                    <h3>Pet Description: {pet.description}</h3>
                    <h3>Pet Skills: {pet.skillOne} {pet.skillTwo} {pet.skillThree}</h3>
                </div>
            </div>}
        </div>
    )
}

export default SinglePet;
