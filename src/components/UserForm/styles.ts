import styled from 'styled-components'

export const FieldsWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaces.largest};

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
