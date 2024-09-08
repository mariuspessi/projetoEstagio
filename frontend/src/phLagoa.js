import axios from "axios";
import toast from "react-toastify";
import React, { useRef, useEffect } from "react";

const formLagoa = ({ getUsers, onEdit, setOnEdit}) => {

    const ref = useRef();

    useEffect(() => {
        const user = ref.current;
          if (onEdit) {

            user.data.value = onEdit.data;
            user.hora.value = onEdit.data;
            user.phPonto1L1.value = onEdit.data;
            user.phPonto1L2.value = onEdit.data;
            user.phPonto1L3.value = onEdit.data;
            user.phPonto1L4.value = onEdit.data;
            user.phPonto2L1.value = onEdit.data;
            user.phPonto2L2.value = onEdit.data;
            user.phPonto2L3.value = onEdit.data;
            user.phPonto2L4.value = onEdit.data;

          }
        }, [onEdit] );

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
          .put("http://localhost:8080/" + onEdit.id,{
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
          .then(({ data}) => toast.sucess (data))
          .catch(({ data }) => toast.error (data));
        } else {
          await axios
          .post("http://localhost:8080/" , {
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

      user.data.value = '';
      user.hora.value = '';
      user.phPonto1L1.value = '';
      user.phPonto1L2.value = '';
      user.phPonto1L3.value = '';
      user.phPonto1L4.value = '';
      user.phPonto2L1.value = '';
      user.phPonto2L2.value = '';
      user.phPonto2L3.value = '';
      user.phPonto2L4.value = '';


      setOnEdit(null);
      getUsers();

    }
    return(
      <formLagoa ref = {ref} onSubmit = {handleSubmit}>

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
        <Input name = "phPonto1L1" />
        </InputArea>

        <InputArea>
        <Label>Ph Ponto 1</Label>
        <Input name = "phPonto1L2" />
        </InputArea>

        <InputArea>
        <Label>Ph Ponto 1</Label>
        <Input name = "phPonto2L2" />
        </InputArea>

        <InputArea>
        <Label>Ph Ponto 1</Label>
        <Input name = "phPonto3L2" />
        </InputArea>

        <InputArea>
        <Label>Ph Ponto 1</Label>
        <Input name = "phPonto4L2" />
        </InputArea>


      </formLagoa>

    );

}

export default formLagoa;




 