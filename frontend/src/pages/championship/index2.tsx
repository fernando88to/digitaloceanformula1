import {NextPage} from "next";
import {LayoutBootstrap} from "../../components/LayoutBootstrap/LayoutBootstrap";
import React, {FormEvent, useEffect, useState} from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


interface Iprops {

}

interface ChampionShip {
    year: string,
    begindate: string,
    enddate: string
}

export const IndexPage: NextPage<Iprops> = ({}) => {


    const [show, setShow] = useState(false);

    const [championshipInstance, setChampionshipInstance] = useState({} as ChampionShip);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const saveNewChampionship = () => {
        console.log(championshipInstance);
    }


    const handleChangesForm = (e: FormEvent<HTMLInputElement>) => {
        const chave: string = e.currentTarget.name;
        const value: string = e.currentTarget.value;
        const newObject = {...championshipInstance, [chave]: value};
        setChampionshipInstance(newObject);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(championshipInstance);


    }
    useEffect(() => {


    }, []);

    return (
        <LayoutBootstrap title="ChampionShip">


            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register of the a new Championship</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Year</label>
                            <input type="number" className="form-control"
                                   name="year"
                                   value={championshipInstance.year || ''}
                                   onChange={handleChangesForm}
                                   id="exampleInputEmail1"
                                   min={0} step={1} aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="begindate" className="form-label">Begin' date</label>
                            <input type="date" className="form-control" id="begindate"
                                   name="begindate"
                                   onChange={handleChangesForm}
                                   value={championshipInstance.begindate || ''}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="beginend" className="form-label">Begin' end</label>
                            <input type="date" className="form-control" id="enddate"
                                   onChange={handleChangesForm}
                                   value={championshipInstance.enddate || ''}
                                   name="enddate"/>
                        </div>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" variant="primary">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </form>

            </Modal>




            <div className="row text-end">
                <div className="col-12">
                    <button type="button" className="btn btn-primary">Cadastrar</button>
                </div>

            </div>

        </LayoutBootstrap>
    );

}

export default IndexPage;