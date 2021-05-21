import {Image,Container} from 'react-bootstrap'
import ProjectsList from './ProjectsList'
import robert from '../imgs/robert.jpg'
import face from '../icons/facebook.png'
import insta from '../icons/instagram.png'
import lin from '../icons/linkedin.png'
import soun from '../icons/soundcloud.png'
import you from '../icons/youtube.png'
import tw from '../icons/twitch.png'

export default function Home (){

    return (
        <div>

            <Container className="header">

                <div style={{width:"460px",textAlign:"center",margin: "auto"}}>
                <Image roundedCircle src={robert} alt="Robert Oliveira" 
                style={{height:"180px",width:"180px",marginTop:"80px"}}/>

                <div style={{marginTop:"40px"}}>

                <h2>Olá! Eu sou Robert </h2>
                <p>Web Designer, game dev, editor de vídeo e produtor músical. 
                </p>

                <ul className="social" style={{marginTop:"20px"}}>
                    <li>
                        <Image rounded src={face} style={{height:"36px",width:"36px"}}/>

                    </li>
                    <li>
                        <Image rounded src={insta} style={{height:"36px",width:"36px"}}/>

                    </li>
                    <li>
                        <Image rounded src={lin} style={{height:"36px",width:"36px"}}/>

                    </li>
                    <li>
                        <Image rounded src={you} style={{height:"36px",width:"36px"}}/>

                    </li>
                    <li>
                        <Image rounded src={tw} style={{height:"36px",width:"36px"}}/>

                    </li>
                    <li>
                        <Image rounded src={soun} style={{height:"36px",width:"36px"}}/>

                    </li>


                </ul>

                </div>


               </div>
            </Container>

            <h2 style={{textAlign:"center",marginTop:"160px"}}>Meus Projetos</h2>

            <ProjectsList/>
            

        </div>
    )
}