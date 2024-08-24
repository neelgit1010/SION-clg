import '../styles/Testimonial.css'; // Ensure you import the CSS file

function Testimonial() {
  return (
    <div className="testimonial-container container mt-5">
      <img src="/Static/Ellipse-12.png" alt="Testimonial" className="testimonial-image" />
      <div className="testimonial-content ms-5">
        <h4 className="text-danger">Testimonial</h4>
        <h3 className="text-primary">Nandita Barman</h3>
        <h3>Kolkata, West Bengal</h3>
        <p className="fw-semibold mt-3 fs-5">
          "My experience at Sarojini Institute of Nursing has been transformative. The faculty provided exceptional support, making complex concepts manageable. My mentor’s guidance kept me motivated and focused. Placement assistance was superb, helping me secure a role in a top healthcare facility. Additionally, the easy loan facilities relieved financial stress, allowing me to concentrate fully on my studies. I am grateful for all the support and resources provided."
        </p>
        <h3 className="text-primary">GNM Nursing Student</h3>
        <h4>Batch, 2021</h4>
      </div>
    </div>
  );
}

export default Testimonial;
