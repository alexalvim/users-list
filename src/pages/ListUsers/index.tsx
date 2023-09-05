import { useState } from 'react'
import { Button } from '../../components/Button'
import { ContentWrapper } from './styles'

export const ListUsers = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <ContentWrapper>
      <Button
        onClick={() => {
          setIsLoading((il) => !il)
        }}
        isLoading={isLoading}
        disabled={false}
        label={'Label'}
      />
    </ContentWrapper>
  )
}
