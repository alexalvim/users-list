import { useState } from 'react'
import { ContentWrapper, ErrorMessage, FieldInput, LabelText } from './styles'

interface IFieldProps {
  label: string
  errorMessage: string | null
}

export const Field = ({ label, errorMessage }: IFieldProps) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <ContentWrapper>
      <LabelText $isFocused={isFocused}>{label}</LabelText>
      <FieldInput
        data-testid={'field-input'}
        type={'text'}
        placeholder={label}
        $hasError={!!errorMessage}
        onFocus={() => {
          setIsFocused(true)
        }}
        onBlur={() => {
          setIsFocused(false)
        }}
      />
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </ContentWrapper>
  )
}
