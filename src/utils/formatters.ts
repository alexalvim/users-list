export const formatCPF = (cpf: string) => {
  return `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(
    6,
    9,
  )}-${cpf.substring(9, 11)}`
}

export const formatPhone = (phone: string) => {
  if (phone.length === 10) {
    return `(${phone.substring(0, 2)}) ${phone.substring(
      2,
      6,
    )}-${phone.substring(6, 10)}`
  }
  return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(
    7,
    11,
  )}`
}
