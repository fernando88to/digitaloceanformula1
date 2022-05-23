import {NextPage} from "next";
import {LayoutBootstrap} from "../../components/LayoutBootstrap/LayoutBootstrap";
import {useEffect} from "react";
//import { Modal }  from 'bootstrap/dist/js/bootstrap';


interface Iprops {

}

export const IndexPage:NextPage<Iprops> = ({}) =>{

    function openModal() {
        //var modal = document.getElementById('exampleModal');
        //document.getElementById("backdrop").style.display = "block"
        //document.getElementById("exampleModal").style.display = "block"
        //document.getElementById("exampleModal").classList.add("show")
        // let modal = document.getElementById('exampleModal');
        //  if(modal){
        //      modal.classList.add("show");
        //      modal.show();
        //      //modal.style.display = "block";
        //  }
        //var myModal = new Modal(document.getElementById('exampleModal'))
        //myModal.show()

        let modal = document.getElementById('exampleModal');
        const bsModal = new Modal(modal, {
            backdrop: 'static',
            keyboard: false
        })
        bsModal.show()


    }


    useEffect(()=>{



        /*var myModal = new Modal(document.getElementById('myModal'), {})
        myModal.toggle()*/

        /*let modal = document.getElementById('myModal');
        if(modal){
            modal.classList.add("show");
            modal.style.display = "block";
        }*/

    },[]);

    return (
        <LayoutBootstrap title="ChampionShip">
            
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
            </div>

            

            <div className="row text-end">
                <div className="col-12">
                    <button type="button" className="btn btn-primary">Cadastrar</button>
                </div>

            </div>

        </LayoutBootstrap>
    );

}

export default IndexPage;