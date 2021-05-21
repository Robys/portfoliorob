import {useState} from 'react'
import axios from 'axios'
import {Form,Col,Row} from 'react-bootstrap'

const API_PATH = process.env.REACT_APP_APIPATH

export default function Contact (){

    const [name,setname] = useState()
    const [email,setemail] = useState()
    const [metter,setmetter] = useState()
    const [message,setmessage] = useState()
    const [sended,setEmailSended] = useState()
    const [error,setError] = useState()


    const formStyle = {
        form :{
            margin:"80px auto",
            height:"600px",
            width:"480px"
        },
        input:{
            marginBottom:"20px"
        }
    }

    const handleEmailSend = e =>{
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: {name,email,metter,message}
        })
            .then(result => {
                setEmailSended(result.data.sent)

            })
            .catch(error => setError(error.message));

    }

    return (
        <div>
            <Form onSubmit={e => handleEmailSend} style={formStyle.form}>
                <Row style={formStyle.input}>
                    <Col>
                    <Form.Label>Nome</Form.Label>
                 <Form.Control id="firstname" name="firstname" onChange={e => setname(e.target.value)}/>
                    </Col>
                    <Col>
                    <Form.Label>Email</Form.Label>
                <Form.Control id="email" name="email" style={formStyle.input} onChange={e => setemail(e.target.value)}/>
                    </Col>

                </Row>

                <Form.Label>Assunto</Form.Label>
                <Form.Control id="metter" name="metter" style={formStyle.input} onChange={e => setmetter(e.target.value)}/>

                <Form.Label>Mensagem</Form.Label>
                <Form.Control type="textarea" id="message" name="message" style={formStyle.input} onChange={e => setmessage(e.target.value)}/>

                <button type="submit" className="card-btn">Enviar</button>

            </Form>
            
            {sended ? <div>
                <p style={{color:"green"}}>Email foi enviado</p>
            </div> : ""}

            {error ? <div>
                <p style={{color:"red"}}>{error}</p>
            </div> : ""}
            
            
        </div>
    )
}