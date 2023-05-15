
import './App.css';
import {Button} from "react-bootstrap"
import { Heading } from './Heading'
import { Home } from './Home'
import {useNavigate} from "react-router-dom"
function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
          <>

{/*     <h1>Home</h1>
      <Button onClick={()=>navigate("/create")}>Next</Button>
 */}
    </>
      <Home/>
    </div>
  );
}

export default App;
