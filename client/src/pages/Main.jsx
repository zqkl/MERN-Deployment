import axios from 'axios';
import { useEffect, useState } from 'react';
import AllPets from  '../components/AllPets'
import { Link } from 'react-router-dom';

function Main(){
    const [pets, setPets] = useState([]);
    const [loaded,setLoaded] = useState(false);

    const loadedState = () =>{
        setLoaded(!loaded)
    }

    useEffect(() =>{
        const controller = new AbortController();
        axios
            .get('http://localhost:8000/api/pets',{signal:controller.signal})
            .then((res) =>{
                setPets(res.data)
                setLoaded(true)
            })
            .catch((err) => console.log(err));
        return () => controller.abort();
    },[loaded]);

    return(
        <div>
            <h1>Pet Shelter</h1>
            <p>These pets are looking for a good home</p>
            <Link to='/pets/newpet'>add a pet to the shelter</Link>
            <AllPets pets= {pets} loaded={loadedState}/>
        </div>
    )
}

export default Main;