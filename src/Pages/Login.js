import { useState } from "react";


export default function Login(){
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) =>{
        setUser((prevState)=>({
            ...prevState,
            [event.target.name]: event.target.value            
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Authorization</h1>
            <div class="form-group">
                <label for="emailLogin">Email</label>
                <input value={user.email} onChange={handleChange} name="email" type="email" class="form-control" id="emailLogin" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
                <label for="passwordLogin">Password</label>
                <input value={user.password} onChange={handleChange} name="password" type="password" class="form-control" id="passwordLogin" placeholder="Password"/>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    );
}