import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../authWrapper/AuthContext";

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        setError('');
        //console.log(userData);
        if (!userData.username.trim()) {
            setError("Username cannot be empty");
            return;
        }
        if (!userData.password.trim()) {
            setError("Password cannot be empty");
            return;
        }

        const success = login(userData.username, userData.password);
        if (success) {
            navigate('/posts');
        }
    };

    return (
        <div className="max-w-96 m-12">
            <h2 className="text-2xl font-bold mb-4">Login</h2>

            {error && (
                <p className="text-red-500 mb-4">{error}</p>
            )}

            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <input
                    placeholder="Username"
                    className="border p-2 rounded"
                    value={userData.username}
                    onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                />
                <input
                    placeholder="Password"
                    type="password"
                    className="border p-2 rounded"
                    value={userData.password}
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                />
                <button type="submit" className="bg-amber-500 text-white w-fit px-8 py-2 rounded-2xl">Submit</button>
            </form>
        </div>
    );

}

export default Login;
