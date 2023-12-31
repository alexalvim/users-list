import { LoaderWrapper, StyledButton } from './styles'

interface IButtonProps {
  onClick: () => void
  label: string
  disabled: boolean
  isLoading: boolean
  isDanger?: boolean
}

export const Button = ({
  onClick,
  label,
  disabled,
  isLoading,
  isDanger,
}: IButtonProps) => {
  return (
    <StyledButton $isdanger={!!isDanger} disabled={disabled} onClick={onClick}>
      {' '}
      {isLoading ? (
        <LoaderWrapper data-testid={'button-loader'}>
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
