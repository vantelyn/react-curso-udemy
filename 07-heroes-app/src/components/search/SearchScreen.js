import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "@vantelyn/custom-hooks";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [{ searchText }, handleInputChange] = useForm({ searchText: q });

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  }

  const heroesFound = useMemo(
    () => getHeroesByName(q),
    [q]
  );


  return (
    <>
      <h1>Búsquedas</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form
            onSubmit={handleSearch}
          >
            <input
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              className="btn btn-outline-primary mt-1"
              type="submit"
            >
              Buscar...
            </button>
          </form>

        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {
            (q === '' && <p className="alert-danger p-2">Ningún nombre introducido</p>)
          }
          {
            (q !== '' && heroesFound.length === 0 && <p className="alert-info p-2">Sin resultados</p>)
          }

          {
            heroesFound.map(hero => (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))
          }

        </div>
      </div>
    </>
  )
}
