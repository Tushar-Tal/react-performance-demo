function NestedAppFixed() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header() {
  const navItems = ["Home", "About", "Contact"];
  return (
    <header>
      <Navigation items={navItems} />
    </header>
  );
}

function Navigation({ items }: { items: string[] }) {
  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Welcome to our site!</h1>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Footer Content</p>
    </footer>
  );
}

export default NestedAppFixed;
