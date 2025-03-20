import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const EmergencyServices = () => {
  const navigate = useNavigate();

  const emergencyContacts = [
    { name: "Ambulance Services", number: "102", description: "For medical emergencies", icon: "🚑" },
    { name: "National Emergency Helpline", number: "112", description: "For all emergencies", icon: "☎️" },
    { name: "Fire Emergency", number: "101", description: "For fire-related emergencies", icon: "🚒" },
    { name: "Police Helpline", number: "100", description: "For security concerns", icon: "👮" },
    { name: "Women Helpline", number: "1091", description: "For women in distress", icon: "👩" },
    { name: "Child Helpline", number: "1098", description: "For children in need", icon: "👶" },
  ];

  return (
    <div className="container pb-3 mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <h2 style={{color: '#640D5F'}}>Emergency Services Contact</h2>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-3">
        {emergencyContacts.map((contact, index) => (
          <div className="col" key={index}>
            <div className="card h-100 border-danger">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <span className="fs-1 me-3">{contact.icon}</span>
                  <div>
                    <h5 className="card-title">{contact.name}</h5>
                    <h3 className="text-danger">{contact.number}</h3>
                  </div>
                </div>
                <p className="card-text">{contact.description}</p>
                <button className="btn btn-danger w-100" onClick={() => window.location.href = `tel:${contact.number}`}>
                  Call Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
