import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@trroev/ui/Card'

const HomePage = () => {
  return (
    <main>
      <Card className="w-80">
        <CardHeader>
          <CardTitle>Welcome!</CardTitle>
          <CardDescription>Web App</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is where you get started</p>
        </CardContent>
      </Card>
    </main>
  )
}

export default HomePage
