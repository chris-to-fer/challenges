import { getProductById } from "@/services/productServices";

export default function handler(req, res) {
  const id = req.query.id;
  console.log("this", req);
  console.log("Hello there ");
  const stuff = getProductById(id);
  res.status(200).json(stuff);
}
