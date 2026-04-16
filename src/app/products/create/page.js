"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProduct() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(form),
    });

    router.push("/products");
  };

  return (
    <div className="container mt-4">
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Price"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <textarea
          className="form-control mb-2"
          placeholder="Description"
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <button className="btn btn-success">Create</button>
      </form>
    </div>
  );
}