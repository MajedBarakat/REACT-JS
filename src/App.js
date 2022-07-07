import { Navbar, Container,Nav,Form,Button,Card } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div>

      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://www.shareicon.net/data/256x256/2016/07/08/117066_media_512x512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
      
      <div className='asd11'>
      
        <Card className='card11'>
          <Card.Img variant="top" src="https://imganuncios.mitula.net/ford_mustang_ford_mustang_7920135534174109138.jpg" />
          <Card.Body>
            <Card.Title>Ford Mustang</Card.Title>
            <Card.Text>
              Ford Mustang 2.3 EcoBoost 317ch Kilométrage: 39200 Année: 07/2016 Puissance: 233 kW (317 CV) Consommation: 8 l/100 km 
            </Card.Text>
            <Button variant="primary">BUY</Button>
          </Card.Body>
        </Card>

        <Card className='card11'>
          <Card.Img variant="top" src="data:image/jpeg;base64,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" />
          <Card.Body>
            <Card.Title>Chevy SS</Card.Title>
            <Card.Text>
            Sporting a hearty 415-hp V-8 and rear-wheel drive, the Chevrolet SS harkens back to the big-sedan, big-power formula of yesteryear. While this four-door Super Sport is inherently old school, its incredibly balanced chassis and bountiful standard features are thoroughly modern. The Chevy’s exterior design is discreet on the street, but a snorty exhaust note and a 4.5-second sprint from zero to 60 mph lend credence to its sleeper status. Even better, the standard six-speed automatic transmission can be swapped for a six-speed manual at no cost. Too bad the SS is the opposite of fuel efficient and borders on expensive. Still, the Chevy SS is a seriously underrated sports sedan.
            </Card.Text>
            <Button variant="primary">BUY</Button>
          </Card.Body>
        </Card>

        <Card className='card11'>
          <Card.Img variant="top" src="https://www.motortrend.com/uploads/2021/09/001-chevy-camaro-driver-front-three-quarter.jpg?fit=around%7C875:492" />
          <Card.Body>
            <Card.Title>Chevy Camaro</Card.Title>
            <Card.Text>
            First off, we're still a bit ticked off that plans for a 7th-gen Camaro were botched and the Camaro, which has already suffered one premature death in 2002, would once again go away after 2024. You see the current Camaro utilizes the Alpha platform that the Cadillac ATC and CTS also use. Both of those Caddys are being replaced by the CT4 and CT5 which uses an updated Alpha platform. Well, the Camaro wasn't transitioned to the new platform so after the 2024 model year there's, well, nothing..
            </Card.Text>
            <Button variant="primary">BUY</Button>
          </Card.Body>
        </Card>

        <Card className='card11'>
          <Card.Img variant="top" src="https://i.ytimg.com/vi/tcxRrF3B-YY/hqdefault.jpg" />
          <Card.Body>
            <Card.Title>KIA RIO</Card.Title>
            <Card.Text>
            The facelifted Rio featured changes in the front fascia with a revised bumper design. It was first introduced in Europe in May 2020, along with the inclusion of a 1.0-litre mild hybrid engine to replace the previous 1.0-litre T-GDi engine
            </Card.Text>
            <Button variant="primary">BUY</Button>
          </Card.Body>
        </Card>
        
      </div>

    </div>
  );
}

export default App;
