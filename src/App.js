import {BrowserRouter, Routes, Route} from 'react-router-dom';

let Hello = () => {
  return <h1>Hola mundo</h1>
}

function App() {
  return (
    //el proyecto se debe encapsular dentro de browserrouter para generar distintas rutas
    <BrowserRouter>
      {/* Routes se usa para generar grupas de rutas  */}
      <Routes>
        <Route path='/' element={<Hello/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
