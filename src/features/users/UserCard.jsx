import * as React from 'react';
import Card from '@mui/material/Card';
import { Link } from "react-router-dom";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';

export default function UserCard({ user }) {
    const firstLetterOfUser = user.name.substring(0, 1).toUpperCase();

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
                        <IconButton aria-label="settings">
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
