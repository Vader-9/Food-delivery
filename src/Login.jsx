import './Login.css'


function Login() {
    return (

        <div className='login'>
            <div className='login-header'>
                <h1>Sign up</h1>
                <p>X</p>
            </div>
            <div className="input-boxes">
                <input type="text" placeholder='name' />
                <input type="text" placeholder='email' />
                <input type="text" name="" id="" placeholder='password' />
            </div>
            <button id='login-btn'>Create account</button>
            <div className="login-info">
                <input type="radio" />
                <p>By continueing i agree to terms and condition of the privacy policy</p>
            </div>
            <div className="alreadyacc">
                <p>Already have account</p>
                <a href="">Login here</a>
            </div>
        </div>

    )
}

export default Login