import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FieldsWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaces.large};

  > * {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spaces.base};
  }
`

export const ButtonWrapper = styled.div`
  > button {
    width: 100%;
  }
`

export const PageLink = styled(Link)`
  color: ${({ theme }) => theme.colors.darkestColor};
  display: inline-block;
  font-weight: bold;
  font-size: ${({ theme }) => theme.typo.medium};
  margin-bottom: ${({ theme }) => theme.spaces.large};
`
