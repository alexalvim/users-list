import { render, screen } from '@testing-library/react'
import { light } from '../../styles/theme/light'
import { ThemeProvider } from 'styled-components'
import { UserItem } from './UserItem'
import { formatPhone, formatCPF } from '../../utils/formatters'

jest.mock('react-router-dom', () => ({
  Link: jest.fn(),
}))

describe('UserItem', () => {
  it('should render component correctly', () => {
    const mockedProps = {
      user: {
        name: 'Name',
        email: 'test@test.com',
        cpf: '11111111111',
        phone: '11111111111',
      },
    }
    render(
      <ThemeProvider theme={light}>
        <UserItem {...mockedProps} />
      </ThemeProvider>,
    )
    const nameText = screen.getByText(mockedProps.user.name)
    const emailText = screen.getByText(mockedProps.user.email)
    const cpfText = screen.getByText(formatCPF(mockedProps.user.cpf))
    const phoneText = screen.getByText(formatPhone(mockedProps.user.phone))

    expect(nameText).toBeInTheDocument()
    expect(emailText).toBeInTheDocument()
    expect(cpfText).toBeInTheDocument()
    expect(phoneText).toBeInTheDocument()
  })
})
