// AQUI MANDAMOS A LLAMAR EL API del objeto para

import { heroes } from "../data/heroes";

/**El publisher lo ocupamos para definir que campaña es si es:
 * Marvel o DC
 */
export const getHeroesByPublisher = (publisher) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return heroes.filter((heroe) => heroe.publisher == publisher);
};
