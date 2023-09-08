import { IUser } from '../../types'
import { formatCPF, formatPhone } from '../../utils/formatters'
import { ContentWrapper, EditLink, TextLine } from './styles'

interface IUserItemProps {
  user: IUser
}

export const UserItem = ({ user }: IUserItemProps) => {
  return (
    <ContentWrapper>
      <div>
        <TextLine>
          <b>Nome:</b>
          {user.name}
        </TextLine>
        <TextLine>
          <b>E-mail:</b>
          {user.email}
        </TextLine>
        <TextLine>
          <b>Telefone: </b>
          {formatPhone(user.phone)}
        </TextLine>
        <TextLine>
          <b>CPF:</b>
          {formatCPF(user.cpf)}
        </TextLine>
      </div>
      <div>
        <EditLink to={`/users/${user.cpf}/edit`}>Editar</EditLink>
      </div>
    </ContentWrapper>
  )
}
