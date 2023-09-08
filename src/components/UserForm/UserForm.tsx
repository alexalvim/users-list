import { z } from 'zod'
import { Field } from '../Field'
import { ButtonsWrapper, ErrorMessage, FieldsWrapper, PageLink } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../Button'
import { IUser } from '../../types'

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
      (phone) => /^\d{10,11}$/.test(phone),
      'Valor não é um telefone, favor utilizar apenas números com DDD',
    ),
})

interface IUserFormProps {
  defaultUser?: IUser | null
  onSubmit: (data: Record<string, string>) => void
  onRemove?: () => void
  errorMessage: string | null
}

export const UserForm = ({
  defaultUser,
  onSubmit,
  onRemove,
  errorMessage,
}: IUserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm({
    resolver: zodResolver(createBarbecueFormSchema),
    defaultValues: {
      name: defaultUser?.name || '',
      email: defaultUser?.email || '',
      cpf: defaultUser?.cpf || '',
      phone: defaultUser?.phone || '',
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldsWrapper>
        <Field
          formProps={{ ...register('name') }}
          label={'Nome completo(sem abreviações)'}
          errorMessage={errors?.name?.message?.toString() || null}
          value={getValues('name')}
        />
        <Field
          formProps={{ ...register('email') }}
          label={'E-mail'}
          errorMessage={errors?.email?.message?.toString() || null}
          value={getValues('email')}
        />
        <Field
          formProps={{ ...register('cpf') }}
          label={'CPF'}
          errorMessage={errors?.cpf?.message?.toString() || null}
          value={getValues('cpf')}
        />
        <Field
          formProps={{ ...register('phone') }}
          label={'Telefone'}
          errorMessage={errors?.phone?.message?.toString() || null}
          value={getValues('phone')}
        />
      </FieldsWrapper>
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
      <PageLink to={'/users'}>Retornar para listagem</PageLink>
      <ButtonsWrapper>
        <Button
          onClick={handleSubmit(onSubmit)}
          label={'Confirmar'}
          disabled={!isValid}
          isLoading={false}
        />
        {defaultUser && onRemove ? (
          <Button
            onClick={onRemove}
            label={'Remover'}
            disabled={false}
            isLoading={false}
            isDanger={true}
          />
        ) : null}
      </ButtonsWrapper>
    </form>
  )
}
