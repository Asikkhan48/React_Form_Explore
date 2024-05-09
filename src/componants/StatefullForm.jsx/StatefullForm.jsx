import { useState } from "react";

const StatefullForm = () => {
    const [name, setName] =useState(null);

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error,setError] = useState()

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(password.length < 6){
            setError("password must be 6 caracter")
        } else {
            setError('')
        }
        console.log(email, password,name);
    }

    const handleNameChange =(e) =>{
        setName(e.target.value);
    }
    const handleEmailChange = (e) =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePassChange= (e) =>{
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

            <input 
                onChange={handleNameChange}
            type="text" name="name" />
            <label htmlFor="text"> Name</label>
            <br />

            <input 
            onChange={handleEmailChange}
            type="email" name="email" required/>
            <label htmlFor="email"> Email</label>
            <br />

            <input 
                onChange={handlePassChange}
            type="password" name="password" required />
            <label htmlFor="password"> Password</label>
            <br />
            <input type="submit" value="submit" />
            
        {
            error && <p>{error}</p>
        }
            </form>
        </div>
    );
};

export default StatefullForm;