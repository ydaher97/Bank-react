import React ,{useState, useEffect}from 'react'
import CreateUserForm from '../../components/CreateUserForm'
import UserTable from '../../components/UserTable'
import axios from 'axios';
import Title from '../../components/Title';

const HomePage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get('https://bank-backend-mongo.onrender.com/api/users');
          if (response.status === 200) {
            setUsers(response.data); 
          } else {
            console.error('Failed to fetch user data');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchUsers();
    }, [users]);

  return (
    <>
        <Title text="Home"/>
        <div>
            { users && <UserTable users={users}/>}
        </div>
    </>
  )
}

export default HomePage