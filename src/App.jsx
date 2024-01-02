import Nav from "./components/Nav"
import Hero from "./sections/Hero"
import PopularProducts from "./sections/PopularProducts"

export default function App() {
  return (
    <main className="relative">
      <Nav/>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        Super Quality
      </section>
    </main>
  )
}