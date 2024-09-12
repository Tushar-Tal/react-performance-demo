function NestedApp() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <Navigation />
    </header>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <NavItem text="Home" />
        <NavItem text="About" />
        <NavItem text="Contact" />
      </ul>
    </nav>
  );
}

function NavItem({ text }: { text: string }) {
  return <li>{text}</li>;
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

export default NestedApp;
