import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function UpdatePet() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [error,setError] = useState("");
    const[pet,setPet] = useState({});

    useEffect(() =>{
        const controller = new AbortController();
        axios
            .get(`http://localhost:8000/api/pets/${id}`,{signal:controller.signal})
            .then(res =>{
                setPet(res.data)
            })
            .catch(err => console.log(err));
    },[id]);

    const handleChange = (e) =>{
        setPet({
            ...pet,
            [e.target.name]:e.target.value
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/pets/${id}`,{
                ...pet,
            })
            .then(res =>{
                console.log(res.data);
                navigate('/pets');
            })
            .catch(err => setError(err.response.data.errors));
    };



    return(
        <div>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Link to={'/pets'}>Go back home</Link>
                    <h1>EDIT {pet.name}</h1>
                    <div>
                        <label htmlFor="name"/>Pet Name:<br/>
                        <input type="text" name ="name" id="name" value={pet.name} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="type"/>Pet Type:<br/>
                        <input type="text" name ="type" id="type" value={pet.type} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="description"/>Pet Description:<br/>
                        <input type="text" name ="description" id="description" value={pet.description} onChange={handleChange}/>
                    </div>
                    <h3>Skills! (optional!)</h3>
                    <div>
                        <label htmlFor="skillOne"/>Skill 1:<br/>
                        <input type="text" name ="name" id="skillOne" value={pet.skillOne} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="skillTwo"/>Skill 2:<br/>
                        <input type="text" name ="name" id="skillTwo" value={pet.skillTwo} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="skillThree"/>Skill 3:<br/>
                        <input type="text" name ="name" id="skillThree" value={pet.skillThree} onChange={handleChange} />
                    </div>
                    <button type="submit">Add Pet</button>
                    <h3>{error?.name&&error.name.message}</h3>
                    <h3>{error?.type&&error.type.message}</h3>
                    <h3>{error?.description&&error.description.message}</h3>
                </div>
            </form>
        </div>
    </div>
    )






}

export default UpdatePet;