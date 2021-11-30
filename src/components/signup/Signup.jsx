import React, {useState, useEffect} from "react";
import axios from "axios";
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Container from "../componentsForm/Container";
import ContainerPasswords from "./ContainerPasswords";
import Card from "../componentsForm/Card";
import Input from "../componentsForm/Input";
import Button from "../componentsForm/Button";
import Title from "../componentsForm/Title";

const Signup = () =>{

    const [data, setData] = useState({})

    const handleSubmit = (values, {resetForm}) =>{
        console.log(values)
        setData(values)
        resetForm(values = "")
    }

    useEffect(()=>{
        async function fetchSignup(){
            const res = axios.post(`http://localhost:3050/post`,data)
            res.then(r => console.log("RES",r.data))
        }
        fetchSignup()
    },[data])

    return(
        <Container>
            <Card>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        confirm: '',
                        name: ''
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string().required("Ingrese correo").email("Ingrese un correo valido"),
                        password: Yup.string().required("Ingrese contraseña").min(5,"Longitud minima de 5 caracteres").max(15,"Longitud maxima de 5 caracteres"),
                        confirm: Yup.string().required("Ingrese validacion").oneOf([Yup.ref('password'),null], 'Las contraseñas deben coincidir'),
                        name: Yup.string().required("Ingrese nombre")
                    })}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Title title="Crear cuenta"/>
                        <Input label="Correo electronico" type="email" name="email"/>
                        <ContainerPasswords>
                            <Input label="Contraseña" type="password" name="password"/>
                            <Input label="Confirmar" type="password" name="confirm"/>
                        </ContainerPasswords>
                        <Input label="Nombre completo" type="text" name="name"/>
                        <Button type="submit">Registrarme</Button>
                    </Form>
                </Formik>
            </Card>
        </Container>
    )
}

export default Signup