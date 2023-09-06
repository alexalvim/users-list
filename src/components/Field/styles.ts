import styled from 'styled-components'

export const ContentWrapper = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spaces.large};
  position: relative;
`

export const LabelText = styled.label<{ $isFocused: boolean }>`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.typo.medium};
  font-weight: bold;
  position: absolute;
  top: ${({ theme }) => theme.spaces.medium};
  left: ${({ theme }) => theme.spaces.medium};
  transition: all 0.125s ease-out;

  ${({ $isFocused, theme }) =>
    $isFocused
      ? `
    top: 0;
    left: 0;
    transform: translateY(-100%);
    font-size: ${theme.typo.small};
  `
      : ''}
`

export const FieldInput = styled.input<{ $hasError: boolean }>`
  font-size: ${({ theme }) => theme.typo.small};
  padding: ${({ theme }) => `${theme.spaces.medium} ${theme.spaces.medium}`};
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: solid 2px ${({ theme }) => theme.colors.darkestColor};
  color: ${({ theme }) => theme.colors.darkestColor};
  outline: none;

  &::placeholder {
    opacity: 0;
  }

  ${({ $hasError, theme }) =>
    $hasError
      ? `
      border-bottom-color: ${theme.colors.dangerRed};
  `
      : ''}
`

export const ErrorMessage = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: ${({ theme }) => theme.typo.tiny};
  color: ${({ theme }) => theme.colors.dangerRed};
  margin-top: ${({ theme }) => theme.spaces.small};
`
