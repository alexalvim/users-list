import styled from 'styled-components'

export const ContentWrapper = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spaces.large};
  position: relative;
  padding-top: ${({ theme }) => theme.spaces.base};
  overflow: hidden;
`

export const LabelText = styled.span<{ $isFocused: boolean }>`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.typo.medium};
  position: absolute;
  top: 1.75rem;
  left: ${({ theme }) => theme.spaces.medium};
  transition: all 0.125s ease-out;
  z-index: 1;
  text-wrap: nowrap;

  ${({ $isFocused, theme }) =>
    $isFocused
      ? `
    top: 0.75rem;
    left: 0;
    transform: translateY(-100%);
    font-size: ${theme.typo.small};
  `
      : ''}
`

export const FieldInput = styled.input<{ $hasError: boolean }>`
  font-size: ${({ theme }) => theme.typo.medium};
  padding: ${({ theme }) => `${theme.spaces.medium} ${theme.spaces.medium}`};
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: solid 2px ${({ theme }) => theme.colors.darkestColor};
  color: ${({ theme }) => theme.colors.darkestColor};
  background-color: transparent;
  outline: none;
  display: block;
  width: 100%;
  z-index: 2;
  font-weight: bold;

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
