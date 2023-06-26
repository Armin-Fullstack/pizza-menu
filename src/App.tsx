const App: React.FC = () => {
  return (
    <div className="container">
    <Header/>
    <Menu/>
    <Footer/>
    </div>
  )
}

function Header(): JSX.Element {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu(): JSX.Element {
  return(
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza />
    </main>
  )
}

function Footer(): JSX.Element {
  const hour = new Date().getHours()
  const openHour = 20
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour
  console.log(isOpen);
  return(
    <footer className="footer">
      <p>We are curently open! {new Date().toLocaleTimeString()}</p>
    </footer>
  )
}

function Pizza(): JSX.Element {
  return(
    <figure>
      <img src="assets/images/salamino.jpg" alt="photo" />
    </figure>
  )
}
export default App;