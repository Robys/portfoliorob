import {Card} from 'react-bootstrap'
import mylittle from '../imgs/mylittle.jpg'
import pepperoni from '../imgs/pepperoni.jpg'
import tagg from '../imgs/Tagg.jpg'
import vag from '../imgs/vag.jpg'

export default function ProjectsList (){

    return (
        <div style={{width:"100%", marginTop:"80px", marginLeft:"60px"}}>
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
                        <button href="https://mylittlestore.vercel.app/" className="card-btn">ver site</button>
                    </Card.Body>

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
                        <button href="https://pepperoni.vercel.app/" className="card-btn">ver site</button>
                    </Card.Body>

                </Card>

                <Card className="card">
                <Card.Img src={tagg} alt="Tagg"/>
                    <Card.Body>
                        <Card.Title>Tagg</Card.Title>
                        <Card.Subtitle> React + Bootstrap + MongoDB </Card.Subtitle>
                        <Card.Text>
                           Meu trabalho de conclusão de curso para curso de
                           pós graduação da PUC-Minas.
                           Um App de troca/venda de games usádos.

                        </Card.Text>
                        <button href="https://troque-agora-games.herokuapp.com/" className="card-btn">ver site</button>
                    </Card.Body>

                </Card>

                <Card className="card">
                <Card.Img src={vag} alt="Vagner Imóveis"/>
                    <Card.Body>
                        <Card.Title>Vagner Imóveis</Card.Title>
                        <Card.Subtitle> React + Material Design + MongoDB </Card.Subtitle>
                        <Card.Text>
                           Site desenvolvido para imoboliária

                        </Card.Text>
                        <button href="https://www.vagner-imobiliaria.com.br/" className="card-btn">ver site</button>
                    </Card.Body>

                </Card>


            </div>
    )
}
