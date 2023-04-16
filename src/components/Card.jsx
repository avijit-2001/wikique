import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Card = () => {
  const imgUrl =
    "https://static.semrush.com/blog/uploads/files/31/90/31909d269cc88a90e465031a1cfe261e/best-of-seo-link-building.svg";
  return (
    <div className="row">
    <div className="col-md-6">
      <div className="card" style={{ width: "12rem", margin:3}}>
        <img src={imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Card;
