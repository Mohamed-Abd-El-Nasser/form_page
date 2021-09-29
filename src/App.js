import React, { useEffect , useState }  from 'react';
import axios from 'axios';
import Viewuser from './components/Veiwuser';
import UsersForm from './components/UsersForm';
async function getUser() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

function App() {

  const [users,setusers]= useState([]) ;
  const [user,setuser] = useState({});
  useEffect(()=>{

    getUser().then((response)=>{

      const u = [...response.data]
        setusers(u)

    })


  },[]);
  const deleteitem = (user) =>{
    let u = [...users];
    const i  = u.indexOf(user);
    u.splice(i,1);

    setusers(u);

                      
  }
      const t = <ul>{ users.map((user)=> {
        
     const l = (   <li key={user.id}>
        {user.name} 
        <button onClick={()=>setuser(user)}>view</button>
        <button onClick={()=>deleteitem(user)}>Delete</button>
        
        </li>
     )

     return l ;
        
        })}</ul>

    
  return (
    <div className="App">
 
{
  t
}

<h1> User details </h1>

      {
        user.id > 0 ? (<Viewuser email = {user.email} username={user.username}/>):"please select a user............"


      }
<h1>User Form</h1>

{
        user.id > 0 ? (<UsersForm values={user} onSubmit={(v)=>console.log(v)}/>):"please select a user............"


      }



    </div>
  );
}

export default App;
