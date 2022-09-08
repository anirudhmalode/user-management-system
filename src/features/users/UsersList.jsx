import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import UserCard from './UserCard';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './Users.css';

const UsersList = () => {
    const users = useSelector((store) => store.users);

    return (
        <div>
            <Link to="/add-user">
                <Button className='add__user__button' variant="contained" size="small">
                    Add User
                </Button>
            </Link>
            <Grid container spacing={2}>
                {(users || []).length > 0 ? (users || []).map(user =>
                    <Grid key={user.id} item xs={4}>
                        <UserCard user={user} />
                    </Grid>
                ) : <p> No User! </p>}

            </Grid>
        </div>
    )
}

export default UsersList