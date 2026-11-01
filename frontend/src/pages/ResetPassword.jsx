
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {

    const { token } = useParams();
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        if (password.length < 8) {
            alert("Password must contain at least 8 characters");
            return;
        }

        try {
            const { data } = await axios.post(
                backendUrl + '/api/user/reset-password',
                {
                    token,
                    password
                }
            );

            if (data.success) {
                alert(data.message);
                navigate('/login');
            } else {
                alert(data.message);
            }

        } catch (error) {
            console.log(error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Reset Password</h2>

            <input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <input
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />

            <button type="submit">
                Reset Password
            </button>
        </form>
    );
};

export default ResetPassword;
