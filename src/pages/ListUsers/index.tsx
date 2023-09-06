import { Field } from '../../components/Field'
import { ContentWrapper } from './styles'

export const ListUsers = () => {
  return (
    <ContentWrapper>
      <Field errorMessage={null} label={'Nome'} />
    </ContentWrapper>
  )
}
