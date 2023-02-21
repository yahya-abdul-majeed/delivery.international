

export default function Profile(){
    return(
        <form>
            <h1>Profile</h1>
            <div className="form-group row">
                <div className="col-2">
                    <label for="nameProfile">Name</label>
                </div>
                <div className="col">
                    <input className="form-control" type="text" id="nameProfile" placeholder="Enter Name"/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-2">
                    <label for="emailProfile">Email</label>
                </div>
                <div className="col">
                    <input disabled type="email" id="emailProfile" className="form-control" placeholder="Enter Email"/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-2">
                    <label for="dobProfile">Date of Birth</label>
                </div>
                <div className="col">
                    <input type="date" id="dobProfile" className="form-control"/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-2">
                    <label for="genderProfile">Gender</label>
                </div>
                <div className="col">
                    <select disabled className="form-control" id="genderProfile">
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
                    <input type="text" className="form-control" id="addressProfile" placeholder="Enter Address"/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-2">
                    <label for="phonenumberProfile">Phone Number</label>
                </div>
                <div className="col">
                    <input type="tel" id="phonenumberProfile" className="form-control" placeholder="+7 (xxx) xxx xxxx"/>
                </div>
            </div>
        </form>
    );
}