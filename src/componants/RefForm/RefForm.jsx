import { useEffect, useRef } from "react";

const RefForm = () => {


    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault(null);
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    useEffect( ()=>{
        nameRef.current.focus();
    } , [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" name="name" />
            <br />
            <input ref={emailRef} type="email" name="email" />
            <br />
            <input ref={passwordRef} type="text" name="password" />
            <br />
            <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;