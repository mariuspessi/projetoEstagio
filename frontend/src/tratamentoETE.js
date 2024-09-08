import axios from "axios";
import { toast } from "react-toastify";
import React, { useRef, useEffect } from "react";

const formEte = ({ getUsers, setOnEdit, onEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const user = ref.current;

            user.data.value = onEdit.data;
            user.eficiencia.value = onEdit.eficiencia;
            user.dqoD1.value = onEdit.dqoD1;
            user.phD1.value = onEdit.phD1;
            user.tempD1.value = onEdit.tempD1;
            user.solidosD1.value = onEdit.solidosD1;
            user.vazao.value = onEdit.vazao;
            user.CargaOrgD1.value = onEdit.CargaOrgD1;
        }

    }, [onEdit]);

            const handleSubmit = async (e) => {
            e.preventDefault();

            const user = ref.current;

        if (
            !user.data.value       ||
            !user.eficiencia.value ||
            !user.dqoD1.value      ||
            !user.phD1.value       ||
            !user.tempD1.value     ||
            !user.solidosD1.value  ||
            !user.vazao.value      ||
            !user.CargaOrgD1.value 
        ) {
            return toast.warn("Preencha todos os campos!");
          }
         if (onEdit) {
            await axios
            .put("http://localhost:8080/" + onEdit.id,{
                data:           user.data.value,
                eficiencia:     user.eficiencia.value,
                dqoD1:          user.dqoD1.value,
                phD1:           user.phD1.value,
                tempD1:         user.tempD1.value,
                solidosD1:      user.solidosD1.value,
                vazao:          user.vazao.value,
                CargaOrgD1:     user.CargaOrgD1.value,
            })
            .then(({ data}) => toast.success(data))
            .catch(({ data}) => toast.error(data));
            } else {
                await axios
            .post("http://localhost:8080/" , {
                data:            user.data.value,
                eficiencia:      user.eficiencia.value,
                dqoD1:           user.dqoD1.value,
                phD1:            user.phD1.value,
                tempD1:          user.tempD1.value,
                solidosD1:       user.solidosD1.value,
                vazao:           user.vazao.value,
                CargaOrgD1:      user.CargaOrgD1.value,

                })
            .then(({ data}) => toast.success(data))
            .catch(({ data}) => toast.error(data));
            }

                user.data.value = "";
                user.eficiencia.value = "";
                user.dqoD1.value = "";
                user.phD1.value = "";
                user.tempD1.value = "";
                user.solidosD1.value = "";
                user.vazao.value = "";
                user.CargaOrgD1.value = "";

                setOnEdit(null);
                getUsers();
        };

    return(
        <formEte ref = {ref} onSubmit = {handleSubmit}>

            <H1>Decantador Primário</H1>

            <InputArea>
            <Label>Data</Label>
            <Input name = "data" type = "date"/>
            </InputArea>

            <InputArea>
            <Label>Eficiência</Label>
            <Input name = "eficiencia"/>
            </InputArea>

            <InputArea>
            <Label>DQO Decantador Primário</Label>
            <Input name = "dqoD1"/>
            </InputArea>

            <InputArea>
            <Label>pH Decantador Primário</Label>
            <Input name = "phD1"/>
            </InputArea>

            <InputArea>
            <Label>Temperatura Decantador Primário</Label>
            <Input name = "tempD1"/>
            </InputArea>

            <InputArea>
            <Label>Sólidos Decantador Primário</Label>
            <Input name = "solidosD1"/>
            </InputArea>

            <H2>Saída do Flotador</H2>
        
            <InputArea>
            <Label> DQO Saída FlotoDecantador</Label>
            <Input name = "dqoSFlot"/>
            </InputArea>

            <InputArea>
            <Label>pH</Label>
            <Input name = "phSFlot"/>
            </InputArea>

            <InputArea>
            <Label>Temperatura</Label>
            <Input name = "tempSFlot"/>
            </InputArea>

            <InputArea>
            <Label>Sólidos</Label>
            <Input name = "solidosSFlot"/>
            </InputArea>

            <InputArea>
            <Label>Sólidos Suspensos</Label>
            <Input name = "ssSFlot"/>
            </InputArea>

            <H2>Ponto de Despejo do Efleunte</H2>
            <InputArea>
            <Label>DQO</Label>
            <Input name = "dqoRio"/>
            </InputArea>

            <InputArea>
            <Label>pH</Label>
            <Input name = "phRio"/>
            </InputArea>

            <InputArea>
            <Label>Temperatura</Label>
            <Input name = "tempRio"/>
            </InputArea>

            <InputArea>
            <Label>Oxigênio Dissolvido</Label>
            <Input name = "OxRio"/>
            </InputArea>

            <InputArea>
            <Label>Sólidos</Label>
            <Input name = "solidosRio"/>
            </InputArea>

            <H2>Retorno do Lodo Secundário</H2>
            <InputArea>
            <Label>pH</Label>
            <Input name = "phSec"/>
            </InputArea>

            <InputArea>
            <Label>Sólidos</Label>
            <Input name = "solidosSec"/>
            </InputArea>

            <InputArea>
            <Label>Vazão</Label>
            <Input name = "vazaoSec"/>
            </InputArea>

            <H2>Retorno do Lodo Terciário</H2>

            <InputArea>
            <Label>pH</Label>
            <Input name = "phTerc"/>
            </InputArea>

            <InputArea>
            <Label>Sólidos</Label>
            <Input name = "solidosTerc"/>
            </InputArea>

            <InputArea>
            <Label>Vazão</Label>
            <Input name = "vazaoTerc"/>
            </InputArea>
            

                   
            
            

        </formEte>
    );
}

export default formEte;