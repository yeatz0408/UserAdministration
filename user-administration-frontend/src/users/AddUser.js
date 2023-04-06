import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddUser() {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    const { name, username, email } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user);
        navigate("/");
    }

    return (
        <div className="container">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">アカウント登録</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            名前
                        </label>
                        <input 
                            type={"text"}
                            className="form-control"
                            placeholder="名前を入力してください。"
                            name="name"
                            value={name}
                            onChange={(e) => onInputChange(e)} 
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            アカウントID
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="アカウントIDを入力してください。"
                            name="username"
                            value={username}
                            onChange={(e) => onInputChange(e)} 
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Eメール
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Eメールを入力してください。"
                            name="email"
                            value={email}
                            onChange={(e) => onInputChange(e)} 
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary px-4">登録</button>
                    <Link to="/" className="btn btn-danger mx-2 px-1" >取り消し</Link>
                </form>
            </div>

        </div>
    )
}
