import {Image,Container} from 'react-bootstrap'
import ProjectsList from './ProjectsList'
import About from './About'
import robert from '../imgs/robert.jpg'
import OtherProjects from './OtherProjects'


export default function Home (){

    return (
        <div>

            <Container className="header">

                <div style={{width:"460px",textAlign:"center",margin: "auto"}}>
                <Image roundedCircle src={robert} alt="Robert Oliveira" 
                style={{height:"180px",width:"180px",marginTop:"80px"}}/>

                <div style={{marginTop:"40px"}}>

                <h2>Olá! Eu sou Robert </h2>
                <p>Web Designer FullStack e etc</p>

                </div>


               </div>
            </Container>
            <div style={{textAlign:"center",marginTop:"40px"}}>
            <h2>Meus Projetos</h2>

            <ProjectsList/>

            </div>

            <div style={{marginTop:"20px",height:"720px",marginBottom:"40px"}}>
                <About/>

            </div>
            <div style={{height:"720px",marginBottom:"40px"}}>


                <OtherProjects/>
            </div>


        </div>
    )
}