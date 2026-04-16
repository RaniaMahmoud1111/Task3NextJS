import {connectDB}from "@/lib/mongodb";
import Product from "@/models/product";

export async function GET(req, { params }) {
  await connectDB();

  const product = await Product.findById(params.id);

  if (!product) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  return Response.json(product);
}

export async function PUT(req, { params }) {
  await connectDB();

  const body = await req.json();

  const updatedProduct = await Product.findByIdAndUpdate(
    params.id,
    body,
    { new: true }
  );

  if (!updatedProduct) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  return Response.json(updatedProduct);
}

export async function DELETE(req, { params }) {
  await connectDB();

  const deletedProduct = await Product.findByIdAndDelete(params.id);

  if (!deletedProduct) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  return Response.json({ message: "Deleted successfully" });
}