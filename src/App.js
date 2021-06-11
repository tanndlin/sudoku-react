import Topbar from './Topbar';
import Container from './Container';

function App() {
  return (
    <div className="App">
      <Topbar />

      <div className="content">
        <Container></Container>
      </div>
    </div>
  );
}

export default App;
