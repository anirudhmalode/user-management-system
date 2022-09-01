import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const USERS_DATA_CONSTANTS = {
    NAME: 'name',
    EMAIL: 'email'
}

export default function AddUser() {
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
                <Button variant="outlined" size="small" disabled={disableButton} onClick={handleAddUser}>
                    Add User
                </Button>
            </div>
        </Box>
    );
}
