import Main from './pages/Main';
import{ Navigate, Route, Routes } from 'react-router-dom';
import PetForm from './components/PetForm';
import SinglePet from './components/SinglePet';
import UpdatePet from './components/UpdatePet';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='/pets' />}/>
        <Route path='/pets' element={<Main/>}/>
        <Route path='/pets/newpet' element={<PetForm/>}/>
        <Route path='/pets/:id' element ={<SinglePet/>}/>
        <Route path='/pets/edit/:id' element ={<UpdatePet/>}/>
      </Routes>
    </div>
  );
}
export default App;



