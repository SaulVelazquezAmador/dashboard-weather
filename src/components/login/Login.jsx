import { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Input from '../componentsForm/Input'
import Container from '../componentsForm/Container'
import Card from '../componentsForm/Card'
import Title from '../componentsForm/Title'
import Button from '../componentsForm/Button'
import ContainerLink from './ContainerLink'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'


const Login = () =>{
    
    const state = useSelector(s => s)
    const dispatch = useDispatch()
    const [data, setData] = useState({})
    const [status, setStatus] = useState(0)

    const handleSubmit = (values, {resetForm}) =>{
        setData(values)
        resetForm(values = "")
    }

    useEffect(()=>{
        async function fetchUser(){
            const res = Axios.post(`http://localhost:3050/login`,data)
            res.then(r => {
                dispatch({ type:'LOGIN', payload: {name: r.data.name, KEY: r.data.token} })
                setStatus(r.data.status)
            })
        }
        fetchUser()
    },[data, dispatch])

    if (status === 200) {
        localStorage.setItem("logged", state.KEY)
        const name = state.name.split(" ")
        return <Redirect to={`/home/${name[0]+name[1]}`}/>
    }

    return(
        <Container>
            <Card>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string().required("Ingrese correo").email("Ingrese un correo valido"),
                        password: Yup.string().required("Ingrese contraseña")
                    })}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Title title="Bienvenido"/>
                        <Input label="Ingrese su correo" tipe="email" name="email"/>
                        <Input label="Ingrese su contraseña" type="password" name="password"/>
                        <Button type="submit">Iniciar Sesion</Button>
                    </Form>
                </Formik>
                <ContainerLink>
                    <h3>¿No tienes cuenta?</h3>
                    <Link to="/signup"> 
                        <span>Registrarme</span>
                    </Link>
                </ContainerLink>
            </Card>
        </Container>
    )
}
export default Login