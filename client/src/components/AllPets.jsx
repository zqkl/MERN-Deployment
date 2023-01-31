import { useNavigate } from 'react-router-dom';

function AllPets(props){
    const { pets } = props
    const navigate = useNavigate();
    const sortedList = pets.sort((a, b) =>
    a.type.localeCompare(b.type));
    return(

                <div>
                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {pets&& sortedList.map(pet => {
                            return(
                            <tr key={pet._id}>
                                
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td><button onClick={() => navigate(`/pets/${pet._id}`)}>details</button><button onClick={() => navigate(`/pets/edit/${pet._id}`)}>edit</button></td>
                            </tr>
                                )})}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
}

export default AllPets;