import React,{useState} from 'react';
import './App.css';
import ListMember from './component/ListMember';
import FormTeam from './component/FormTeam';
import data from './data';
function App() {

  const [team,setTeam] = useState(data)

  function addnewMember(add){
    const newMember =[ ...team, {...add}]

    setTeam(newMember)
  }
  return (
    <div className="App">
      <h1 className='u-center  primary-header'>Form team </h1>
      <ListMember  data={team}/>
      <FormTeam addnewMember={addnewMember}/>
    </div>
  );
}

export default App;
