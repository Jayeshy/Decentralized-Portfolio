import React, { useEffect, useState} from 'react'
import { Modal, ModalBody, Row } from "reactstrap"
import heroImg from '../../assets/hero-img.png'
import './Hero.css'

const Hero = ({state}) => {
    const [modal, setModal] = useState(false);
    const [description, setDescription] = useState('');
    const [imageLink, setImageLink] = useState('');
    useEffect(() => {
            const {contract} = state;
            const description = async() => {
                const descriptionText = await contract.methods.description().call();
                setDescription(descriptionText);
            }
            description();
    }, [state])
   useEffect(() =>{
        const {contract} = state;
        const imageLink = async () => {
            const getImageLink = await contract.methods.imageLink().call();
            setImageLink(getImageLink);
        }
        imageLink();
   }, [state])
    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">
                <p><span>Jayesh </span>
                    is a Full-Stack Blockchain Developer</p>
                <h1>I develop decentralised apps in web3 space.</h1>
                <h3>{description}</h3>
                {/*  =========popup bootstrap==========  */}

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" toggle={() => setModal(!modal)}>
                                    Mail ID: jayeshnyadav497@gmail <br/>
                                    Mobile Number: +917724921978
                                </label>

                            </Row>
                    </ModalBody>
                </Modal>

                <button className="msg-btn" onClick={() => setModal(true)}>Get in Touchn with Jayesh</button>
                {/*  =========popup bootstrap end==========  */}

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={`https://gold-quick-antelope-719.mypinata.cloud/ipfs/${imageLink}`} alt="profilePhoto" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero
