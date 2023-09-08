import { render, screen, waitFor } from '@testing-library/react'
import { light } from '../../styles/theme/light'
import { ThemeProvider } from 'styled-components'
import { UsersList } from '.'
import { act } from 'react-dom/test-utils'
import { formatCPF, formatPhone } from '../../utils/formatters'

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  Link: jest.fn(),
}))

jest.mock('../../services/user', () => ({
  getUsers: () => [
    {
      cpf: '12322222222',
      name: 'Name',
      email: 'email@test.com',
      phone: '1234567890',
    },
  ],
}))

describe('UsersList', () => {
  it('should render component correctly', async () => {
    await act(async () => {
      render(
        <ThemeProvider theme={light}>
          <UsersList />
        </ThemeProvider>,
      )
    })

    await waitFor(() => {
      const pageTitle = screen.getByText('Listagem de usuários')
      const userName = screen.getByText('Name')
      const cpf = screen.getByText(formatCPF('12322222222'))
      const email = screen.getByText('email@test.com')
      const phone = screen.getByText(formatPhone('1234567890'))

      expect(pageTitle).toBeInTheDocument()
      expect(userName).toBeInTheDocument()
      expect(cpf).toBeInTheDocument()
      expect(email).toBeInTheDocument()
      expect(phone).toBeInTheDocument()
    })
  })

  it('should render component correctly in loading state', async () => {
    render(
      <ThemeProvider theme={light}>
        <UsersList />
      </ThemeProvider>,
    )

    const pageTitle = screen.getByText('Listagem de usuários')
    const loadingMessage = screen.getByText('Carregando usuários')

    expect(pageTitle).toBeInTheDocument()
    expect(loadingMessage).toBeInTheDocument()
  })
})
