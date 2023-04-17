import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Card = ({ name, logoURL, duration }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div
          class="card"
          style={{ height: "15.8rem", width: "11.8rem", margin: 7.5, marginTop: 15 }}
        >
          <img src={logoURL} className="card-img-top" alt="..."  width="400" height="500" />
          <div className="card-body">
            <h6 className="card-title">{name}</h6>
            <p class="card-text">
              <b>Duration: </b> {duration} mins
            </p>
          </div>
          <div class="card-footer">
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
