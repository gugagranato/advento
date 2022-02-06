import * as S from './styles'
import { useForm } from 'react-hook-form'
import React from 'react'

const Main = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  
  const onSubmit = async (data) => {

    console.log('data', data)
  }

  return (
    <S.Wrapper>
      <S.Logo
        src={`${process.env.PUBLIC_URL}/images/logged_out/logo.png`}
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <div style={{ marginBottom: 40, marginTop: 20 }}>
        <h1
          style={{
            fontSize: 38
          }}
        >
          Inscrições encerradas
        </h1>
        <h5
          style={{
            fontSize: 20,
            maxWidth: 600,
            fontWeight: 400
          }}
        >
          Increva-se na lista de espera para receber, em primeira mão, as
          novidades sobre o produto.
        </h5>
      </div>
      <div
        style={{
          height: 250,
          background: 'rgba(0, 0, 0, 0.45)',
          borderRadius: 10,
          padding: 20
        }}
      >
        <h1>Preencha o formulário abaixo para se cadastrar</h1>
        <div
          style={{
            borderTop: '1px solid #bbb',
            marginTop: 10,
            marginBottom: 30
          }}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            style={{
              width: '100%',
              marginBottom: 30,
              height: 40,
              borderRadius: 8,
              padding: 10
            }}
            placeholder="Digite seu melhor e-mail"
            {...register('email', { required: true })}
          />
          <input
            style={{
              width: '80%',
              marginBottom: 30,
              height: 40,
              borderRadius: 8,
              backgroundColor: '#054c05',
              color: 'white',
              fontSize: 16,
              fontWeight: '500'
            }}
            type="submit"
          />
        </form>
      </div>
    </S.Wrapper>
  )
}

export default Main
