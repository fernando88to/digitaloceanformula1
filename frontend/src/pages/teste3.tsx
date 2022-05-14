import type {NextPage} from 'next'
import {LayoutBootstrap} from "../components/LayoutBootstrap/LayoutBootstrap";
import {Card} from "../components/LayoutBootstrap/Card";
import {CardPage} from "../components/LayoutBootstrap/CardPage";
import {useEffect, useState} from "react";
import Championship from "../types/Championship";

const TestePage: NextPage = () => {
    const [championshipList, setChampionshipList] = useState([] as Championship[]);

    useEffect(() => {
        let championShip: Championship[] = [];
        championShip.push({
            id: 1,
            year: 2010
        });
        championShip.push({
            id: 2,
            year: 2011
        });
        championShip.push({
            id: 3,
            year: 2012
        });
        setChampionshipList(championShip);
    }, []);


    return (
        <LayoutBootstrap title="First Page">
            <div className="row">
                <Card title="My Card"></Card>
                <Card title="My Card"></Card>
                <Card title="My Card"></Card>
                <Card title="My Card"></Card>
            </div>


            <CardPage title="TableOld">
                <div>
                    <div id="example_wrapper" className="dataTables_wrapper dt-bootstrap5">
                        <div className="row">
                            <div className="col-sm-12">
                                <table id="example"
                                       className="table table-striped data-table dataTable"
                                       style={{width: '100%'}} role="grid"
                                       aria-describedby="example_info">
                                    <thead>
                                    <tr role="row">
                                        <th className="sorting sorting_asc"></th>
                                        <th className="sorting">Position
                                        </th>
                                        <th className="sorting">Office
                                        </th>
                                        <th className="sorting">Age
                                        </th>
                                        <th className="sorting">Start date
                                        </th>
                                        <th className="sorting">Salary
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {championshipList.map((championship: Championship, index: number) => {
                                        return (
                                            <tr role={index % 2 === 0 ? 'odd' : 'even'} className="odd"
                                                key={championship.id}>
                                                <td className="sorting_1">1</td>
                                                <td>{championship.year}</td>
                                                <td>{championship.year}</td>
                                                <td>{championship.year}</td>
                                                <td>{championship.year}</td>
                                                <td>{championship.year}</td>
                                            </tr>
                                        )
                                    })}


                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </CardPage>
        </LayoutBootstrap>


    )
}

export default TestePage;
