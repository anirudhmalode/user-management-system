import * as React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../app/userSlice';
import './Users.css';

const USERS_DATA_CONSTANTS = {
    NAME: 'name',
    EMAIL: 'email'
}

export default function AddUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userValue, setUserValue] = React.useState({
        name: '',
        email: ''
    })

    const handleInputChange = (fieldName, value) => {
        setUserValue({
            ...userValue,
            [fieldName]: value
        })
    }

    const handleAddUser = () => {
        dispatch(addUser({
            ...userValue,
            id: uuidv4()
        }));
        setUserValue({
            name: '',
            email: ''
        });
        navigate("/");
    }

    const disableButton = !userValue.name || !userValue.email;

    return (
        <Box>
            <div>
                <TextField
                    label="Name"
                    id="user-name"
                    value={userValue.name}
                    size="small"
                    onChange={(e) => handleInputChange(USERS_DATA_CONSTANTS.NAME, e.target.value)}
                />
            </div>
            <div>
                <TextField
                    label="Email"
                    id="user-email"
                    value={userValue.email}
                    size="small"
                    onChange={(e) => handleInputChange(USERS_DATA_CONSTANTS.EMAIL, e.target.value)}
                />
            </div>
            <div>
                <Button className='add__user__button' variant="outlined" size="small" disabled={disableButton} onClick={handleAddUser}>
                    Add User
                </Button>
            </div>
        </Box>
    );
}
