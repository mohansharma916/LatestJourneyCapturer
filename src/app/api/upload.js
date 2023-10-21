import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import ImageKit from "imagekit";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB file size limit
  },
});

const imagekit = new ImageKit({
  publicKey: "public_8anjxSMpbiBoJFTE5qveHXKt6Lg=",
  privateKey: "private_jmZnjGsUdwgZ6/yFKbFFRzOMpVY=",
  urlEndpoint: "https://ik.imagekit.io/agp8nuqpn",
});

const uploadMiddleware = upload.single("file");

const uploadHandler = async (req, res) => {
  try {
    console.log("Step1 ");
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: "No file uploaded." });
    }

    console.log("Step2 ");
    // Generate a unique filename
    const filename = `${uuidv4()}_${file.originalname}`;
    console.log("Step3 ");
    // Upload the file to ImageKit
    const uploadResponse = await imagekit.upload({
      file: file.buffer,
      fileName: filename,
    });
    console.log("Step4 ");

    // Here, you can save the uploaded file details, such as URL, to your database
    const imageUrl = uploadResponse.url;

    return res.status(200).json({ imageUrl });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export { uploadMiddleware, uploadHandler };
