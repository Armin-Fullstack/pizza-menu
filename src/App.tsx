const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "./public/assets/images/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "./public/assets/images/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "./public/assets/images/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "./public/assets/images/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "./public/assets/images/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "./public/assets/images/prosciutto.jpg",
    soldOut: false,
  },
];
interface PizzaProps {
  pizzaObj: {
    photoName: string;
    name: string;
    ingredients: string;
    price: number;
    soldOut: boolean;
  };
}
const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

function Header(): JSX.Element {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu(): JSX.Element {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzaData.length > 0 ? <ul className="pizzas">
        {pizzaData.map((pizza) => {
          return <Pizza pizzaObj={pizza} />;
        })}
      </ul> : <p>We're still working on our menu.</p>}
      
    </main>
  );
}

function Pizza(props: PizzaProps): JSX.Element {
  return (
    <li className="pizza">
      <figure>
        <img src={props.pizzaObj.photoName} alt="photo" />
      </figure>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer(): JSX.Element {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <p>We're open until {closeHour}:00. Come visit us or order online.</p> 
        ) : <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

export default App;
