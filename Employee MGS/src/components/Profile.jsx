import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons are imported

const Profile = () => {
  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-body text-center">
          {/* Add an admin icon at the top */}
          <div className="mb-3">
            <i
              className="bi bi-person-circle"
              style={{ fontSize: "4rem", color: "#007bff" }}
            ></i>
          </div>
          <h3 className="card-title">Admin Profile</h3>
          <p className="card-text">
            <strong>Name: Admin</strong>
          </p>
          {/* Add more admin details as needed */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
