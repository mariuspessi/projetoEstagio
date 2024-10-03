import axios from "axios";
import { toast } from "react-toastify";
import React, { useRef, useEffect } from  "react";
import styled from "styled-components";


const FormContainer = styled.form`
  display: flex;
  align-item: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
 padding: 10px;
 cursor: pointer;
 border-radius: 5px;
 border: none;
 background-color: #2c73d2;
 color: white;
 height: 42px;
`;

const Input = styled.input`
width: 120px;
padding: 0 10px;
border: 1px solid #bbb;
border-radius: 5px;
height: 40px;
`;

const Label = styled.label``;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;


const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();
      
    useEffect(() => {
        if (onEdit) {
            const user = ref.current;

            user.data.value = onEdit.data;
            user.hora.value = onEdit.hora;
            user.phRio.value = onEdit.phRio;
            user.phFiltro.value = onEdit.phFiltro;
            user.phTratada.value = onEdit.phTratada;
            user.phReservatorio.value = onEdit.phReservatorio;
            user.condtBruta.value = onEdit.condtBruta;
            user.condtTrat.value = onEdit.condtTrat;
            user.cloroTrat.value = onEdit.cloroTrat;
            user.cloroReserv.value = onEdit.cloroReserv;
            user.alcRio.value = onEdit.alcRio;
            user.alcTrat.value = onEdit.alcTrat;
            user.durRio.value = onEdit.durRio;
            user.durTrat.value = onEdit.durTrat;

        }
    }, [onEdit]);

       const handleSubmit = async (e) => {
        e.preventDefault();

       const user = ref.current;
       
       if (
          !user.data.value           ||
          !user.hora.value           ||
          !user.phRio.value          ||
          !user.phFiltro.value       ||
          !user.phTratada.value      ||
          !user.phReservatorio.value ||
          !user.condtBruta.value     ||
          !user.condtTrat.value      ||
          !user.alcRio.value         ||
          !user.alcTrat.value        ||
          !user.durRio.value         ||
          !user.durTrat.value        
       )  {
        return toast.warn("Preencha todos os campos!");
       }
       if (onEdit) {
         await axios
           .put("http://localhost:8800/" + onEdit.id,{
            data:                user.data.value,
            hora:                user.hora.value,
            phRio:               user.phRio.value,
            phFiltro:            user.phFiltro.value,
            phTratada:           user.phTratada.value,
            phReservatorio:      user.phReservatorio.value,
            condtBruta:          user.condtBruta.value,
            condtTrat:           user.condtTrat.value,
            cloroTrat:           user.cloroTrat.value,
            cloroReserv:         user.cloroReserv.value,
            alcRio:              user.alcRio.value,
            alcTrat:             user.alcTrat.value,
            durRio:              user.durRio.value,
            durTrat:             user.durTrat.value,
           })
        .then(({ data}) => toast.success(data))
        .catch(({ data}) => toast.error(data));
        }  else {
          await axios
            .post("http://localhost:8800/", {
                data:                user.data.value,
                hora:                user.hora.value,
                phRio:               user.phRio.value,
                phFiltro:            user.phFiltro.value,
                phTratada:           user.phTratada.value,
                phReservatorio:      user.phReservatorio.value,
                condtBruta:          user.condtBruta.value,
                condtTrat:           user.condtTrat.value,
                cloroTrat:           user.cloroTrat.value,
                cloroReserv:         user.cloroReserv.value,
                alcRio:              user.alcRio.value,
                alcTrat:             user.alcTrat.value,
                durRio:              user.durRio.value,
                durTrat:             user.durTrat.value,
            })
        .then(({ data}) => toast.success(data))
        .catch(({ data}) => toast.error(data));
       }

          user.data.value = "";           
          user.hora.value = "";          
          user.phRio.value = "";          
          user.phFiltro.value = "";       
          user.phTratada.value = "";      
          user.phReservatorio.value = ""; 
          user.condtBruta.value = "";     
          user.condtTrat.value = "";      
          user.alcRio.value = "";         
          user.alcTrat.value = "";        
          user.durRio.value = "";        
          user.durTrat.value = "";
          
          setOnEdit(null);
          getUsers();
    };
       
    return (

      <formContainer ref= {ref} onSubmit = {handleSubmit}>

        <InputArea>
        <Label>Data</Label>
        <Input name = "data" type = "date" />
        </InputArea>

        <InputArea>
        <Label>Hora</Label>
        <Input name = "hora" type = "time" />
        </InputArea>

        <InputArea>
        <Label>pH Água Bruta </Label>
        <Input name = "phRio" />
        </InputArea>

        <InputArea>
        <Label>ph Filtro </Label>
        <Input name = "phFiltro" />
        </InputArea>

        <InputArea>
        <Label>ph Água Tratada </Label>
        <Input name = "phTratada" />
        </InputArea>

        <InputArea>
        <Label>ph Água Reservatório </Label>
        <Input name = "phReservatorio" />
        </InputArea>

        <InputArea>
        <Label> Condutividade Água Bruta </Label>
        <Input name = "condtBruta" />
        </InputArea>

        <InputArea>
        <Label> Condutividade Água Tratada </Label>
        <Input name = "condtTrat" />
        </InputArea>

        <InputArea>
        <Label> Cloro Tanque Água Tratada </Label>
        <Input name = "cloroTrat" />
        </InputArea>

        <InputArea>
        <Label> Cloro Água do Reservatório </Label>
        <Input name = "cloroReserv" />
        </InputArea>

        <InputArea>
        <Label>Alcalinidade Água Bruta</Label>
        <Input name = "alcRio" />
        </InputArea>

        <InputArea>
        <Label>Alcalinidade Água Tratada</Label>
        <Input name = "alcTrat" />
        </InputArea>

        <InputArea>
        <Label> Dureza Água Bruta </Label>
        <Input name = "durRio" />
        </InputArea>

        <InputArea>
        <Label> Dureza Água Tratada </Label>
        <Input name = "durTrat" />
        </InputArea>

        <Button type = "submit">Salvar</Button>
           

</formContainer>
        
        
    );
};

export default Form ;                