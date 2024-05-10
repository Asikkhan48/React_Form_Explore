import { useContext } from "react";
import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";
import { AgeContext } from "../Grandpa/Grandpa";

const Father = ({asset}) => {

    const [age, setAge] = useContext(AgeContext);
    return (
        <div>
            <h2>Father</h2>
            <section className="flex">
            <Myself asset={asset}></Myself>
            <Brother></Brother>
            <Sister></Sister>
            </section>
            <p>Age: {age}</p>
            <button onClick={() => setAge(age + 5)}>Increase age</button>
        </div>
    );
};

export default Father;