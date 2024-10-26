import { type Metadata } from 'next'

import { Button } from '@trroev/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@trroev/ui/card'
import { Heading } from '@trroev/ui/Heading'

const metadata: Metadata = {
  title: 'Page Not Found',
}

const NotFound = () => (
  <main className="flex grow flex-col items-center justify-center">
    <Card className="min-w-60 sm:min-w-80">
      <CardHeader>
        <CardTitle className="text-center text-7xl md:text-8xl lg:text-9xl">
          404
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <Heading as="h5" className="font-medium">
          Page Not Found
        </Heading>
      </CardContent>
      <CardFooter className="justify-center">
        <Button asChild variant="link">
          <a href="/">Return Home</a>
        </Button>
      </CardFooter>
    </Card>
  </main>
)

export { NotFound, metadata }
