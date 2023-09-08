import { useNavigate, useParams } from 'react-router-dom'
import { UserForm } from '../../components/UserForm'
import { ContentHolder, ContentWrapper, PageTitle } from './styles'
import { IUser } from '../../types'
import { useEffect, useState } from 'react'
import { getUsers, setUsers } from '../../services/user'

export const EditUser = () => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null)
  const [usersList, setUsersList] = useState<IUser[]>([])
  const [formErrorMessage, setFormErrorMessage] = useState<string | null>(null)
  const { cpf } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const populateUsersList = async () => {
      const users = await getUsers()
      const matchedUser = users.find((u) => u.cpf === cpf) || null
      if (!matchedUser) {
        navigate('/users')
        return
      }
      setUsersList(users)
      setCurrentUser(matchedUser)
    }

    populateUsersList()
  }, [])

  if (!currentUser) {
    return (
      <ContentWrapper>
        <ContentHolder>Carregando</ContentHolder>
      </ContentWrapper>
    )
  }

  return (
    <ContentWrapper>
      <ContentHolder>
        <PageTitle>Editar usuário</PageTitle>
        <UserForm
          errorMessage={formErrorMessage}
          onRemove={() => {
            setUsers(usersList.filter((u) => u.cpf !== currentUser.cpf))
            navigate('/users')
          }}
          onSubmit={(data) => {
            if (cpf !== data.cpf && usersList.find((u) => u.cpf === data.cpf)) {
              setFormErrorMessage('CPF já cadastrado em outro usuário')
              return
            }
            setUsers(
              usersList.map((u) =>
                u.cpf === currentUser.cpf
                  ? {
                      name: data.name,
                      cpf: data.cpf,
                      email: data.email,
                      phone: data.phone,
                    }
                  : u,
              ),
            )

            navigate('/users')
          }}
          defaultUser={currentUser}
        />
      </ContentHolder>
    </ContentWrapper>
  )
}
