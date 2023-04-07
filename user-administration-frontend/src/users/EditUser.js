import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

export default function EditUser() {

    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

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
//        e.preventDefault();
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
                <form onSubmit={handleSubmit((e) => onSubmit(e))}>
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
                            {...register('name', { required: true, minLength: 2 })}
                            onChange={(e) => onInputChange(e)}
                        />
                        {errors.name && errors.name.type === "required" &&
                            <span className="panel-footer text-danger">名前を入力ください</span>}
                        {errors.name && errors.name.type === "minLength" &&
                            <span className="panel-footer text-danger">２文字以上でお願いします</span>}
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
                            {...register('username', { required: true, minLength: 3, maxLength: 12 })}
                            onChange={(e) => onInputChange(e)}
                        />
                        {errors.username && errors.username.type === "required" &&
                            <span className="panel-footer text-danger">アカウントIDを入力ください</span>}
                        {errors.username && errors.username.type === "minLength" &&
                            <span className="panel-footer text-danger">３文字以上でお願いします</span>}
                        {errors.username && errors.username.type === "maxLength" &&
                            <span className="panel-footer text-danger">12文字以下でお願いします</span>}
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
                            {...register('email', { required: true, pattern: {
                                value: /\S+@\S+\.\S+/
                              } })}
                            onChange={(e) => onInputChange(e)}
                        />
                        {errors.email && errors.email.type === "required" && 
                            <span className="panel-footer text-danger">Eメールを入力ください</span>}
                        {errors.email && errors.email.type === "pattern" && 
                            <span className="panel-footer text-danger">正しいEメールを入力ください</span>}
                    </div>
                    <button type="submit" className="btn btn-outline-primary px-4">登録</button>
                    <Link to="/" className="btn btn-danger mx-2 px-1" >取り消し</Link>
                </form>
            </div>

        </div>
    )
}
