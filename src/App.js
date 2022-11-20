import { Row } from "antd";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import 'antd/dist/antd.css';

function App() {
  
  return (
    <div style={{marginTop: '20px',margin:'20px'}}>
    <Row style={{border: '2px solid blue', borderRadius:'10px'}}>
  <Leftbar />
  <Rightbar />
  </Row>
  </div>
  );
}

export default App;
