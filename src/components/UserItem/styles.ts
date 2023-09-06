import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContentWrapper = styled.div`
  padding: ${({ theme }) => theme.spaces.base} 0;
  display: flex;
  justify-content: space-between;
`

export const TextLine = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.darkestColor};
  margin-bottom: ${({ theme }) => theme.spaces.small};
  font-size: ${({ theme }) => theme.typo.medium};

  > b {
    font-weight: bold;
    display: inline-block;
    margin-right: ${({ theme }) => theme.spaces.tiny};
  }
`

export const EditLink = styled(Link)`
  color: ${({ theme }) => theme.colors.darkestColor};
  display: inline-block;
  font-weight: bold;
  font-size: ${({ theme }) => theme.typo.medium};
`
