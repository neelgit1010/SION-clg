import Card from "./Card";

function Facilities() {
  const cards = [
    {
      img: "/Static/Ellipse-13.png",
      title: "Experienced Teachers",
    },
    {
      img: "/Static/Ellipse-19.png",
      title: "100% Placement",
    },
    {
      img: "/Static/Ellipse-20.png",
      title: "Online Class Facilities",
    },
    {
      img: "/Static/Ellipse-21.png",
      title: "Scholarship for Students",
    },
    {
      img: "/Static/Ellipse-22.png",
      title: "Best Practical & on Job Training Facility",
    },
    {
      img: "/Static/Ellipse-23.png",
      title: "Ragging Free Campus with 24/7 CCTV Surveillance",
    },
  ];

  return (
    <div className="container mt-5 p-3">
      <h1 className="text-center" style={{ color: "#0E4EB2" }}>
        Our Facilities
      </h1>
      <div className="container d-flex flex-wrap gap-3 m-5">
        {cards.map((item) => (
          <Card img={item.img} title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default Facilities;
