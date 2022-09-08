import * as React from 'react';
import Card from '@mui/material/Card';
import { Link } from "react-router-dom";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../app/userSlice';

export default function UserCard({ user }) {
    const dispatch = useDispatch();
    const firstLetterOfUser = user.name.substring(0, 1).toUpperCase();

    const handleDeleteUser = () => dispatch(deleteUser(user));

    return (
        <Card variant='outlined'>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        {firstLetterOfUser}
                    </Avatar>
                }
                action={
                    <>
                        <Link underline="none" to={`/edit-user/${user.id}`}>
                            <IconButton size='small' aria-label="settings">
                                <EditIcon fontSize='small' />
                            </IconButton>
                        </Link>
                        <IconButton size='small' aria-label="settings" onClick={handleDeleteUser}>
                            <DeleteIcon fontSize='small' />
                        </IconButton>
                    </>
                }
                title={user.name}
                subheader={user.email}
            />
        </Card>
    );
}
