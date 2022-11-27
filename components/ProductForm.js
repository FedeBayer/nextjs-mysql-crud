import axios from "axios";
import { useState } from "react";
export function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/products", product);
    console.log(res);
  };

  const handleChange = ({ target: { name, value } }) => {
    setProduct({ ...product, [name]: value });
  };

  return (
    <div className="bg-gray-300">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={handleChange} />

        <label htmlFor="price">Price:</label>
        <input type="text" name="price" onChange={handleChange} />

        <label htmlFor="description">Description:</label>
        <input type="text" name="description" onChange={handleChange} />

        <button type="submit">Save product</button>
      </form>
    </div>
  );
}
