import { useEffect, useState } from 'react'
import { Field } from '../../components/Field'
import {
  ButtonWrapper,
  ContentHolder,
  ContentWrapper,
  List,
  PageTitle,
} from './styles'
import { getUsers } from '../../services/user'
import { IUser } from '../../types'
import { UserItem } from '../../components/UserItem'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'

export const UsersList = () => {
  const [usersList, setUsersList] = useState<IUser[]>([])
  const navigate = useNavigate()

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
        <PageTitle>Listagem de usuários</PageTitle>
        <List>
          {usersList.map((user) => (
            <li key={user.cpf}>
              <UserItem user={user} />
            </li>
          ))}
        </List>
        <ButtonWrapper>
          <Button
            onClick={() => navigate('/users/new')}
            isLoading={false}
            disabled={false}
            label={'Cadastrar novo usuário'}
          />
        </ButtonWrapper>
      </ContentHolder>
    </ContentWrapper>
  )
}
