import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditUser() {

    let navigate = useNavigate();

    const {id} =useParams();

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
        await axios.put(`http://localhost:8080/user/${id}`, user);
        navigate("/");
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data);
    }

    useEffect(() => {
        loadUser();
    }, [])

    return (
        <div className="container">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">アカウント情報変更</h2>
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
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary px-4">登録</button>
                    <Link to="/" className="btn btn-danger mx-2 px-1" >取り消し</Link>
                </form>
            </div>

        </div>
    )
}
