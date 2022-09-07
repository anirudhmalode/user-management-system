import * as React from 'react';
import Card from '@mui/material/Card';
import { Link } from "react-router-dom";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../app/userSlice';

export default function UserCard({ user }) {
    const dispatch = useDispatch();
    const firstLetterOfUser = user.name.substring(0, 1).toUpperCase();

    const handleDeleteUser = () => dispatch(deleteUser(user));

    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {firstLetterOfUser}
                    </Avatar>
                }
                action={
                    <>
                        <Link underline="none" to={`/edit-user/${user.id}`}>
                            <IconButton aria-label="settings">
                                <EditIcon />
                            </IconButton>
                        </Link>
                        <IconButton aria-label="settings" onClick={handleDeleteUser}>
                            <DeleteIcon />
                        </IconButton>
                    </>
                }
                title={user.name}
                subheader={user.email}
            />
        </Card>
    );
}
