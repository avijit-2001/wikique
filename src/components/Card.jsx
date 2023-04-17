import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Card = ({ name, logoURL, duration }) => {
  return (
    <div className="row">
  <div className="col-md-6">
    <div
      className="card"
      style={{ height: "15rem", width: "12.5rem", margin: 20, marginTop: 15, marginLeft: 10}}
    >
      <img src={logoURL} className="card-img-top" alt="..." height="80"  />
      <div className="card-body">
        <h6 className="card-title">{name}</h6>
        <p className="card-text">
          <b>Duration:</b> {duration} mins
        </p>
      </div>
      <div className="card-footer">
        <a href="/" className="btn btn-primary">
          Overview
        </a>
      </div>
    </div>
  </div>        
</div>

  );
};

export default Card;
