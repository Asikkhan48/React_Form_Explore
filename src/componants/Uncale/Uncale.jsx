import Cousin from "../Cousin/Cousin";


const Uncale = ({asset}) => {
    return (
        <div>
            <h2>Uncale</h2>
            <section className="flex">
            <Cousin name={"Asif"} asset={asset}></Cousin>
            <Cousin name={"Kaif"}></Cousin>

            </section>
        </div>
    );
};

export default Uncale;