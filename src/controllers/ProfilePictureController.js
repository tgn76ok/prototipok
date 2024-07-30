const s3Service = require("../config/s3");

class ProfilePictureController {
  async upload(req, res) {
    try {
      const id = req.params.id;
      const fileExtension = req.query.fileExtension || "png";
      const contentType = req.query.contentType || "image/png";
      const filename = req.params.id + "." + fileExtension;
      const url = await s3Service.putWithPresignedUrl(filename, contentType);
      res.send({ url: url, filename: filename });
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  async get(req, res) {
    try {
      const id = req.params.id;
      const fileExtension = req.query.fileExtension || "png";
      const contentType = req.query.contentType || "image/png";
      const filename = req.params.id + "." + fileExtension;
      const url = await s3Service.getWithPresignedUrl(filename, contentType);
      res.send({ url: url, filename: filename });
    } catch (err) {
      return res
        .status(400)
        .json({ errors: err.errors.map((err) => err.message) });
    }
  }
}

export default new ProfilePictureController();
