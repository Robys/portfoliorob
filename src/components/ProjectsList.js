import {Card} from 'react-bootstrap'
import mylittle from '../imgs/mylittle.jpg'
import pepperoni from '../imgs/pepperoni.jpg'
import tagg from '../imgs/Tagg.jpg'
import vag from '../imgs/vag.jpg'
import OtherProjects from './OtherProjects'

export default function ProjectsList (){

    return (
        <div style={{width:"100%", marginTop:"40px", marginLeft:"60px", height:"560px"}}>
                <Card className="card">
                    <Card.Img src={mylittle} alt="My Little Store"/>
                    <Card.Body>
                        <Card.Title>My Little Store</Card.Title>
                        <Card.Subtitle>React + JSON Server</Card.Subtitle>
                        <Card.Text>
                            Uma página que simula uma loja de produtos
                            antigos. Nela é possível criar uma conta,
                            procurar, comentar e adicionar produtos ao carrinho
                            de compras 

                        </Card.Text>
                    </Card.Body>
                    <a href="https://mylittlestore.vercel.app/" className="card-btn">ver site</a>

                </Card>

                <Card className="card">
                <Card.Img src={pepperoni} alt="Pepperoni"/>
                    <Card.Body>
                        <Card.Title>Pepperoni</Card.Title>
                        <Card.Subtitle>React + JSON Server</Card.Subtitle>
                        <Card.Text>
                            Esse site simula um app de receitas.
                            Nele você pode criar uma conta, adicionar receitas,
                            comentar, dar like ou dislike em receitar de outros usuários.

                        </Card.Text>
                    </Card.Body>
                        <a href="https://pepperoni.vercel.app/" className="card-btn">ver site</a>

                </Card>

                <Card className="card">
                <Card.Img src={tagg} alt="Tagg"/>
                    <Card.Body>
                        <Card.Title>Tagg</Card.Title>
                        <Card.Subtitle> GraphqlQL + Mongo DB + React + MaterialUI </Card.Subtitle>
                        <Card.Text>
                           Meu trabalho de conclusão de curso para curso de
                           pós graduação da PUC-Minas, desenvolvido unico e inteiramente por mim
                           Um. App de troca/venda de games usádos.

                        </Card.Text>
                    </Card.Body>
                        <a href="https://troque-agora-games.herokuapp.com" className="card-btn">ver site</a>

                </Card>

                <Card className="card">
                <Card.Img src={vag} alt="Vagner Imóveis"/>
                    <Card.Body>
                        <Card.Title>Vagner Imóveis</Card.Title>
                        <Card.Subtitle> React + Material UI + MongoDB </Card.Subtitle>
                        <Card.Text>
                           Site real, desenvolvido para uma imoboliária. Utlizando GraphqlQL,
                           Mongo DB e o framework React JS.

                        </Card.Text>
                    </Card.Body>
                        <a href="https://www.vagner-imobiliaria.com.br" className="card-btn">ver site</a>

                </Card>


            </div>
    )
}
