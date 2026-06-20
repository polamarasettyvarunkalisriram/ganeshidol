import React from "react";
import "./Products.css";

const Products = () => {
  const idols = [
    {
      id: 1,
      name: "Vighnaharta Raja Eco-Friendly Ganesha",
      price: "₹12,495",
      mrp: "₹13,900",
      image: "/ganesh1.jpg"
    },
    {
      id: 2,
      name: "Avighna Eco-Friendly Ganesha",
      price: "₹12,600",
      mrp: "₹13,899",
      image: "/ganesh.jpg"
    },
    {
      id: 3,
      name: "Sumukha Eco-Friendly Ganesha",
      price: "₹12,999",
      mrp: "₹13,999",
      image: "/ganesh.jpg"
    },
    {
      id: 4,
      name: "Heramba Eco-Friendly Ganesha",
      price: "₹13,895",
      mrp: "₹14,999",
      image: "/ganesh1.jpg"
    }
  ];

  return (
    <section className="ganesh-section" id="products">
      <h2>Our Premium Ganesh Collection</h2>

      <div className="ganesh-container">
        {idols.map((idol) => (
          <div className="ganesh-card" key={idol.id}>
            <img src={idol.image} alt={idol.name} />

            <div className="ganesh-card-content">
              <h3 title={idol.name}>{idol.name}</h3>

              <div className="price-section">
                <span className="price">{idol.price}</span>
                <span className="mrp">{idol.mrp}</span>
              </div>

              <button className="add-cart">
                view video
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all">
        <button>View All Collection</button>
      </div>
    </section>
  );
};

export default Products;