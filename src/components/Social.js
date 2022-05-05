import {Image,Nav,Navbar} from 'react-bootstrap'

import face from '../icons/facebook.png'
import insta from '../icons/instagram.png'
import lin from '../icons/linkedin.png'
import soun from '../icons/soundcloud.png'
import you from '../icons/youtube.png'

export default function Social (){

    return (
        <Nav className="justify-content-center social">
            <p>Minhas Redes: </p>

        <Nav.Item>
            <Image rounded src={face} style={{height:"18px",width:"18px"}}/>

        </Nav.Item>
        <Nav.Item>
            <Image rounded src={insta} style={{height:"18px",width:"18px"}}/>

        </Nav.Item>
        <Nav.Item>
            <Image rounded src={lin} style={{height:"18px",width:"18px"}}/>

        </Nav.Item>
        <Nav.Item>
            <Image rounded src={you} style={{height:"18px",width:"18px"}}/>

        </Nav.Item>

        <Nav.Item>
            <Image rounded src={soun} style={{height:"18px",width:"18px"}}/>

        </Nav.Item>

        </Nav>
    )

}