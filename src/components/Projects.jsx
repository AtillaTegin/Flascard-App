
import { Link } from "react-router-dom";

export default function Projects(props) {
  return (
    <div className="container">
      <div key={props.id} className="card">
        <div className="about">
          <strong>
            <p>Name: {props.name}</p>
          </strong>
        </div>
        <div className="p">
          <h3 className="bio">Biography</h3>
          <p className="lorem">{props.info}</p>
        </div>
        <div className="y">
          <Link to={props.git} className="gitHub">
            Github 
          </Link>
          <Link to={props.link} className="youTube">
            GitPage 
          </Link>
        </div>
      </div>
    </div>
  );
}
