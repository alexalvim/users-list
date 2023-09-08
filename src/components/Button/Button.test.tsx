import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './Button'
import { light } from '../../styles/theme/light'
import { ThemeProvider } from 'styled-components'

describe('Button', () => {
  it('should render component correctly', () => {
    const mockedProps = {
      label: 'Test',
      onClick: jest.fn(),
      disabled: false,
      isLoading: false,
    }
    render(
      <ThemeProvider theme={light}>
        <Button {...mockedProps} />
      </ThemeProvider>,
    )
    const buttonLabel = screen.getByText(mockedProps.label)
    fireEvent.click(buttonLabel)

    expect(mockedProps.onClick).toHaveBeenCalled()
    expect(buttonLabel).toBeInTheDocument()
  })

  it('should render component correctly in loading state', () => {
    const mockedProps = {
      label: 'Test',
      onClick: jest.fn(),
      disabled: false,
      isLoading: true,
    }
    render(
      <ThemeProvider theme={light}>
        <Button {...mockedProps} />
      </ThemeProvider>,
    )
    const buttonLoader = screen.getByTestId('button-loader')

    expect(buttonLoader).toBeInTheDocument()
  })

  it('should render component correctly disabled', () => {
    const mockedProps = {
      label: 'Test',
      onClick: jest.fn(),
      disabled: true,
      isLoading: false,
    }
    render(
      <ThemeProvider theme={light}>
        <Button {...mockedProps} />
      </ThemeProvider>,
    )
    const buttonLabel = screen.getByText(mockedProps.label)

    expect(buttonLabel).toBeInTheDocument()
    expect(buttonLabel).toHaveAttribute('disabled')
  })
})
