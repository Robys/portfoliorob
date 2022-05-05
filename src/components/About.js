import {Card,Image} from 'react-bootstrap'
import rob from '../imgs/rob.jpg'
export default function About(){

    return (
        <div style={{textAlign:"center"}}>
            <h4>Sobre mim</h4>
            <div className='about-card'>
                <Image src={rob} roundedCircle  style={{width:"180px",height:"180px"}}/>

                    <div className='about-text'>
                    <h6>Minha História</h6>
                    <p style={{textAlign:"justify"}}>
                        Sou formado em Engenharia de computação dês de 2017,
                        em março de 2022 finalizei minha especialização em Desenvolvimento Web FullStack 
                        pela PUC-Minas (Pontifícia Universidade Católica de Minas Gerais).

                        Anteriormente cursei o curso de Eletricista de manutenção eletro-eletônica
                        no SENAI Almirante Tamandaré, porém optei por outra carreira.

                        Estudei na escola SAGA (School of Art,Games and Animation) entre 2013 e 2015. 
                    </p>

                    </div>

                </div>

                <div className='about-card'>

                    <div className='about-text'>
                    <h6>Conhecimentos</h6>
                    <p style={{textAlign:"justify"}}>
                    Conheço diversas ferramentas para desenvolvimento de sites e afins, 
                    porém existem as que compõem minha stack:
                    </p>

                    <ul>
                        <li>Sites somente com HTML/CSS</li>
                        <li>Criação de wireframes</li>
                        <li>Criação de interfaces com Figma ou Adobe XD</li>
                        <li>Armazenamento utilizando Mongo DB</li>
                        <li>API's REST ou GraphQL</li>
                        <li>Front End utilizando React JS</li>
                        <li>Front End Next JS em breve*</li>
                        <li>Estilização com Styled Components</li>
                        <li>Estilização com Bootstrap ou Material UI</li>
                        <li>Deploy utilizando Heroku ou Vercel</li>
                    </ul>

                    </div>
                    
            </div>

            <div className='about-card'>

                    <div className='about-text'>
                    <h6>Mais Conhecimentos</h6>
                    <p style={{textAlign:"justify"}}>
                    Também tenho interesse em outra áreas, profissionalmente e 
                    por hobby. 
                    </p>

                    <ul>
                        <li>Criação de jogos usando Unity Engine</li>
                        <li>Modelagem 3D básica com Maya ou Blender</li>
                        <li>Criação básica de músicas usando FL Studio </li>
                        <li>Edição de vídeos com After Effects ou Premiere</li>
                        <li>Manutenção de computadores</li>
                    </ul>

                    </div>
                    
            </div>

        </div>
    )
}
