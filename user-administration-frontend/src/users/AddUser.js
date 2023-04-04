import React from 'react'

export default function AddUser() {
  return (
    <div className="container">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">アカウント登録</h2>
            <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                    名前
                </label>
                <input 
                    type={"text"}
                    className="form-control"
                    placeholder="名前を入力してください。"
                    name="name"
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
                />
            </div>
            <button type="submit" className="btn btn-outline-primary px-4">登録</button>
            <button type="submit" className="btn btn-danger mx-2 px-1">取り消し</button>
        </div>

    </div>
  )
}
