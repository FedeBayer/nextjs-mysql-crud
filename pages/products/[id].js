import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { Layout } from "../../components/Layout";

function ProductPage({ product }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      await axios.delete("/api/products/" + id);
      router.push("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <Layout>
      <h1>
        <span className="block test-gray-700 font-bold mb2">Name:</span>
        {product.name}
      </h1>
      <p>
        <span className="block test-gray-700 font-bold mb2">Description:</span>
        {product.description}
      </p>
      <p>
        <span className="block test-gray-700 font-bold mb2">Price:</span>
        {product.price}
      </p>
      <button
        className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded mt-2"
        onClick={() => handleDelete(product.id)}
      >
        delete
      </button>

      <button
        className="bg-gray-500 hover:bg-gray-800 text-white ml-2 px-3 py-2 rounded"
        onClick={() => router.push("/products/edit/" + product.id)}
      >
        edit
      </button>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data: product } = await axios.get(
    "http://localhost:3000/api/products/" + context.query.id
  );
  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
