import { Link, useHistory } from "react-router-dom";
import "./card.scss";
export function Card(props) {
  const {
    image,
    title,
    description,
    id,
    onDelete = null,
    isLogin = false,
  } = props;
  let history = useHistory();

  function redireccionarAEditar(id) {
    history.push(`/portafolio/editar/${id}`);
  }

  return (
    <div className="card">
      {isLogin && (
        <button className="card__edit" onClick={() => redireccionarAEditar(id)}>
          Editar
        </button>
      )}
      {onDelete && isLogin && (
        <button className="card__delete" onClick={() => onDelete(id)}>
          Eliminar
        </button>
      )}
      <Link to={`portafolio/${id}`}>
        <figure className="card__figure">
          <img src={image} alt="" />
        </figure>
        <div className="card__text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}
