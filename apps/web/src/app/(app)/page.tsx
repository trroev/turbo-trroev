import { ButtonLink } from '@trroev/ui/ButtonLink'
import { Heading } from '@trroev/ui/Heading'
import { Jumbotron } from '@trroev/ui/Jumbotron'
import { Text } from '@trroev/ui/Text'

const HomePage = () => {
  return (
    <main>
      <Jumbotron
        alignment="center"
        background="secondaryLight"
        body={<Text>This is where you get started</Text>}
        buttons={<ButtonLink href="/about">Learn more</ButtonLink>}
        heading={<Heading>Welcome!</Heading>}
      />
    </main>
  )
}

export default HomePage
