"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProduct({ params }) {
  const router = useRouter();
  const [form, setForm] = useState({});

  useEffect(() => {
    fetch(`/api/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setForm(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`/api/products/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(form),
    });

    router.push("/products");
  };

  return (
    <div className="container mt-4">
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          value={form.title || ""}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          className="form-control mb-2"
          value={form.price || ""}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <button className="btn btn-warning">Update</button>
      </form>
    </div>
  );
}