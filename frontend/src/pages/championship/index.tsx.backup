import {GetServerSideProps, NextPage} from "next";
import Championship from "../../types/Championship";
import {FormEvent, useEffect, useState} from "react";
import ChampionshipEndpoint from "../../endpoints/ChampionshipEndpoint";
import {Layout} from "../../components/Layout";
import style from "./championship.module.css";

interface MyProps {
    list: Championship[];
}

const ChampionshipHome: NextPage<MyProps> = ({}) => {
    const [carregando, setCarregando] = useState(true);
    const [championshipList, setChampionshipList] = useState([] as Championship[]);
    const [year, setYear] = useState('');

    useEffect(() => {
        load()
    }, []);

    async function load() {
        const response = await ChampionshipEndpoint.getAll();
        setChampionshipList(response);
        setCarregando(false);
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(year);
    }
    const handlerChangeYear = (event: FormEvent<HTMLInputElement>) => {
        setYear(event.currentTarget.value);
    }

    return (
        <Layout titulo='Championship' isButtonBack={true}>


            <div className={style.championship_container}>
                <h5>Create new Championship</h5>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="year">Year: </label>
                    <input type="text" name="year" id="year" onChange={handlerChangeYear}/>
                    <button type="submit">Submit</button>
                </form>

                <h5>Listing</h5>
                {carregando && <p>Carregando...</p>}
                {!carregando && <ul>
                    {championshipList.map((championship) => (
                        <li key={championship.id}>
                            {championship.year}
                        </li>
                    ))}
                </ul>}
                <br/>
                <br/>
            </div>



        </Layout>
    );
};

export default ChampionshipHome;


export const getServerSideProps: GetServerSideProps = async () => {


    /*
        let list: Championship[] = [];
        list.push({id: 1, year: 2022});
        list.push({id: 2, year: 2022});
        return {
            props: {
                list: list
            },
        };*/

    return {
        props: {},
    };
};