import {BrowserRouter, Routes, Route, Link, Outlet, redirect, useNavigate, Navigate, useParams} from 'react-router-dom';

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
  let navigate = useNavigate();
  let redirect=()=>{
    navigate('/');
  }
  return(
    <>
      <button onClick={redirect}>Ir al home </button>
      <Outlet />
    </>
  )
}

let VideoShow = () =>{
  //extraccion del objeto enviado por params
  let {id} = useParams();
  let params = useParams();
  console.log(params);
  return(
    <p>
      {id}
    </p>
  )
}

function App() {
  const isAuth = false;
  return (
    //el proyecto se debe encapsular dentro de browserrouter para generar distintas rutas
    <BrowserRouter>
      {/* Routes se usa para generar grupas de rutas  */}
      <Routes>
        <Route path='/' element={<NotImplemented/>} />

        {/* grupo de rutas donde el padre es usuarios */}
        <Route path='/usuarios' element={<UsuariosOutlet/>}>
          {/* el elemento navigate se puede usar para validar si esta iniciado sesion           */}
          <Route path='registro' element={ isAuth ? <Navigate to='/'/> : <NotImplemented/>} />
          <Route path='login' element={<NotImplemented/>} />
          <Route path=':id' element={<NotImplemented/>} />
          <Route path=':id/videos' element={<NotImplemented/>} />
        </Route>

        {/* el elemento navigate to se comporta como un redirect y envia a / automaticamente */}
        <Route path='/videos'>
          <Route path='' element={<NotImplemented/>} />
          <Route path='nuevo' element={<NotImplemented/>} />
          <Route path=':id' element={<VideoShow/>} />
        </Route>
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
