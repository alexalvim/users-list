import { render, screen } from '@testing-library/react'
import { light } from '../../styles/theme/light'
import { ThemeProvider } from 'styled-components'
import { RegisterUser } from '.'

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  Link: jest.fn(),
}))

jest.mock('../../services/user', () => ({
  getUsers: () => [
    {
      cpf: '123',
      name: 'Name',
      email: 'email@test.com',
      phone: '123456',
    },
  ],
}))

describe('RegisterUser', () => {
  it('should render component correctly in loading state', async () => {
    render(
      <ThemeProvider theme={light}>
        <RegisterUser />
      </ThemeProvider>,
    )

    const pageTitle = screen.getByText('Cadastrar usuário')
    const userFormComponent = screen.getByTestId('userform-form')
    expect(pageTitle).toBeInTheDocument()
    expect(userFormComponent).toBeInTheDocument()
  })
})
