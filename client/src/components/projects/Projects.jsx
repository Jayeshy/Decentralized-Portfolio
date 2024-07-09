import React, {useState, useEffect} from 'react'
import { FaDonate } from 'react-icons/fa';
import { Modal, ModalHeader, ModalBody, Row, Button } from "reactstrap"
import "./Projects.css"
const Projects = ({state}) => {
    const [modal, setModal] = useState(false);
    const [projects, setProjects] = useState([]);
    useEffect( () => {
        const {contract} = state;
        const projectDetails = async () => {
            const projects = await contract.methods.allProjects().call();
            setProjects(projects);
        }
        contract && projectDetails();
    },[state])

    const donateEth = async(event) => {
        event.preventDefault();
        try{
            const {web3, contract} = state;
            const eth = document.querySelector('#eth').value;
            const weiValue = web3.utils.toWei(eth, 'ether');
            const accounts = await web3.eth.getAccounts();
            const transaction = await contract.methods.donate().send({from:accounts[0], value: weiValue, gas: 4000000});
            alert("Transaction successfull, Thanks for donating ether!");
        }catch(error){
            console.log(error);
        }
       
    }
    return (
        <section className="project-section">
            <h1 className="title">Projects </h1>
            <div className="card-wrapper"> 
                 {projects!=='' && projects.map((project)=>{
                    const githubLink = `https://github.com/Jayeshy/${project.githubLink}`;
                    return ( <a href= {githubLink} className="project-card" target='_blank' rel="noopener noreferrer" >
                    <div className="card-img">
                        <img src={`https://gold-quick-antelope-719.mypinata.cloud/ipfs/${project.image}`} alt="" /></div>
                    <div className="card-text">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                </a>)
                })} 
           
            </div>
 {/*  =========popup bootstrap==========  */}

                    <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                        <ModalHeader toggle={() => setModal(!modal)}>
                            Enter the ETH you want to donate!
                        </ModalHeader>
                        <ModalBody>
                            <form onSubmit = {donateEth}>
                                <Row>
                                    <input id="eth" type="text" />
                                        <Button className='mt-4' >
                                            Send
                                        </Button>
                                </Row>
                            </form>
                        </ModalBody>
                    </Modal>
                    {/*  =========popup bootstrap end==========  */}
                    <p className='donate' onClick={() => setModal(true)}>Liked the projects? Consider donating Eth's <FaDonate className='icon' /></p>
        </section>
    )
}

export default Projects
