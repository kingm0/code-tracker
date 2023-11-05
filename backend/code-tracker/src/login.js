import React, { useEffect ,useState} from 'react'
// import { post } from '../../api/routes/TestAPI';

const LoginSignUp = () => {
    useEffect(()=>{
        const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    console.log("hello");

console.log(sign_up_btn);
sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
    console.log("hello");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});
    }, [])

    useEffect(()=>{
      try{
        // const data = await fetch("")
      } catch(err){
        console.log(err)
      }
    }, [])
    const[username, setName] = useState("");
    // const [cfid, setCfid] = useState("");
    const [password, setPassword] = useState("");
    const loginX = async()=>{
        console.log(username, password);
        if(!username || !password) return;
        try{
            const detail = {
              method:"POST",
                name:username, password
            }
            const data = await fetch("http://localhost:5000/login", detail)
            console.log(data);
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className="container" style={
        {
            margin: 0,
    minWidth: "-webkit-fill-available"
        }
    }>
  <div className="forms-container">
    <div className="signin-signup">
      <form className="sign-in-form">
        <h2 className="title">Sign In</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="text" placeholder="Username" onChange={(e)=>setName(e.target.value)} />
        </div>
       
        <div className="input-field">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <input type="button" defaultValue="Login" className="btn solid" onClick={loginX}/>
        <p className="social-text">Or Sign in with social platforms</p>
        <div className="social-media">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-google" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </form>
      <form  action="/signup" method="post" className="sign-up-form">
        <h2 className="title">Sign Up</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="text" placeholder="Email ID" />
        </div>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="text" placeholder="Codeforces ID" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" defaultValue="Sign Up" className="btn solid" />
        <p className="social-text">Or Sign up with social platforms</p>
        <div className="social-media">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-google" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </form>
    </div>
  </div>
  <div className="panels-container">
    <div className="panel left-panel">
      <div className="content">
        <h3>New here?</h3>
        <button className="btn transparent" id="sign-up-btn">Sign Up</button>
      </div>
      <img src="./img/log.svg" className="image" />
    </div>
    <div className="panel right-panel">
      <div className="content">
        <h3>One of us?</h3>
        <button className="btn transparent" id="sign-in-btn">Sign In</button>
      </div>
      <img src="./img/register.svg" className="image" />
    </div>
  </div>
</div>

  )
}

export default LoginSignUp