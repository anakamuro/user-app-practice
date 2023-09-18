import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
const url = 'https://api.github.com/users';

function App() {
  const [users, setUsers] = useState([])

  const getUsers = async() => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users)
  }

  useEffect(() => {
    getUsers();
  }, [])

  const removeItem = (id)=> {
    let newUsers = users.filter((user) => user.id !== id)
    setUsers(newUsers)
  }
  return (
    <div className="App">
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const {id, login, avatar_url, html_url} = user;
        return (
          <li key={id}>
            <img src={avatar_url} alt={login}/>
            <div>
              <h4>{login}</h4>
              <a className="data"href={html_url}>profile</a>
              <button className="btn" onClick={() => removeItem(id)}>remove</button>
            </div>
          </li>
        )
        })}
      </ul>
    </div>
  );
}

export default App;
