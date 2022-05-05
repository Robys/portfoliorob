import {Carousel, CarouselItem} from 'react-bootstrap'
import loz from '../vids/LOZx.mp4'
import park from '../vids/parkour.mp4'
import queb from '../vids/quebrada.mp4'
import driver from '../vids/driverclone.mp4'


export default function OtherProjects(){

    return (
        <div style={{
            textAlign:"center",width:"100%",
            backgroundColor:"#1d1d1d",
            color:"#FFFF",
            height:"540px",
            padding:"20px"
            }}>
            <h4>Projetos em Jogos</h4>
            <Carousel>
                <CarouselItem>
                <iframe width="600" height="400" 
                src="https://www.youtube.com/embed/_QV1u2WTNoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </CarouselItem>
                <CarouselItem>
                <video style={{height:"400px",width:"600px"}} controls>
                    <source src={driver}/>
                </video>
                </CarouselItem>

                <CarouselItem>
                <video style={{height:"400px",width:"600px"}} controls>
                    <source src={park}/>
                </video>
                </CarouselItem>

                <CarouselItem>
                <video style={{height:"400px",width:"600px"}} controls>
                    <source src={queb}/>
                </video>
                </CarouselItem>

                <CarouselItem>
                <video style={{height:"400px",width:"600px"}} controls>
                    <source src={loz}/>
                </video>
                </CarouselItem>

            </Carousel>

        </div>
    )
}
