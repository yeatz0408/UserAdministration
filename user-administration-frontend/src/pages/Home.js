import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function Home() {

    const [users, setUsers] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }

    const deleteUser = async (id) => {

        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    }

    const submit = (id) => {
        confirmAlert({
            message: '削除しますか？',
            buttons: [
              {
                label: 'はい',
                onClick: () => deleteUser(id)
              },
              {
                label: 'いいえ',
              }
            ]
          });
    }


    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">名前</th>
                            <th scope="col">アカウントID</th>
                            <th scope="col">Eメール</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => (

                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link 
                                            to={`/viewuser/${user.id}`} 
                                            className="btn btn-primary mx-2">詳しく</Link>
                                        <Link 
                                            to={`/edituser/${user.id}`} 
                                            className="btn btn-outline-primary mx-2">変更</Link>
                                        <button 
                                            className="btn btn-danger mx-2"
                                            onClick={() => submit(user.id)}
                                        >削除</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
