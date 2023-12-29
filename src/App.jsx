import Nav from "./components/Nav"

export default function App() {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-1 wide:padding-r padding-b">
        Hero
      </section>
      <section className="padding">
        Popular Products
      </section>
      <section className="padding">
        Super Quality
      </section>
    </main>
  )
}