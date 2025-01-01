import { Link, useParams } from "react-router";


export default function Card({name,flag,population,capital,region,data}) {
  return (
    <Link className="country-card" to={name} state={data}>
      <div className="flag-container">
        <img src={flag} alt="flag" />
      </div>
      <div className="card-text">
        <h3 className="name">{name}</h3>
        <p>
          <b>Population: </b>{population.toLocaleString('en-IN')}
        </p>
        <p>
          <b>Region: </b>{region}
        </p>
        <p>
          <b>Capital: </b>{capital?.join(', ')}
        </p>
      </div>
    </Link>
  );
}
