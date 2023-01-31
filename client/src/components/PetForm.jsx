import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function PetForm(props){
    const navigate = useNavigate();
    const [error,setError] = useState("");
    const[name,setName] = useState("");
    const[type,setType] = useState("");
    const[description,setDescription] = useState("");
    const[skillOne,setSkillOne] = useState("");
    const[skillTwo,setSkillTwo] = useState("");
    const[skillThree,setSkillThree] = useState("");



    const handleSubmit = (e) =>{
        e.preventDefault();
        const newPet = {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        }
        axios
            .post('http://localhost:8000/api/pets',newPet)
            .then(() => navigate('/'))
            .catch(err => {
                setError(err.response.data.errors);
                console.log(err)
            })
    }


    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Link to={'/pets'}>Go back home</Link>
                        <div>
                            <label htmlFor="name"/>Pet Name:<br/>
                            <input type="text" name ="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="type"/>Pet Type:<br/>
                            <input type="text" name ="type" id="type" value={type} onChange={(e) => setType(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="description"/>Pet Description:<br/>
                            <input type="text" name ="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <h3>Skills! (optional!)</h3>
                        <div>
                            <label htmlFor="skillOne"/>Skill 1:<br/>
                            <input type="text" name ="name" id="skillOne" value={skillOne} onChange={(e) => setSkillOne(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="skillTwo"/>Skill 2:<br/>
                            <input type="text" name ="name" id="skillTwo" value={skillTwo} onChange={(e) => setSkillTwo(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="skillThree"/>Skill 3:<br/>
                            <input type="text" name ="name" id="skillThree" value={skillThree} onChange={(e) => setSkillThree(e.target.value)} />
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
export default PetForm;

