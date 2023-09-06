import { UserForm } from '../../components/UserForm'
import { ContentHolder, ContentWrapper, PageTitle } from './styles'

export const RegisterUser = () => {
  return (
    <ContentWrapper>
      <ContentHolder>
        <PageTitle>Cadastrar usuário</PageTitle>
        <UserForm />
      </ContentHolder>
    </ContentWrapper>
  )
}
