import {BrowserRouter, Routes, Route, Link, Outlet, useParams} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import SingIn from './users/SingIn';
let NotImplemented = () => {
  return (
    <>
      {/* link para usar redirecciones es la manera optima sin multiples peticiones */}
      <Link to="/Videos">Ir a videos</Link>
      <h1>Esta pagina aun no esta lista</h1>
    </>
    )
}

let Error404 = () => {
  return (
    <>
      {/* link para usar redirecciones es la manera optima sin multiples peticiones */}
      <Link to="/">Regresar al inicio</Link>
      <h1>Esta pagina no existe - 404</h1>
    </>
    )
}

let UsuariosOutlet =()=>{
  
  return(
    <>
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
  return (
    //el proyecto se debe encapsular dentro de browserrouter para generar distintas rutas
    <BrowserRouter>
      {/* Routes se usa para generar grupas de rutas  */}
      {/* provider es un componente que permite acceder al redux por todos los componentes */}
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<NotImplemented/>} />

          {/* grupo de rutas donde el padre es usuarios */}
          <Route path='/usuarios' element={<UsuariosOutlet/>}>
            {/* el elemento navigate se puede usar para validar si esta iniciado sesion           */}
            <Route path='registro' element={<NotImplemented/>} />
            <Route path='login' element={<SingIn/>} />
            <Route path=':id' element={<NotImplemented/>} />
            <Route path=':id/videos' element={<NotImplemented/>} />
          </Route>

          {/* el elemento navigate to se comporta como un redirect y envia a / automaticamente */}
          <Route path='/videos'>
            <Route path='' element={<NotImplemented/>} />
            <Route path='nuevo' element={<NotImplemented/>} />
            <Route path=':id' element={<VideoShow/>} />
          </Route>
          
          {/* pagina para usar el error 404 * empareja con lo que sea  */}
          <Route path='*' element={<Error404/>} />

        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
