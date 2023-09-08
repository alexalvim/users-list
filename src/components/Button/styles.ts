import styled from 'styled-components'

export const StyledButton = styled.button<{
  $isdanger: boolean
  disabled: boolean
}>`
  color: ${({ theme }) => theme.colors.lightestColor};
  background-color: ${({ theme }) => theme.colors.mainColor};
  font-weight: bold;
  font-size: ${({ theme }) => theme.typo.medium};
  border: none;
  padding: ${({ theme }) => `${theme.spaces.medium} ${theme.spaces.large}`};
  border-radius: 1.25rem;
  cursor: pointer;
  transition: all 0.125s ease-out;

  &:hover {
    opacity: 0.7;
  }

  ${({ $isdanger, theme }) =>
    $isdanger
      ? `
    background-color: ${theme.colors.dangerRed};
  `
      : ''}

  ${({ disabled, theme }) =>
    disabled
      ? `
    background-color: ${theme.colors.lightestGray};
    color: ${theme.colors.mediumGray};
    cursor: default;

    &:hover {
      opacity: 1;
    }
  `
      : ''}
`

export const LoaderWrapper = styled.span`
  display: block;
  position: relative;
  margin: 0px auto;
  width: 1.25rem;
  height: 1.25rem;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  svg {
    -webkit-animation: rotate 2s linear infinite;
    animation: rotate 2s linear infinite;
    height: 100%;
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin: auto;
    stroke: ${({ theme }) => theme.colors.lightestColor};
  }

  circle {
    stroke-dasharray: 150, 200;
    stroke-dashoffset: -10;
    -webkit-animation: dash 1.5s ease-in-out infinite;
    animation: dash 1.5s ease-in-out infinite;
    stroke-linecap: round;
  }

  @-webkit-keyframes rotate {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
`
