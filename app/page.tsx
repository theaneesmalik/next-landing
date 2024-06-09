import Form from './components/sections/Form'
import Hero from './components/sections/Hero'
import Title from './components/sections/Title'
import Info from './components/sections/info'
import { info1, info2 } from './constants/home'

export default function Home() {
  return (
    <main>
      <Title />
      <Hero />
      <Form />
      <Info {...info1} />
      <Info {...info2} />
    </main>
  )
}
