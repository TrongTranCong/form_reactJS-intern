import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BrandsList.css";
function BrandsList(props) {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    fetch("https://624845ad4bd12c92f4093dfa.mockapi.io/api/products/brands")
      .then((response) => response.json())
      .then((brands) => setBrands(brands));
  }, []);
  const handleLogout = ()=>{
    navigate('/')
  }
  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: 20 }}>Brands</h3>
      <div className="container">
        {brands.map((brand, i) => {
          return (
            // <div key={i} className="card">
            //   <img src={brand.logo} alt={brand.name} />
            //   <p style={{ textAlign: "center" }}>{brand.name}</p>
            // </div>
            <div
              key={i}
              className="card"
              style={{ width: "33.33%", padding: 10 }}
            >
              <img
                src={brand.logo}
                className="img-fluid"
                alt={brand.name}
              />
              <div className="card-body">
                <h5 >{brand.name}</h5>
              </div>
              
            </div>
          );
        })}
      </div>
      <button className='btn-logout' onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default BrandsList;
