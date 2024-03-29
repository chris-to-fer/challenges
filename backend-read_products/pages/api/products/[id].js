import dbConnect from "@/db/models/connect";
import Review from "@/db/models/Review";

import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");
    response.status(200).json(product);
  } else {
    return response.status(404).json({ status: "Not Found" });
  }
}
