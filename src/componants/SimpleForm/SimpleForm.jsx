
const SimpleForm = () => {

   

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log("handle Submit");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" name="name" />
            <br />
            <input type="email" name="email" />
            <br />
            <input type="text" name="phone" />
            <br />
            <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;