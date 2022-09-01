import React from 'react'
import { Link } from "react-router-dom";
import UserCard from './UserCard';
import Button from '@mui/material/Button';
import { mockUsers } from '../../shared/mock';

const UsersList = () => {
    return (
        <div>
            <Link underline="none" to="/add-user">
                <Button variant="outlined" size="small">
                    Add User
                </Button>
            </Link>
            <div>
                {(mockUsers || []).length > 0 ? (mockUsers || []).map(user => <div key={user.id}>
                    <UserCard user={user} />
                </div>) : <p> No User! </p>}
            </div>
        </div>
    )
}

export default UsersList