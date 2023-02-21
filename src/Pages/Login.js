

export default function Login(){
    return(
        <form>
            <h1>Authorization</h1>
            <div class="form-group">
                <label for="emailLogin">Email</label>
                <input type="email" class="form-control" id="emailLogin" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
                <label for="passwordLogin">Password</label>
                <input type="password" class="form-control" id="passwordLogin" placeholder="Password"/>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    );
}