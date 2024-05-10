import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncale from "../Uncale/Uncale";
import "./Grandpa.css"

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000);

export const AgeContext = createContext(25);

const Grandpa = () => {

    const [money, setMoney] = useState(1000);
    const [age, setAge] = useState(25);

    const asset = "diamond";
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Net Money: {money}</p>
            <p>New Age: {age}</p>
           <AgeContext.Provider value={[age, setAge]}>
           <MoneyContext.Provider value={[money, setMoney]}>
           <AssetContext.Provider value="gold">
            <section className="flex">
            <Father asset={asset}></Father>
            <Uncale asset={asset}></Uncale>
            <Aunty></Aunty>
            </section>
            </AssetContext.Provider>
           </MoneyContext.Provider>
           </AgeContext.Provider>
        </div>
    );
};

export default Grandpa;