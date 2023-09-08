import { formatCPF, formatPhone } from './formatters'

describe('Formatters', () => {
  describe('formatCPF', () => {
    it('should format CPF', () => {
      const rawCPF = '11111111111'
      const formattedCPF = '111.111.111-11'
      expect(formatCPF(rawCPF)).toBe(formattedCPF)
    })
  })

  describe('formatPhone', () => {
    it('should format phone with 10 numbers', () => {
      const rawPhone = '1234567890'
      const formattedPhone = '(12) 3456-7890'
      expect(formatPhone(rawPhone)).toBe(formattedPhone)
    })

    it('should format phone with 11 numbers', () => {
      const rawPhone = '12345678901'
      const formattedPhone = '(12) 34567-8901'
      expect(formatPhone(rawPhone)).toBe(formattedPhone)
    })
  })
})
