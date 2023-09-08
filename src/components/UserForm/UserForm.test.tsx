import { fireEvent, render, screen } from '@testing-library/react'
import { UserForm } from './UserForm'
import { light } from '../../styles/theme/light'
import { ThemeProvider } from 'styled-components'

const mockedHandleSubmit = jest.fn()

jest.mock('react-hook-form', () => ({
  useForm: () => ({
    handleSubmit: mockedHandleSubmit,
    register: jest.fn(),
    reset: jest.fn(),
    formState: {
      errors: [],
    },
    getValues: () => true,
  }),
}))

jest.mock('react-router-dom', () => ({
  Link: jest.fn(),
}))

describe('UserForm', () => {
  it('should render component correctly in register mode', () => {
    const mockedProps = {
      onSubmit: jest.fn(),
      errorMessage: 'Error Message',
    }
    render(
      <ThemeProvider theme={light}>
        <UserForm {...mockedProps} />
      </ThemeProvider>,
    )
    const nameInput = screen.getByPlaceholderText(
      'Nome completo(sem abreviações)',
    )
    const emailInput = screen.getByPlaceholderText('E-mail')
    const cpfInput = screen.getByPlaceholderText('CPF')
    const phoneInput = screen.getByPlaceholderText('Telefone')
    const confirmButton = screen.getByText('Confirmar')
    const errorMessage = screen.getByText('Error Message')

    fireEvent.change(nameInput, {
      target: { value: 'Name' },
    })

    fireEvent.change(emailInput, {
      target: { value: 'test@test.com' },
    })

    fireEvent.change(cpfInput, {
      target: { value: '99999999999' },
    })

    fireEvent.change(phoneInput, {
      target: { value: '11999999999' },
    })

    fireEvent.click(confirmButton)

    expect(nameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(cpfInput).toBeInTheDocument()
    expect(phoneInput).toBeInTheDocument()
    expect(confirmButton).toBeInTheDocument()
    expect(errorMessage).toBeInTheDocument()
    expect(mockedHandleSubmit).toHaveBeenCalled()
  })

  it('should render component correctly in edit mode', () => {
    const mockedProps = {
      onSubmit: jest.fn(),
      errorMessage: 'Error Message',
      defaultUser: {
        name: 'Name test',
        email: 'Email',
        cpf: '22222222222',
        phone: '11999999999',
      },
      onRemove: jest.fn(),
    }
    render(
      <ThemeProvider theme={light}>
        <UserForm {...mockedProps} />
      </ThemeProvider>,
    )
    const nameInput = screen.getByPlaceholderText(
      'Nome completo(sem abreviações)',
    )
    const emailInput = screen.getByPlaceholderText('E-mail')
    const cpfInput = screen.getByPlaceholderText('CPF')
    const phoneInput = screen.getByPlaceholderText('Telefone')
    const confirmButton = screen.getByText('Confirmar')
    const removeButton = screen.getByText('Remover')
    const errorMessage = screen.getByText('Error Message')

    fireEvent.click(confirmButton)

    expect(nameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(cpfInput).toBeInTheDocument()
    expect(phoneInput).toBeInTheDocument()
    expect(confirmButton).toBeInTheDocument()
    expect(removeButton).toBeInTheDocument()
    expect(errorMessage).toBeInTheDocument()
    expect(mockedHandleSubmit).toHaveBeenCalled()
  })
})
