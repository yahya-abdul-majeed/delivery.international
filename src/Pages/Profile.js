import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getProfile } from "../features/auth/profileSlice";


export default function Profile(){
    const [user, setUser] = useState({
        fullName: "",
        birthDate: "",
        gender: "",
        address: "",
        phoneNumber: ""
    })

    const profileState = useSelector(state=>state.profile)
    const dispatch = useDispatch()
    const token = localStorage.getItem('user')

    useEffect(()=>{
        dispatch(getProfile(token))
        if(profileState.user){
            setUser(profileState.user)
        }
    })

    const handleChange = (event)=>{
        setUser(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit= (event)=>{
        event.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Profile</h1>
            <div className="form-group row">
                <div className="col-2">
                    <label for="nameProfile">Name</label>
                </div>
                <div className="col">
                    <input name="fullName" value={user.fullName} onChange={handleChange} className="form-control" type="text" id="nameProfile" placeholder="Enter Name"/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-2">
                    <label for="emailProfile">Email</label>
                </div>
                <div className="col">
                    <input name="email" value={user.email} disabled type="email" id="emailProfile" className="form-control" placeholder="Enter Email"/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-2">
                    <label for="dobProfile">Date of Birth</label>
                </div>
                <div className="col">
                    <input name="birthDate" value={user.birthDate} onChange={handleChange} type="date" id="dobProfile" className="form-control"/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-2">
                    <label for="genderProfile">Gender</label>
                </div>
                <div className="col">
                    <select disabled name="gender" value={user.gender} className="form-control" id="genderProfile">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-2">
                    <label for="addressProfile">Home Address</label>
                </div>
                <div className="col">
                    <input name="address" value={user.address} onChange={handleChange} type="text" className="form-control" id="addressProfile" placeholder="Enter Address"/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-2">
                    <label for="phonenumberProfile">Phone Number</label>
                </div>
                <div className="col">
                    <input name="phoneNumber" value={user.phoneNumber} onChange={handleChange} type="tel" id="phonenumberProfile" className="form-control" placeholder="+7 (xxx) xxx xxxx"/>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Save changes</button>
        </form>
    );
}