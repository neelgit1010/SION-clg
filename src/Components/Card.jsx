import '../styles/Card.css';

function Card({img, title}) {
  return (
    <div className="card p-3" style={{width: "18rem"}}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text text-center fw-bold fs-4" style={{color: "#0E4EB2"}}>
        {title}
        </p>
      </div>
    </div>
  );
}

export default Card;
