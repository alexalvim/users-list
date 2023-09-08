import { render, screen, waitFor } from '@testing-library/react'
import { light } from '../../styles/theme/light'
import { ThemeProvider } from 'styled-components'
import { EditUser } from '.'
import { act } from 'react-dom/test-utils'

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useParams: () => ({ cpf: '123' }),
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

describe('EditUser', () => {
  it('should render component correctly', async () => {
    await act(async () => {
      render(
        <ThemeProvider theme={light}>
          <EditUser />
        </ThemeProvider>,
      )
    })

    await waitFor(() => {
      const pageTitle = screen.getByText('Editar usuário')
      const userFormComponent = screen.getByTestId('userform-form')
      expect(pageTitle).toBeInTheDocument()
      expect(userFormComponent).toBeInTheDocument()
    })
  })

  it('should render component correctly in loading state', async () => {
    render(
      <ThemeProvider theme={light}>
        <EditUser />
      </ThemeProvider>,
    )

    const loadingMessage = screen.getByText('Carregando')
    expect(loadingMessage).toBeInTheDocument()
  })
})
