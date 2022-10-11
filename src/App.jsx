import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CardContainer from "./containers/CardContainer/CardContainer";
import "./styles/main.scss";
import image from './assets/for-hire-image.svg'

const App = () => {  
  return (  
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
