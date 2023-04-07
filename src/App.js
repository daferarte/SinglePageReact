import {BrowserRouter, Routes, Route} from 'react-router-dom';

let NotImplemented = () => {
  return <h1>Esta pagina aun no esta lista</h1>
}

function App() {
  return (
    //el proyecto se debe encapsular dentro de browserrouter para generar distintas rutas
    <BrowserRouter>
      {/* Routes se usa para generar grupas de rutas  */}
      <Routes>
        <Route path='/' element={<NotImplemented/>} />
        <Route path='/usuarios/registro' element={<NotImplemented/>} />
        <Route path='/usuarios/login' element={<NotImplemented/>} />

        <Route path='/usuarios/:id' element={<NotImplemented/>} />
        <Route path='/usuarios/:id/videos' element={<NotImplemented/>} />

        
      </Routes>
      <Routes>
        <Route path='/videos' element={<NotImplemented/>} />
        <Route path='/videos/nuevo' element={<NotImplemented/>} />
        <Route path='/videos/:id' element={<NotImplemented/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
