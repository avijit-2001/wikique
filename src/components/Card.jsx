import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Card = ({ name, logoURL, duration, onClickOverview, movieId}) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div
          class="card"
          style={{ height: "15rem", width: "12.5rem", margin: 20, marginTop: 15, marginLeft: 10}}
        >
          <img src={logoURL} className="card-img-top" alt="..."  width="400" height="500" />
          <div className="card-body">
            <h6 className="card-title">{name}</h6>
            <p class="card-text">
              <b>Duration: </b> {duration} mins
            </p>
          </div>
          <div class="card-footer">
          <button class="btn btn-primary" onClick={() => onClickOverview(movieId)}>
              Overview
            </button>
          </div>
          </div>
        </div>        
    </div>
  );
};

export default Card;
