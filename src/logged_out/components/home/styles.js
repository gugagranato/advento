import styled from 'styled-components'

export const Wrapper = styled.main`
  background-image: url(${process.env.PUBLIC_URL}/images/logged_out/bkg.png);
  color: #fff;
  width: 100%;
  height: 100vh;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
  margin-top: 4rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
