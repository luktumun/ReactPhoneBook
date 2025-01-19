import book_11358859 from './book_11358859.png';
import './App.css';
import { useState } from 'react';
import Phonebook from './Phonebook';
import InformationTable from './InformationTable';

function App(props) {
  const initUserObj =[];

  const [users,setUsers] = useState(initUserObj);
  const addUser = (user) =>{
    console.log("user", users.length);
    user.id = users.length+1;
    setUsers([...users,user]);
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={book_11358859} className="App-logo" alt="logo" />
        <p>
          React Phone Book
        </p>
       
      </header>
      <hr/>
      <section>
      <Phonebook addUser={addUser} />
      <hr />
      <InformationTable users={users} />
    </section>

    </div>
  );
}

export default App;
