import './Navbar.scss';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark">
        <div>
          <a href="#home">Navbar</a>
          <div style={{ marginLeft: 'auto' }}>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
          </div>
        </div>
      </nav>


    </>
  );
}

export default Navbar;
