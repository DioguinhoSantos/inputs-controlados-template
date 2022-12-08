import React from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  const onChangeNome = (event) => {
    console.log(event.target.value)
  }

  const onChangeIdade = (event) => {
    console.log(event.target.value)
  }

  const onChangeEmail = (event) => {
    console.log(event.target.value)
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input onChange={onChangeNome}/>
        </label>
        <label>
          Idade:
          <Input onChange={onChangeIdade}/>
        </label>
        <label>
          E-mail:
          <Input onChange={onChangeEmail}/>
        </label>
      <button>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
