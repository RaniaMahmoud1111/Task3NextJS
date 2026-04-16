"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    fetchProducts(); // refresh
  };

  return (
    <div className="container mt-4">
      <h2>Products</h2>

      <Link href="/products/create" className="btn btn-primary mb-3">
        Add Product
      </Link>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.title}</td>
              <td>${p.price}</td>

              <td>
                <Link
                  href={`/products/${p._id}`}
                  className="btn btn-info btn-sm me-2"
                >
                  View
                </Link>

                <Link
                  href={`/products/edit/${p._id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(p._id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}