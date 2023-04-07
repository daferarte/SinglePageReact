import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';

let NotImplemented = () => {
  return (
    <>
      {/* link para usar redirecciones es la manera optima sin multiples peticiones */}
      <Link to="/Videos">Ir a videos</Link>
      <h1>Esta pagina aun no esta lista</h1>
    </>
    )
}

let UsuariosOutlet =()=>{
  return(
    <>
      <p>hola desde usuarios</p>
      <Outlet />
    </>
  )
}

function App() {
  return (
    //el proyecto se debe encapsular dentro de browserrouter para generar distintas rutas
    <BrowserRouter>
      {/* Routes se usa para generar grupas de rutas  */}
      <Routes>
        <Route path='/' element={<NotImplemented/>} />

        {/* grupo de rutas donde el padre es usuarios */}
        <Route path='/usuarios' element={<UsuariosOutlet/>}>          
          <Route path='registro' element={<NotImplemented/>} />
          <Route path='login' element={<NotImplemented/>} />
          <Route path=':id' element={<NotImplemented/>} />
          <Route path=':id/videos' element={<NotImplemented/>} />
        </Route>

        <Route path='/videos'>
          <Route path='' element={<NotImplemented/>} />
          <Route path='nuevo' element={<NotImplemented/>} />
          <Route path=':id' element={<NotImplemented/>} />
        </Route>
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
