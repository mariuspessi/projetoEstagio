import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import global from './styles/global';


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


const FoRM = ({ getUsers, setOnEdit, onEdit }) => {
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
            user.dqoSFlot.value = onEdit.dqoSFlot;
            user.phSFloat.value = onEdit.phSFloat;
            user.tempSFloat.value = onEdit.tempSFloat;
            user.solidosSFloat.value = onEdit.solidosSFloat;
            user.ssSFloat.value = onEdit.ssSFloat;
            user.dqoRio.value = onEdit.dqoRio;
            user.phRio.value = onEdit.phRio;
            user.tempRio.value = onEdit.tempRio;
            user.oxRio.value = onEdit.oxRio;
            user.solidosRio.value = onEdit.solidosRio;
            user.phSec.value = onEdit.phSec;
            user.solidosSec.value = onEdit.solidosSec;
            user.vazaoSec.value = onEdit.vazaoSec;
            user.phTerc.value = onEdit.phTerc;
            user.solidosTerc.value = onEdit.solidosTerc;
            user.vazaoTerc.value = onEdit.vazaoTerc;
            user.dqoDecSec.value = onEdit.dqoDecSec;
            user.phDecSec.value = onEdit.phDecSec;
            user.tempDecSec.value = onEdit.tempDecSec;
            user.solidoDecSec.value = onEdit.solidoDecSec;
            user.oxDisDecSec.value = onEdit.oxDisDecSec;
            user.vazaoDecSec.value = onEdit.vazaoDecSec;
            user.dqoDecTerc.value = onEdit.dqoDecTerc;
            user.phDecTerc.value = onEdit.phDecTerc;
            user.tempDecTerc.value = onEdit.tempDecTerc;
            user.solidoDecTerc.value = onEdit.solidoDecTerc;
            user.oxDisDecTerc.value = onEdit.oxDisDecTerc;
            user.vazaoDecTerc.value = onEdit.vazaoDecTerc;
            user.eficBio.value = onEdit.eficBio;
            user.eficProc.value = onEdit.eficProc;
            user.dqoMont.value = onEdit.dqoMont;
            user.phMont.value = onEdit.phMont;
            user.tempMont.value = onEdit.tempMont;
            user.oxMont.value = onEdit.oxMont;
            user.solidoMont.value = onEdit.solidoMont;
            user.dqoJust.value = onEdit.dqoJust;
            user.phJust.value = onEdit.phJust;
            user.tempJust.value =onEdit.tempJust;
            user.oxJust.value = onEdit.oxJust;
            user.solidoJust.value = onEdit.solidoJust;
            user.dqoL1.value = onEdit.dqoL1;
            user.phL1.value = onEdit.phL1;
            user.tempL1.value = onEdit.tempL1;
            user.oxL1.value = onEdit.oxL1;
            user.solidoL1.value = onEdit.solidoL1;
            user.ssL1.value = onEdit.ssL1;
            user.nitroL1.value = onEdit.nitroL1;
            user.fosfL1.value = onEdit.fosfL1;
            user.relFML1.value = onEdit.relFML1;
            user.ivlL1.value = onEdit.ivlL1;
            user.prodLodoL1.value = onEdit.prodLodoL1;
            user.retHidroL1.value = onEdit.retHidroL1;
            user.dqoL2.value = onEdit.dqoL2;
            user.phL2.value = onEdit.phL2;
            user.oxL2.value = onEdit.oxL2;
            user.solidoL2.value = onEdit.solidoL2;
            user.ssL2.value = onEdit.ssL2;
            user.nitroL2.value = onEdit.nitroL2;
            user.fosfL2.value = onEdit.fosfL2;
            user.relFML2.value = onEdit.relFML2;
            user.ilvL2.value = onEdit.ilvL2;
            user.prodLodoL2.value = onEdit.prodLodoL2;
            user.retHidroL2.value = onEdit.retHidroL2;
            user.analist.value = onEdit.analist;

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
            !user.CargaOrgD1.value ||
            !user.dqoSFlot.value    ||
            !user.phSFloat.value ||
            !user.tempSFloat.value ||
            !user.solidosSFloat.value ||
            !user.ssSFloat.value ||
            !user.dqoRio.value ||
            !user.phRio.value ||
            !user.tempRio.value ||
            !user.oxRio.value ||
            !user.solidosRio.value ||
            !user.phSec.value ||
            !user.solidosSec.value ||
            !user.vazaoSec.value ||
            !user.phTerc.value ||
            !user.solidosTerc.value ||
            !user.vazaoTerc.value ||
            !user.dqoDecSec.value ||
            !user.phDecSec.value ||
            !user.tempDecSec.value ||
            !user.solidoDecSec.value ||
            !user.oxDisDecSec.value ||
            !user.vazaoDecSec.value ||
            !user.dqoDecTerc.value ||
            !user.phDecTerc.value ||
            !user.tempDecTerc.value ||
            !user.solidoDecTerc.value ||
            !user.oxDisDecTerc.value ||
            !user.vazaoDecTerc.value ||
            !user.eficBio.value ||
            !user.eficProc.value ||
            !user.dqoMont.value ||
            !user.phMont.value ||
            !user.tempMont.value ||
            !user.oxMont.value ||
            !user.solidoMont.value ||
            !user.dqoJust.value ||
            !user.phJust.value ||
            !user.tempJust.value ||
            !user.oxJust.value ||
            !user.solidoJust.value ||
            !user.dqoL1.value ||
            !user.phL1.value ||
            !user.tempL1.value ||
            !user.oxL1.value ||
            !user.solidoL1.value ||
            !user.ssL1.value ||
            !user.nitroL1.value ||
            !user.fosfL1.value ||
            !user.relFML1.value ||
            !user.ivlL1.value ||
            !user.prodLodoL1.value ||
            !user.retHidroL1.value ||
            !user.dqoL2.value ||
            !user.phL2.value ||
            !user.oxL2.value ||
            !user.solidoL2.value ||
            !user.ssL2.value ||
            !user.nitroL2.value ||
            !user.fosfL2.value ||
            !user.relFML2.value ||
            !user.ilvL2.value ||
            !user.prodLodoL2.value ||
            !user.retHidroL2.value ||
            !user.analist.value 
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
                dqoSFlot:       user.dqoSFlot.value ,
                phSFloat:       user.phSFloat.value ,
                tempSFloat:     user.tempSFloat.value ,
                solidosSFloat:  user.solidosSFloat.value ,
                ssSFloat:       user.ssSFloat.value ,
                dqoRio:         user.dqoRio.value ,
                phRio:          user.phRio.value ,
                tempRio:        user.tempRio.value ,
                oxRio:          user.oxRio.value ,
                solidosRio:     user.solidosRio.value ,
                phSec:          user.phSec.value ,
                solidosSec:     user.solidosSec.value ,
                vazaoSec:       user.vazaoSec.value ,
                phTerc:         user.phTerc.value ,
                solidosTerc:    user.solidosTerc.value ,
                vazaoTerc:      user.vazaoTerc.value ,
                dqoDecSec:      user.dqoDecSec.value ,
                phDecSec:       user.phDecSec.value ,
                tempDecSec:     user.tempDecSec.value ,
                solidoDecSec:   user.solidoDecSec.value ,
                oxDisDecSec:    user.oxDisDecSec.value ,
                vazaoDecSec:    user.vazaoDecSec.value ,
                dqoDecTerc:     user.dqoDecTerc.value ,
                phDecTerc:      user.phDecTerc.value ,
                tempDecTerc:    user.tempDecTerc.value ,
                solidoDecTerc:  user.solidoDecTerc.value ,
                vazaoDecTerc:   user.vazaoDecTerc.value ,
                eficBio:        user.eficBio.value ,
                eficProc:       user.eficProc.value ,
                dqoMont:        user.dqoMont.value ,
                phMont:         user.phMont.value ,
                tempMont:       user.tempMont.value ,
                oxMont:         user.oxMont.value ,
                solidoMont:     user.solidoMont.value ,
                dqoJust:        user.dqoJust.value ,
                phJust:         user.phJust.value ,
                tempJust:       user.tempJust.value ,
                oxJust:         user.oxJust.value ,
                solidoJust:     user.solidoJust.value,
                dqoL1:          user.dqoL1.value ,
                phL1:           user.phL1.value ,
                tempL1:         user.tempL1.value ,
                oxL1:           user.oxL1.value ,
                solidoL1:       user.solidoL1.value ,
                ssL1:           user.ssL1.value ,
                nitroL1:        user.nitroL1.value ,
                fosfL1:         user.fosfL1.value ,
                relFML1:        user.relFML1.value ,
                ivlL1:          user.ivlL1.value ,
                prodLodoL1:     user.prodLodoL1.value,
                retHidroL1:     user.retHidroL1.value ,
                dqoL2:          user.dqoL2.value ,
                phL2:           user.phL2.value ,
                oxL2:           user.oxL2.value ,
                solidoL2:       user.solidoL2.value ,
                ssL2:           user.ssL2.value ,
                nitroL2:        user.nitroL2.value ,
                fosfL2:         user.fosfL2.value ,
                relFML2:        user.relFML2.value ,
                ilvL2:          user.ilvL2.value,
                prodLodoL2:     user.prodLodoL2.value,
                retHidroL2:     user.retHidroL2.value ,
                analist:        user.analist.value ,
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
                dqoSFlot:       user.dqoSFlot.value ,
                phSFloat:       user.phSFloat.value ,
                tempSFloat:     user.tempSFloat.value ,
                solidosSFloat:  user.solidosSFloat.value ,
                ssSFloat:       user.ssSFloat.value ,
                dqoRio:         user.dqoRio.value ,
                phRio:          user.phRio.value ,
                tempRio:        user.tempRio.value ,
                oxRio:          user.oxRio.value ,
                solidosRio:     user.solidosRio.value ,
                phSec:          user.phSec.value ,
                solidosSec:     user.solidosSec.value ,
                vazaoSec:       user.vazaoSec.value ,
                phTerc:         user.phTerc.value ,
                solidosTerc:    user.solidosTerc.value ,
                vazaoTerc:      user.vazaoTerc.value ,
                dqoDecSec:      user.dqoDecSec.value ,
                phDecSec:       user.phDecSec.value ,
                tempDecSec:     user.tempDecSec.value ,
                solidoDecSec:   user.solidoDecSec.value ,
                oxDisDecSec:    user.oxDisDecSec.value ,
                vazaoDecSec:    user.vazaoDecSec.value ,
                dqoDecTerc:     user.dqoDecTerc.value ,
                phDecTerc:      user.phDecTerc.value ,
                tempDecTerc:    user.tempDecTerc.value ,
                solidoDecTerc:  user.solidoDecTerc.value ,
                vazaoDecTerc:   user.vazaoDecTerc.value ,
                eficBio:        user.eficBio.value ,
                eficProc:       user.eficProc.value ,
                dqoMont:        user.dqoMont.value ,
                phMont:         user.phMont.value ,
                tempMont:       user.tempMont.value ,
                oxMont:         user.oxMont.value ,
                solidoMont:     user.solidoMont.value ,
                dqoJust:        user.dqoJust.value ,
                phJust:         user.phJust.value ,
                tempJust:       user.tempJust.value ,
                oxJust:         user.oxJust.value ,
                solidoJust:     user.solidoJust.value,
                dqoL1:          user.dqoL1.value ,
                phL1:           user.phL1.value ,
                tempL1:         user.tempL1.value ,
                oxL1:           user.oxL1.value ,
                solidoL1:       user.solidoL1.value ,
                ssL1:           user.ssL1.value ,
                nitroL1:        user.nitroL1.value ,
                fosfL1:         user.fosfL1.value ,
                relFML1:        user.relFML1.value ,
                ivlL1:          user.ivlL1.value ,
                prodLodoL1:     user.prodLodoL1.value,
                retHidroL1:     user.retHidroL1.value ,
                dqoL2:          user.dqoL2.value ,
                phL2:           user.phL2.value ,
                oxL2:           user.oxL2.value ,
                solidoL2:       user.solidoL2.value ,
                ssL2:           user.ssL2.value ,
                nitroL2:        user.nitroL2.value ,
                fosfL2:         user.fosfL2.value ,
                relFML2:        user.relFML2.value ,
                ilvL2:          user.ilvL2.value,
                prodLodoL2:     user.prodLodoL2.value,
                retHidroL2:     user.retHidroL2.value ,
                analist:        user.analist.value ,

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
                user.dqoSFlot.value = "";
                user.phSFloat.value = "";
                user.tempSFloat.value = "";
                user.solidosSFloat.value = "";
                user.ssSFloat.value = "";
                user.dqoRio.value = "";
                user.phRio.value = "";
                user.tempRio.value = "";
                user.oxRio.value = "";
                user.solidosRio.value = "";
                user.phSec.value = "";
                user.solidosSec.value = "";
                user.vazaoSec.value = "";
                user.phTerc.value = "";
                user.solidosTerc.value = "";
                user.vazaoTerc.value = "";
                user.dqoDecSec.value = "";
                user.phDecSec.value = "";
                user.tempDecSec.value = "";
                user.solidoDecSec.value = "";
                user.oxDisDecSec.value = "";
                user.vazaoDecSec.value = "";
                user.dqoDecTerc.value = "";
                user.phDecTerc.value = "";
                user.tempDecTerc.value = "";
                user.solidoDecTerc.value = "";
                user.oxDisDecTerc.value = "";
                user.vazaoDecTerc.value = "";
                user.eficBio.value = "";
                user.eficProc.value = "";
                user.dqoMont.value = "";
                user.phMont.value = "";
                user.tempMont.value = "";
                user.oxMont.value = "";
                user.solidoMont.value = "";
                user.dqoJust.value = "";
                user.phJust.value = "";
                user.tempJust.value = "";
                user.oxJust.value = "";
                user.solidoJust.value = "";
                user.dqoL1.value = "";
                user.phL1.value = "";
                user.tempL1.value = "";
                user.oxL1.value = "";
                user.solidoL1.value = "";
                user.ssL1.value = "";
                user.nitroL1.value = "";
                user.fosfL1.value = "";
                user.relFML1.value = "";
                user.ivlL1.value = "";
                user.prodLodoL1.value = "";
                user.retHidroL1.value = "";
                user.dqoL2.value = "";
                user.phL2.value = "";
                user.oxL2.value = "";
                user.solidoL2.value = "";
                user.ssL2.value = "";
                user.nitroL2.value = "";
                user.fosfL2.value = "";
                user.relFML2.value = "";
                user.ilvL2.value = "";
                user.prodLodoL2.value = "";
                user.retHidroL2.value = "";
                user.analist.value = "";

                setOnEdit(null);
                getUsers();
        };

    return(
        <FormContainer ref = {ref} onSubmit = {handleSubmit }>

            <H2>Decantador Primário</H2>

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

            <H2>Saída Decantador Secundário</H2>
            <InputArea>
            <Label>DQO</Label>
            <Input name = "dqoDecSec"/>
            </InputArea>

            <InputArea>
            <Label>pH</Label>
            <Input name = "phDecSec"/>
            </InputArea>

            <InputArea>
            <Label>Temperatura</Label>
            <Input name = "tempDecSec"/>
            </InputArea>

            <InputArea>
            <Label>Sólidos</Label>
            <Input name = "solidoDecSec"/>
            </InputArea>

            <InputArea>
            <Label>Óxigenio Dissolvido</Label>
            <Input name = "oxDisDecSec"/>
            </InputArea>

            <InputArea>
            <Label>Vazão</Label>
            <Input name = "vazaoDecSec"/>
            </InputArea>

            <H2>Saída Decantador Terciário</H2>
            <InputArea>
            <Label>DQO</Label>
            <Input name = "dqoDecTerc"/>
            </InputArea>

            <InputArea>
            <Label>pH</Label>
            <Input name = "phDecTerc"/>
            </InputArea>

            <InputArea>
            <Label>Temperatura</Label>
            <Input name = "tempDecTerc"/>
            </InputArea>

            <InputArea>
            <Label>Sólidos</Label>
            <Input name = "solidoDecTerc"/>
            </InputArea>

            <InputArea>
            <Label>Óxigenio Dissolvido</Label>
            <Input name = "oxDisDecTerc"/>
            </InputArea>

            <InputArea>
            <Label>Vazão</Label>
            <Input name = "vazaoDecTerc"/>
            </InputArea>

            <InputArea>
            <Label>Eficiência Biológica</Label>
            <Input name = "eficBio"/>
            </InputArea>

            <InputArea>
            <Label>Eficiência Processo</Label>
            <Input name = "eficProc"/>
            </InputArea>

            <InputArea>

           <h1>Ribeirão Ferraz</h1>
           <H2>Montante</H2>
            
            <Label>DQO</Label>
            <Input name = "dqoMont"/>
            

            
            <Label>pH</Label>
            <Input name = "phMont"/>
            

            
            <Label>Temperatura</Label>
            <Input name = "tempMont"/>
           

            
            <Label>Óxigenio Dissolvido</Label>
            <Input name = "oxMont"/>
           

            <Label>Sólidos</Label>
            <Input name = "solidoMont"/>
            
            

            <H2>Jusante</H2>
            
            <Label>DQO</Label>
            <Input name = "dqoJust"/>
            

            
            <Label>pH</Label>
            <Input name = "phJust"/>
            

            
            <Label>Temperatura</Label>
            <Input name = "tempJust"/>
            

            
            <Label>Óxigenio Dissolvido</Label>
            <Input name = "oxJust"/>
            

            
            <Label>Sólidos</Label>
            <Input name = "solidoJust"/>
            </InputArea>

            <H2>Lagoa Aeração 1</H2>
            <InputArea>
            <Label>DQO</Label>
            <Input name = "dqoL1"/>
            </InputArea>

            <InputArea>
            <Label>pH</Label>
            <Input name = "phL1"/>
            </InputArea>

            <InputArea>
            <Label>Temperatura</Label>
            <Input name = "tempL1"/>
            </InputArea>

            <InputArea>
            <Label>Óxigenio Dissolvido</Label>
            <Input name = "oxL1"/>
            </InputArea>

            <InputArea>
            <Label>Sólidos</Label>
            <Input name = "solidoL1"/>
            </InputArea>

            <InputArea>
            <Label>Sólidos Suspensos</Label>
            <Input name = "ssL1"/>
            </InputArea>

            <InputArea>
            <Label>Nitrogênio</Label>
            <Input name = "nitroL1"/>
            </InputArea>

            <InputArea>
            <Label>Fósforo</Label>
            <Input name = "fosfL1"/>
            </InputArea>

            <InputArea>
            <Label>Relação FM</Label>
            <Input name = "relFML1"/>
            </InputArea>

            <InputArea>
            <Label>IVL</Label>
            <Input name = "ivlL1"/>
            </InputArea>

            <InputArea>
            <Label>Produção Lodo</Label>
            <Input name = "prodLodoL1"/>
            </InputArea>

            <InputArea>
            <Label>Retenção Hidráulica</Label>
            <Input name = "retHidroL1"/>
            </InputArea>

            <H2>Lagoa Aeração 2</H2>
            <InputArea>
            <Label>DQO</Label>
            <Input name = "dqoL2"/>
            </InputArea>

            <InputArea>
            <Label>pH</Label>
            <Input name = "phL2"/>
            </InputArea>

            <InputArea>
            <Label>Temperatura</Label>
            <Input name = "tempL2"/>
            </InputArea>

            <InputArea>
            <Label>Óxigenio Dissolvido</Label>
            <Input name = "oxL2"/>
            </InputArea>

            <InputArea>
            <Label>Sólidos</Label>
            <Input name = "solidoL2"/>
            </InputArea>

            <InputArea>
            <Label>Sólidos Suspensos</Label>
            <Input name = "ssL2"/>
            </InputArea>

            <InputArea>
            <Label>Nitrogênio</Label>
            <Input name = "nitroL2"/>
            </InputArea>

            <InputArea>
            <Label>Fósforo</Label>
            <Input name = "fosfL2"/>
            </InputArea>

            <InputArea>
            <Label>Relação FM</Label>
            <Input name = "relFML2"/>
            </InputArea>

            <InputArea>
            <Label>IVL</Label>
            <Input name = "ivl2"/>
            </InputArea>

            <InputArea>
            <Label>Produção Lodo</Label>
            <Input name = "prodLodoL2"/>
            </InputArea>

            <InputArea>
            <Label>Retenção Hidráulica</Label>
            <Input name = "retHidroL2"/>
            </InputArea>

            <InputArea>
            <Label>Analista</Label>
            <Input name = "analist"/>
            </InputArea>

            <Button type = "submit" >Salvar</Button>          
            

        </FormContainer>
    );
};

export default FoRM;