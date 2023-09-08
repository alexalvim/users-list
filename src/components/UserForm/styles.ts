import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FieldsWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaces.large};

  > * {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spaces.base};
  }
`

export const ButtonsWrapper = styled.div`
  > button {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spaces.large};
  }
`

export const PageLink = styled(Link)`
  color: ${({ theme }) => theme.colors.darkestColor};
  display: inline-block;
  font-weight: bold;
  font-size: ${({ theme }) => theme.typo.medium};
  margin-bottom: ${({ theme }) => theme.spaces.large};
`

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.dangerRed};
  border: solid 1px ${({ theme }) => theme.colors.dangerRed};
  background-color: ${({ theme }) => theme.colors.dangerRed}15;
  display: block;
  font-weight: bold;
  font-size: ${({ theme }) => theme.typo.small};
  margin: ${({ theme }) => theme.spaces.large} 0;
  padding: ${({ theme }) => theme.spaces.medium};
`
