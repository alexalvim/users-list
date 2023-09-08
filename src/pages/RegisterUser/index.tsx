import { useNavigate } from 'react-router-dom'
import { UserForm } from '../../components/UserForm'
import { ContentHolder, ContentWrapper, PageTitle } from './styles'
import { getUsers, setUsers } from '../../services/user'
import { useEffect, useState } from 'react'
import { IUser } from '../../types'

export const RegisterUser = () => {
  const navigate = useNavigate()
  const [usersList, setUsersList] = useState<IUser[]>([])
  const [formErrorMessage, setFormErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    const populateUsersList = async () => {
      const newUsers = await getUsers()
      setUsersList(newUsers)
    }

    populateUsersList()
  }, [])

  return (
    <ContentWrapper>
      <ContentHolder>
        <PageTitle>Cadastrar usuário</PageTitle>
        <UserForm
          errorMessage={formErrorMessage}
          onSubmit={(data) => {
            if (usersList.find(({ cpf }) => cpf === data.cpf)) {
              setFormErrorMessage('CPF já cadastrado em outro usuário')
              return
            }

            setUsers([
              ...usersList,
              {
                name: data.name,
                cpf: data.cpf,
                email: data.email,
                phone: data.phone,
              },
            ])

            navigate('/users')
          }}
        />
      </ContentHolder>
    </ContentWrapper>
  )
}
