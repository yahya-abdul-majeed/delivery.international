import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, register } from "../features/auth/authSlice";

export default function Registration(){

    const [user,setUser] = useState({
        fullName: "",
        password: "",
        email: "",
        address: "",
        birthDate: "",
        gender: "Male",
        phoneNumber: ""
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const authState = useSelector((state)=> state.auth)

    useEffect(()=>{
        if(authState.isSuccess){
            toast("registration successful");
            dispatch(reset())
            navigate('/login')
        }
    },[authState.isSuccess])

    const handleChange = (event) =>{
       setUser((prevState)=>({
        ...prevState,
        [event.target.name]: event.target.value
       }))
       console.log(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(user);
        dispatch(register(user));
    }

    return(
        <div className="container w-25">
        <form onSubmit={handleSubmit}>
            <h2 className="my-3">Register New Account</h2>
            <div className="form-group">
                <label for="nameRegistration">Name</label>
                <input value={user.fullName} name="fullName" type="text" className="form-control" id="nameRegistration" placeholder="Enter Name" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label for="genderRegistration">Gender</label>
                <select value={user.gender} name="gender" id="genderRegistration" className="form-control" onChange={handleChange}>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            <div className="form-group">
                <label for="phonenumberRegistration">Phone Number</label>
                <input value={user.phoneNumber} name="phoneNumber" type="tel" className="form-control" id="phonenumberRegistration" placeholder="+7 (xxx) xxx xxxx" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label for="dobRegistration">Date of Birth</label>
                <input value={user.birthDate} name="birthDate" type="date" id="dobRegistration" className="form-control" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label for="addressRegistration">Address</label>
                <input value={user.address} name="address" type="text" id="addressRegistration" className="form-control" placeholder="Enter Address" onChange={handleChange}/>
            </div>
            <div class="form-group">
                <label for="emailRegistration">Email</label>
                <input value={user.email} name="email" type="email" class="form-control" id="emailRegistration" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange}/>
            </div>
            <div class="form-group">
                <label for="passwordRegistration">Password</label>
                <input value={user.password} name="password" type="password" class="form-control" id="passwordRegistration" placeholder="Password" onChange={handleChange}/>
            </div>
            <button type="submit" class="btn btn-primary my-3">Register</button>
        </form>
        </div>
    );
}