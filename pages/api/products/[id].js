export default function handler(req, res) {
  return res.status(200).json("Getting one product: " + req.query.id);
}
