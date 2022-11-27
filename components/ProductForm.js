import axios from "axios";
export function ProductForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/products", {
      name: "product1",
      description: "Product description 1",
      price: 1000,
    });
    console.log(res);
  };

  return (
    <div className="bg-gray-300">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />

        <label htmlFor="price">Price:</label>
        <input type="text" name="price" />

        <label htmlFor="description">Description:</label>
        <input type="text" name="description" />

        <button type="submit">Save product</button>
      </form>
    </div>
  );
}
