import {GetServerSideProps, NextPage} from "next";
import Championship from "../../types/Championship";
import {FormEvent, useEffect, useState} from "react";
import ChampionshipEndpoint from "../../endpoints/ChampionshipEndpoint";
import {LayoutBootstrap} from "../../components/LayoutBootstrap/LayoutBootstrap";
import {CardPage} from "../../components/LayoutBootstrap/CardPage";
import {Table} from "../../components/LayoutBootstrap/Table";

interface MyProps {
    list: Championship[];
}

const ChampionshipHome: NextPage<MyProps> = ({}) => {
    const [carregando, setCarregando] = useState(true);
    const [championshipList, setChampionshipList] = useState([] as Championship[]);
    const [championshipSelected, setChampionshipSelected] = useState(null as Championship | null);
    const fields = [{field: 'id', headerName: 'ID'}, {field: 'year', headerName: 'Year'}];

    useEffect(() => {
        load()
    }, []);

    async function load() {
        const response = await ChampionshipEndpoint.getAll();
        setChampionshipList(response);
        setCarregando(false);
    }

    const itemSelected = (key: any) => {
        const championshipSelected = key as Championship;
        setChampionshipSelected(championshipSelected);
        //console.log(championshipSelected.id + ' ' + championshipSelected.year);
    }

    return (
        <LayoutBootstrap title="ChampionShip List">
            <CardPage title="Championship">
                <form>
                    <div className="mb-3">
                        <label htmlFor="id" className="form-label">ID</label>
                        <input type="number" className="form-control" id="id" autoComplete='off'
                               readOnly={true} aria-describedby="id" value={championshipSelected?.id}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="year" className="form-label">Year</label>
                        <input type="number" className="form-control" id="year"
                               value={championshipSelected?.year}/>
                    </div>

                </form>
            </CardPage>
            <CardPage title="Championship">
                <Table
                    columns={fields}
                    rows={championshipList}
                    loading={carregando}
                    itemSelected={itemSelected}
                />
            </CardPage>

        </LayoutBootstrap>

    );
};

export default ChampionshipHome;


export const getServerSideProps: GetServerSideProps = async () => {

        return {
            props: {},
        };
    }
;