

export default function Registration(){
    return(
        <form>
            <h1>Register New Account</h1>
            <div className="form-group">
                <label for="nameRegistration">Name</label>
                <input type="text" className="form-control" id="nameRegistration" placeholder="Enter Name"/>
            </div>
            <div className="form-group">
                <label for="genderRegistration">Gender</label>
                <select id="genderRegistration" className="form-control">
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            <div className="form-group">
                <label for="phonenumberRegistration">Phone Number</label>
                <input type="tel" className="form-control" id="phonenumberRegistration" placeholder="+7 (xxx) xxx xxxx"/>
            </div>
            <div className="form-group">
                <label for="dobRegistration">Date of Birth</label>
                <input type="date" id="dobRegistration" className="form-control"/>
            </div>
            <div className="form-group">
                <label for="addressRegistration">Address</label>
                <input type="text" id="addressRegistration" className="form-control" placeholder="Enter Address"/>
            </div>
            <div class="form-group">
                <label for="emailRegistration">Email</label>
                <input type="email" class="form-control" id="emailRegistration" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
                <label for="passwordRegistration">Password</label>
                <input type="password" class="form-control" id="passwordRegistration" placeholder="Password"/>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    );
}