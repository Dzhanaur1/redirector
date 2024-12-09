export default function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send("Missing URL parameter");
  }

  const decodedUrl = decodeURIComponent(url);

  if (!decodedUrl.startsWith("v2raytun://")) {
    return res.status(400).send("Invalid URL scheme");
  }

  return res.redirect(decodedUrl);
}
