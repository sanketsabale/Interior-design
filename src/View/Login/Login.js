import './Login.css'

export function Login(){
    return (


       <div className='loginmain'>
        <div class="loginname">
            <h1>LOGIN to Livespace Interiors</h1>
            <p>Contact us and get more info</p>
        </div>

        <div>
            <input type='email'  placeholder="Enter Email" required="required"></input>
            <input type='password'  placeholder="Enter Password" required=""></input><br></br>
            <div className='loginbtn'>
                <a href='/Home'>Submit</a>
            </div>
            
        </div>

        </div>
        )
}