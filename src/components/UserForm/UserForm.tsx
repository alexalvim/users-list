import { z } from 'zod'
import { Field } from '../Field'
import { ButtonWrapper, FieldsWrapper } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../Button'

const createBarbecueFormSchema = z.object({
  name: z
    .string()
    .nonempty('Nome do usuário é obrigatório')
    .min(3, 'O Nome deve conter ao menos 3 caracteres'),
  email: z
    .string()
    .nonempty('Email do usuário é obrigatório')
    .email('Valor não corresponde a um email'),
  cpf: z
    .string()
    .nonempty('CPF do usuário é obrigatório')
    .refine(
      (cpf) => /^\d{11}$/.test(cpf),
      'Valor não é um CPF, favor utilizar apenas números',
    ),
  phone: z
    .string()
    .nonempty('Telefone do usuário é obrigatório')
    .refine(
      (phone) => /^\d{11}$/.test(phone),
      'Valor não é um telefone, favor utilizar apenas números com DDD',
    ),
})
export const UserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createBarbecueFormSchema),
  })
  const onSubmit = (data: Record<string, string>) => {
    console.log({ data })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldsWrapper>
        <Field
          formProps={{ ...register('name') }}
          label={'Nome completo(sem abreviações)'}
          errorMessage={errors?.name?.message?.toString() || null}
        />
        <Field
          formProps={{ ...register('email') }}
          label={'E-mail'}
          errorMessage={errors?.email?.message?.toString() || null}
        />
        <Field
          formProps={{ ...register('cpf') }}
          label={'CPF'}
          errorMessage={errors?.cpf?.message?.toString() || null}
        />
        <Field
          formProps={{ ...register('phone') }}
          label={'Telefone'}
          errorMessage={errors?.phone?.message?.toString() || null}
        />
      </FieldsWrapper>
      <ButtonWrapper>
        <Button
          onClick={handleSubmit(onSubmit)}
          label={'Confirmar'}
          disabled={false}
          isLoading={false}
        />
      </ButtonWrapper>
    </form>
  )
}
