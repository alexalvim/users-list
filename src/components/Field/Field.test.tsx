import { fireEvent, render, screen } from '@testing-library/react'
import { Field } from './Field'
import { light } from '../../styles/theme/light'
import { ThemeProvider } from 'styled-components'

describe('Field', () => {
  it('should render component correctly', () => {
    const mockedProps = {
      formProps: {
        name: 'inputName',
        ref: jest.fn(),
        onChange: jest.fn(),
        onBlur: jest.fn(),
      },
      label: 'Label',
      errorMessage: 'Error',
      hasValue: false,
    }
    render(
      <ThemeProvider theme={light}>
        <Field {...mockedProps} />
      </ThemeProvider>,
    )
    const fieldLabel = screen.getByText(mockedProps.label)
    const errorMessage = screen.getByText(mockedProps.errorMessage)
    const fieldInput = screen.getByPlaceholderText(mockedProps.label)

    fireEvent.change(fieldInput, {
      target: { value: 'test' },
    })
    fireEvent.blur(fieldInput)

    expect(fieldLabel).toBeInTheDocument()
    expect(errorMessage).toBeInTheDocument()
    expect(mockedProps.formProps.onChange).toHaveBeenCalled()
    expect(mockedProps.formProps.onBlur).toHaveBeenCalled()
  })
})
