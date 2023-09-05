import { LoaderWrapper, StyledButton } from './styles'

interface IButtonProps {
  onClick: () => void
  label: string
  disabled: boolean
  isLoading: boolean
}

export const Button = ({
  onClick,
  label,
  disabled,
  isLoading,
}: IButtonProps) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {' '}
      {isLoading ? (
        <LoaderWrapper>
          <svg viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none" strokeWidth="4" />
          </svg>
        </LoaderWrapper>
      ) : (
        label
      )}
    </StyledButton>
  )
}
