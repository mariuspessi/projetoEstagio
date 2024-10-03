import axios from "axios";
import{ toast } from 'react-toastify';
import React, { useRef, useEffect } from "react";
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

  

const FORm = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
      if (onEdit) {            
        const user = ref.current;

         user.data.value = onEdit.data;
         user.hora.value = onEdit.hora;
         user.phPonto1L1.value = onEdit.phPonto1L1;
         user.phPonto1L2.value = onEdit.phPonto2L1;
         user.phPonto1L3.value = onEdit.phPonto3L1;
         user.phPonto1L4.value = onEdit.phPonto4L1;
         user.phPonto2L1.value = onEdit.phPonto1L2;
         user.phPonto2L2.value = onEdit.phPonto2L2;
         user.phPonto2L3.value = onEdit.phPonto3L2;
         user.phPonto2L4.value = onEdit.phPonto4L2;
        }
       }, [onEdit]);

        const handleSubmit = async (e) => {
            e.preventDefault();

        const user = ref.current;

        if (
          !user.data.value         ||
          !user.hora.value         ||
          !user.phPonto1L1.value   ||
          !user.phPonto1L2.value   ||
          !user.phPonto1L3.value   ||
          !user.phPonto1L4.value   ||
          !user.phPonto2L1.value   ||
          !user.phPonto2L2.value   ||
          !user.phPonto2L3.value   ||
          !user.phPonto2L4.value
        ) {
          return toast.warn("Preencha todos os campos!");
        }

        if (onEdit) {
          await axios
          .put("http://localhost:8080/lagoa" + onEdit.id,{
            data:  user.data.value,
            hora:  user.hora.value,
            phPonto1L1: user.phPonto1L1.value,
            phPonto1L2: user.phPonto1L2.value,
            phPonto1L3: user.phPonto1L3.value,
            phPonto1L4: user.phPonto1L4.value,
            phPonto2L1: user.phPonto2L1.value,
            phPonto2L2: user.phPonto2L2.value,
            phPonto2L3: user.phPonto2L3.value,
            phPonto2L4: user.phPonto2L4.value,
          })
          .then(({ data }) => toast.success (data))
          .catch(({ data }) => toast.error (data))
        } else {
          await axios
          .post("http://localhost:8080/lagoa", {
            data:  user.data.value,
            hora:  user.hora.value,
            phPonto1L1: user.phPonto1L1.value,
            phPonto1L2: user.phPonto1L2.value,
            phPonto1L3: user.phPonto1L3.value,
            phPonto1L4: user.phPonto1L4.value,
            phPonto2L1: user.phPonto2L1.value,
            phPonto2L2: user.phPonto2L2.value,
            phPonto2L3: user.phPonto2L3.value,
            phPonto2L4: user.phPonto2L4.value, 
          })
          .then(({ data }) => toast.success(data))
          .catch(({ data }) => toast.error(data));
        }

            user.data.value = "";
            user.hora.value = "";
            user.phPonto1L1.value = "";
            user.phPonto1L2.value = "";
            user.phPonto1L3.value = "";
            user.phPonto1L4.value = "";
            user.phPonto2L1.value = "";
            user.phPonto2L2.value = "";
            user.phPonto2L3.value = "";
            user.phPonto2L4.value = "";


      setOnEdit(null);
      getUsers();

    };
    
      return(      

        <FormContainer ref = {ref} onSubmit={handleSubmit }>

          <InputArea>
          <Label>Data</Label>
          <Input name = "data" type = "date" />
          </InputArea>

          <InputArea>
          <Label>Hora</Label>
          <Input name = "hora" type = "time" />
          </InputArea>

          <InputArea>
          <Label>Ph Ponto 1</Label>
          <Input name = "phPonto1L1" />
          </InputArea>

          <InputArea>
          <Label>Ph Ponto 2</Label>
          <Input name = "phPonto2L1" />
          </InputArea>

          <InputArea>
          <Label>Ph Ponto 3</Label>
          <Input name = "phPonto3L1" />
          </InputArea>

          <InputArea>
          <Label>Ph Ponto 4</Label>
          <Input name = "phPonto4L1" />
          </InputArea>

          <InputArea>
          <Label>Ph Ponto 1</Label>
          <Input name = "phPonto1L2" />
          </InputArea>

          <InputArea>
          <Label>Ph Ponto 2</Label>
          <Input name = "phPonto2L2" />
          </InputArea>

          <InputArea>
          <Label>Ph Ponto 3</Label>
          <Input name = "phPonto3L2" />
          </InputArea>

          <InputArea>
          <Label>Ph Ponto 4</Label>
          <Input name = "phPonto4L2" />
          </InputArea>


          <Button type = "submit" >Salvar</Button>  


        </FormContainer>

    );

};



export default FORm;




 