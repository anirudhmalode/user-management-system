import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../app/userSlice';

const USERS_DATA_CONSTANTS = {
    NAME: 'name',
    EMAIL: 'email'
}

export default function EditUser() {
    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);
    const navigate = useNavigate();
    const existingUser = users.find(user => user.id === parseInt(params.id));

    const { name, email } = existingUser;
    const [values, setValues] = useState({
        name,
        email
    });

    const handleInputChange = (fieldName, value) => {
        setValues({
            ...values,
            [fieldName]: value
        })
    }

    const handleEditUser = () => {
        dispatch(editUser({
            id: params.id,
            name: values.name,
            email: values.email
        }));
        setValues({
            name: '',
            email: ''
        });
        navigate("/");
    }

    const disableButton = !values.name || !values.email;

    return (
        <Box>
            <div>
                <TextField
                    label="Name"
                    id="user-name"
                    value={values.name || ''}
                    size="small"
                    onChange={(e) => handleInputChange(USERS_DATA_CONSTANTS.NAME, e.target.value)}
                />
            </div>
            <div>
                <TextField
                    label="Email"
                    id="user-email"
                    value={values.email || ''}
                    size="small"
                    onChange={(e) => handleInputChange(USERS_DATA_CONSTANTS.EMAIL, e.target.value)}
                />
            </div>
            <div>
                <Button variant="outlined" size="small" disabled={disableButton} onClick={handleEditUser}>
                    Edit User
                </Button>
            </div>
        </Box>
    );
}
