import { Hero } from '@trroev/ui/Hero'

const HomePage = () => {
  return (
    <main className="flex grow items-center justify-center">
      <Hero
        body="This is where you get started"
        eyebrow="trroev Web App"
        heading="Welcome!"
        image={{
          alt: 'This is the alt text',
          src: '/images/warm-gradient.jpg',
        }}
      />
    </main>
  )
}

export default HomePage
