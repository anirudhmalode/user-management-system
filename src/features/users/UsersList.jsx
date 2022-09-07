import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import UserCard from './UserCard';
import Button from '@mui/material/Button';
// import { mockUsers } from '../../shared/mock';

const UsersList = () => {
    const users = useSelector((store) => store.users);
    console.log("ALL USERS -->", users);

    return (
        <div>
            <Link underline="none" to="/add-user">
                <Button variant="outlined" size="small">
                    Add User
                </Button>
            </Link>
            <div>
                {(users || []).length > 0 ? (users || []).map(user => <div key={user.id}>
                    <UserCard user={user} />
                </div>) : <p> No User! </p>}
            </div>
        </div>
    )
}

export default UsersList