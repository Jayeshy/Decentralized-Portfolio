import { SlCalender } from "react-icons/sl"
import './Experience.css'
import { useEffect, useState } from "react"

const Experience = ({state}) => {
    const [educations, setEducations] = useState([]);
    useEffect(()=>{
        const {contract} = state;
        const educationDetails = async() =>{
            const educations = await contract.methods.allEductationDetails().call();
            setEducations(educations);
        }
        educationDetails();

    },[state])
    return (
        <section className="exp-section">

            <div className="container">

                <div className="education">
                    <h1>Education</h1>
                    {educations.map((education)=>{
                        return (   
                        <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> {education.date}
                        </p>
                        <h3 className="card-text2">{education.degree}</h3>
                        <p className="card-text3">{education.knowledgeAcquired}</p>
                        <p className="card-text4">{education.instutionName}</p>
                    </div>)
                    })}
                 
                   
                </div>
                {/* experience */}
                {/* <div className="education">
                    <h1 className="edu-tittle">Experience</h1>
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> March 2013 - Present
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">learned this this and that.learned this this and that.learned this this and that.learned this this and that.</p>
                        <p className="card-text4">
                            Code Eater
                        </p>
                    </div> */}
                    {/* card2 */}
                    {/* <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> March 2013 - Present
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">learned this this and that.learned this this and that.learned this this and that.learned this this and that.</p>
                        <p className="card-text4">
                            Code Eater
                        </p>
                    </div> */}
                    {/* card3 */}
                    {/* <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> March 2013 - Present
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">learned this this and that.learned this this and that.learned this this and that.learned this this and that.</p>
                        <p className="card-text4">
                            Code Eater
                        </p>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Experience
