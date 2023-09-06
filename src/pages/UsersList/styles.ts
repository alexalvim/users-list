import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
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

export const List = styled.ul`
  margin-bottom: ${({ theme }) => theme.spaces.large};

  > li {
    border-bottom: solid 1px ${({ theme }) => theme.colors.lightGray};
  }
`

export const ButtonWrapper = styled.div`
  > button {
    width: 100%;
  }
`
