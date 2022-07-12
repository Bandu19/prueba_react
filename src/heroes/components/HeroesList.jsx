import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers";
import { useMemo } from "react";

export const HeroesList = ({ publisher }) => {
  /**
   * Aqui en el metodo getHeroesByPublisher devuelve todos
   * lo que eran de "DC Comics" o "Marvel" en la variable
   * heroes.
   */

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        //Siempre es obligatorio poner un IDENTIFICADOR
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
