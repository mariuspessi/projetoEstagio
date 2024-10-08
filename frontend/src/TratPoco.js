import axios from "axios";
import React, { useEffect, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  align-item: flex-end;
  gap: 20px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 40px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  background-color: #2596be;
`;

const Button = styled.button`
 padding: 0px 100px;
 cursor: pointer;
 border-radius: 5px;
 border: none;
 background-color: #dbe1dd;
 color: black;
 height: 52px;
 margin-left: 35%;
`;

const Input = styled.input`
width: 200px;
padding: 0 200px;
border: 1px solid #bbb;
border-radius: 5px;
height: 40px;
margin-left : 18%;
margin-top: 0.1%;
margin-botton: 5%;
background-color: #dbe1dd;
`;

const Label = styled.label`
margin-left: 18%;
margin-botton: 20%;
color:  #dbe1dd;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const H2 = styled.h2`
width: 600px;
margin-left: 40%;
`;



const FORM = ({ getUsers, onEdit, setOnEdit}) =>  {
    const ref = useRef();

    useEffect(() =>{
        if(onEdit) {
            const user = ref.current;

            user.data.value = onEdit.data;
            user.hora.value = onEdit.data;
            user.phP1Bruto.value = onEdit.phP1Bruto;
            user.phP1Trat.value = onEdit.phP1Trat;
            user.cloro.value = onEdit.cloro;
            user.condtBruto.value = onEdit.condtBruto;
            user.condtTrat.value = onEdit.condtTrat;
            user.alcBruto.value = onEdit.alcBruto;
            user.alcTrat.value = onEdit.alcTrat;
            user.durBruto.value = onEdit.durBruto;
            user.durTrat.value = onEdit.durTrat;

        }
    }, [onEdit]);
      
    const handleSubmit = async (e) => {
        e.preventDefault();

    const user = ref.current;

    if (
        !user.data.value   ||
        !user.hora.value   ||
        !user.phP1Bruto.value  ||
        !user.phP1Trat.value  ||
        !user.cloro.value  ||
        !user.condtBruto.value ||
        !user.condtTrat.value ||
        !user.alcBruto.value  ||
        !user.alcTrat.value ||
        !user.durBruto.value  ||
        !user.durTrat.value  
        
    ) {
        return toast.warn("Preencham todos os campos!");
    } 
    if (onEdit) {
        await axios
        .put("http://localhost:8080/Poco" + onEdit.id,{
            data:  user.data.value,
            hora:  user.hora.value,
            phP1Bruto: user.phP1Bruto.value,
            phP1Trat: user.phP1Trat.value,
            cloro: user.cloro.value,
            alcBruto: user.alcBruto.value,
            alcTrat: user.alcTrat.value,
            durBruto: user.durBruto.value,
            durTrat: user.durTrat.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
        await axios
        .post("http://localhost:8080/Poco" , {
            data:  user.data.value,
            hora:  user.hora.value,
            phP1Bruto: user.phP1Bruto.value,
            phP1Trat: user.phP1Trat.value,
            condtBruto: user.condtBruto.value,
            condtTrat: user.condtTrat.value,
            cloro: user.cloro.value,
            alcBruto: user.alcBruto.value,
            alcTrat: user.alcTrat.value,
            durBruto: user.durBruto.value,
            durTrat: user.durTrat.value,
        })
        .then(({ data}) => toast.success(data))
        .catch(({ data}) => toast.error(data));
    }

    user.data.value = '';
    user.hora.value = '';
    user.phP1Bruto.value = '';
    user.phP1Trat.value = '';
    user.cloro.value = '';
    user.condtBruto.value = '';
    user.condtTrat.value = '';
    user.alcBruto.value = '';
    user.alcTrat.value = '';
    user.durBruto.value = '';
    user.durTrat.value = '';


    setOnEdit(null);
    getUsers();

  };

    return(

        <FormContainer ref = {ref} onSubmit = {handleSubmit}>

            <InputArea>
            <Label>Data</Label>
            <Input name = "data" type = "date"/>
            </InputArea>

            <InputArea>
            <Label>Hora</Label>
            <Input name = "hora" type = "time"/>
            </InputArea>

            <InputArea>
            <Label>Ph Água Poço Bruta</Label>
            <Input name = "phP1Bruto" />
            </InputArea>

            <InputArea>
            <Label>Ph Água Poço tratada</Label>
            <Input name = "phP1Trat" />
            </InputArea>

            <InputArea>
            <Label>Cloro</Label>
            <Input name = "cloro" />
            </InputArea>

            <InputArea>
            <Label>Condutividade Água Bruta</Label>
            <Input name = "condtBruto" />
            </InputArea>

            <InputArea>
            <Label>Condutividade Água Tratada</Label>
            <Input name = "condtTrat" />
            </InputArea>

            <InputArea>
            <Label>Alcalinidade Água Bruta</Label>
            <Input name = "alcBruto" />
            </InputArea>

            <InputArea>
            <Label>Alcalinidade Água Tratada</Label>
            <Input name = "alcTrat" />
            </InputArea>

            <InputArea>
            <Label>Dureza Água Bruta</Label>
            <Input name = "durBruto" />
            </InputArea>

            <InputArea>
            <Label>Dureza Água Tratada</Label>
            <Input name = "durTrat" />
            </InputArea>

            <InputArea>
            <Label>Analista</Label>
            <Input name = "analist" />
            </InputArea>

            <Button type ="submit">Salvar</Button>

        </FormContainer>
        


    );
};

export default FORM;