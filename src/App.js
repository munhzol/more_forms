import React, {useState} from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import RegisterForm from './components/RegisterForm';

function App() {
  const [state, setState] = useState({
      firstname: '',
      lastname: '',
      email:'',
      password:'',
      confirmPassword:''
  });

  const [users, setUsers] = useState([
    {firstname:'aaa', lastname:'bbb', email:'aa@bb.com'},
    {firstname:'aaa1', lastname:'bbb1', email:'aa1@b1b.com'},
    {firstname:'aaa2', lastname:'bbb2', email:'aa2@b2b.com'}
  ]);

  return (
    <div className="App container">
  
      <div className="jumbotron">
        <h1 className="display-3">More Forms</h1>
      </div>
      <div className="row">
        <div className="col-md-6">
          <RegisterForm inputs={state} setInputs={setState} />
        </div>
        <div className="col-md-6">
          
            {/* users.map(row=>{
              
            }); */}
          
        </div>
      </div>
    </div>
  );
}

export default App;
