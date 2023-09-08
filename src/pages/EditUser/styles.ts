import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spaces.base};
`

export const ContentHolder = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.spaces.containerWidth};
`

export const PageTitle = styled.h1`
  color: ${({ theme }) => theme.colors.darkestColor};
  font-weight: bold;
  font-size: ${({ theme }) => theme.typo.large};
  margin-bottom: ${({ theme }) => theme.spaces.large};
`
