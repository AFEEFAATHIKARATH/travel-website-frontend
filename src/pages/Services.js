import React from "react";
import "./services.css";
import service1 from "./assets/service1.png"
import service2 from "./assets/service2.png";
import service3 from "./assets/service3.png";
import service4 from "./assets/service4.png";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Get Best Prices",
      subTitle:
        "Pay through our application and save thousands and get amazing rewards.",
    },
    {
      icon: service2,
      title: "Travel Safely",
      subTitle:
        "Emphasizes safety measures for worry-free exploration",
    },
    {
  icon: service3,
      title: "Flexible Payment",
      subTitle:
        " Enjoy the flexible payment through our app and get rewards on every payment.",
    },
    {
      icon: service4,
      title: "Find The Best Near You",
      subTitle:
        "Find the best hotels and places to visit near you in a single click.",
    },
  ];
    return (
      <section className="Section" id="services" data-aos="fade-up">
        {data.map((service, index) => {
          return (
            <div className="service" key={index}>
              <div className="icon">
                <img src={service.icon} alt="" />
              </div>
              <h3 style={{ fontSize: 20 }}>{service.title}</h3>
              <p style={{ fontSize: 12 }}>{service.subTitle}</p>
            </div>
          );
        })}
      </section>
    );
}
