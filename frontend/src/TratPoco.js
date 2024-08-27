import axios from "axios";
import React, { useEffect, useRef } from "react";
import toast from "react-toastify";

const formPoco = ({ getUsers, onEdit, setOnEdit}) => {
    const ref = useRef();

    useEffect(() =>{
        if(onEdit) {
            const user = ref.current;

            user.data.value = onEdit.data;
            user.hora.value = onEdit.data;
            user.phP1Bruto.value = onEdit.data;
            user.phP1Trat.value = onEdit.data;
            user.cloro.value = onEdit.data;
            user.condtBruto.value = onEdit.data;
            user.condtTrat.value = onEdit.data;
            user.alcBruto.value = onEdit.data;
            user.alcTrat.value = onEdit.data;
            user.durBruto.value = onEdit.data;
            user.durTrat.value = onEdit.data;

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
        .put("http://localhost:8080/" + onEdit.id,{
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
        .post("http://localhost:8080/" , {
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
        <formPoco ref = {ref} onSubmit = {handleSubmit}>

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

            <Button type ="submit">Salvar</Button>

        </formPoco>
        


    );
}

export default formPoco;