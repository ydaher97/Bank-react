import React from 'react';
import { AppBar, Toolbar, Typography} from '@mui/material';
import { Link , useNavigate} from 'react-router-dom';


const Nav = () => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user._id)

    const handleLogout= () => {
      navigate('/login')
        localStorage.removeItem('user');
        
    
    }

  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My Bank App
          </Typography>
          <button onClick={handleLogout}>
					Logout
				</button>
				
				<Link to={`/user/${user._id}`}><button>User Profile</button></Link>
				<Link to={'/home'}><button>home</button></Link>
				<Link to={`/transactions`}><button>transactions</button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
