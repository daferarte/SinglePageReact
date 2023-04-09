import {BrowserRouter, Routes, Route, Link, Outlet, useParams, useNavigate} from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { persistor, store } from './store';
import SingIn from './users/SingIn';
import { logOut } from './store/user';
import { PersistGate } from 'redux-persist/integration/react';
import Videos from './videos/Videos';
import VideosForm from './videos/VideosForm';
import VideoShow from './videos/VideoShow';
import Profile from './users/Profile';
import HomePage from './Home';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

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
  let user = useSelector(state => state.user.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let doLogOut = ()=> {
    dispatch(
      logOut()
    )

    navigate("/");
  }
  return(
    <>
      {
        user && <button onClick={doLogOut}>Cerrar sesion</button>
      }
      <Outlet />
    </>
  )
}


function App() {
  return (
    //el proyecto se debe encapsular dentro de browserrouter para generar distintas rutas
    <BrowserRouter>
      {/* Routes se usa para generar grupas de rutas  */}
      {/* provider es un componente que permite acceder al redux por todos los componentes */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path='/' element={<HomePage/>} />

              {/* grupo de rutas donde el padre es usuarios */}
              <Route path='/usuarios' element={<UsuariosOutlet/>}>
                {/* el elemento navigate se puede usar para validar si esta iniciado sesion           */}
                <Route path='registro' element={<NotImplemented/>} />
                <Route path='login' element={<SingIn/>} />
                <Route path='miperfil' element={<Profile/>} />
                <Route path=':id/videos' element={<NotImplemented/>} />
              </Route>

              {/* el elemento navigate to se comporta como un redirect y envia a / automaticamente */}
              <Route path='/videos'>
                <Route path='' element={<Videos/>} />
                <Route path='nuevo' element={<VideosForm/>} />
                <Route path=':id' element={<VideoShow/>} />
              </Route>
              
              {/* pagina para usar el error 404 * empareja con lo que sea  */}
              <Route path='*' element={<Error404/>} />

            </Routes>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
