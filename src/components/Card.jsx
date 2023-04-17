import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Card = ({ name, logoURL, duration }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div
          className="card"
          style={{ width: "13.8rem", margin: 2.5, marginTop: 5 }}
        >
          <img src={logoURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p class="card-text">
              <b>Duration: </b> {duration} mins
            </p>
            <a href="/" class="btn btn-primary">
              Overview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
