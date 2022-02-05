import { Link } from "react-router-dom"
import { Button } from 'antd';
import "./card.scss";
export function Card(props) {
  const { image, title, description, id } = props;

  return (
    <div className="card">
      <Link to={`portafolio/${id}`}>
        <figure className="card__figure">
          <img src={image} />
        </figure>
        <div className="card__text">
          <h2>{title}</h2>
          <p>{description}</p>
          <Button block={true}>Ir al detalle</Button>
        </div>
      </Link>
    </div>
  );
}
