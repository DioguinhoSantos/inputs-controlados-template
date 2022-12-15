import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');

  const onChangeNome = (e) => {
    setNome(e.target.value)
    console.log(nome)
  }

  const onChangeIdade = (e) => {
    setIdade(e.target.value)
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const gravaDados = () => {
    
    let dados = {
      nomeGravado: nome,
      idadeGravada: idade,
      emailGravado: email
    }

    console.log(dados)
    setNome('');
    setEmail('');
    setIdade('')

  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={nome} onChange={onChangeNome}/>
        </label>
        <label>
          Idade:
          <Input value={idade} onChange={onChangeIdade}/>
        </label>
        <label>
          E-mail:
          <Input value={email} onChange={onChangeEmail}/>
        </label>
      <button onClick={gravaDados}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
