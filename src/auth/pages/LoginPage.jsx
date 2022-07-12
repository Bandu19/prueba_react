import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  //NAVEGACIÓN ==> HOOKS ===> useNavigate
  /** Ofrece a mi funcion que me permite
   *  navegar a otras pantallas.
   */
  const navegador = useNavigate();

  /** Este metodo hace que vayas a otra pagina
   *  dependiendo de la ruta, pero cuando tu agregas
   *  el segundo argumento lo que dice el "replace: ture"
   *  es que cuando vayas a la pagina ya no puedas regresar.
   */
  const handleLogin = () => {
    navegador("/marvel", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        //
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};
