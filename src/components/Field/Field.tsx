import { useState } from 'react'
import { ContentWrapper, ErrorMessage, FieldInput, LabelText } from './styles'
import { UseFormRegisterReturn } from 'react-hook-form'

interface IFieldProps {
  label: string
  errorMessage: string | null
  formProps: UseFormRegisterReturn<string>
  value: string
}

export const Field = ({
  label,
  errorMessage,
  formProps,
  value,
}: IFieldProps) => {
  const [isFocused, setIsFocused] = useState(!!value)

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
        {...formProps}
        onBlur={(e) => {
          formProps.onBlur(e)
          setIsFocused(!!e.currentTarget.value)
        }}
      />
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </ContentWrapper>
  )
}
