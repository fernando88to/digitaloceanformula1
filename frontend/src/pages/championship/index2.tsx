import {NextPage} from "next";
import {LayoutBootstrap} from "../../components/LayoutBootstrap/LayoutBootstrap";
import {useEffect, useState} from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



interface Iprops {

}

export const IndexPage:NextPage<Iprops> = ({}) =>{


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(()=>{





    },[]);

    return (
        <LayoutBootstrap title="ChampionShip">


            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <button type="button" className="btn btn-primary"  onClick={openModal}>
                Teste
            </button>

            
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>*/}

            

            <div className="row text-end">
                <div className="col-12">
                    <button type="button" className="btn btn-primary">Cadastrar</button>
                </div>

            </div>

        </LayoutBootstrap>
    );

}

export default IndexPage;