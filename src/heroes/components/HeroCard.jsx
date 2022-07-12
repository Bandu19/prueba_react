import { Link } from "react-router-dom";
// import batman from "../../colegio/components/img/CEST superior izquierdo.png";
export const HeroCard = ({
   id,
   superhero,
   publisher,
   alter_ego,
   first_appearance,
   characters,
}) => {
   const heroImage = `/assets/heroes/heroes/${id}.jpg`;
   return (
      <div className="col">
         <div className="card">
            <div className="row no-gutters">
               <div className="col-4">
                  <img src={heroImage} className="card-img" alt={superhero} />
               </div>

               <div className="col-8">
                  <div className="card-body">
                     <h5 className="card-title">{superhero}</h5>
                     <p className="card-text">{alter_ego}</p>

                     {alter_ego != characters && <p>{characters}</p>}

                     <p className="card-text">
                        <small className="text-muted">{first_appearance}</small>
                     </p>

                     {/** ESTE ES DE LA PROPIEDAD DE REACT.RAUTER
                      * Esta propiedad lo que hara sera practicamente
                      * mandar a otra pagina por medio del identificador
                      * de tu API
                      */}

                     <Link to={`/hero/${id}`}>Mas...</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
