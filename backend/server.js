import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const PORT = 3000;
const app = new express();

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/pdf/:name", (req, res) => {
  const pdfName = req.params.name;
  const filePath = path.join(__dirname, "pdfs", `${pdfName}.pdf`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "PDF not found" });
  }

  res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`PDF server running on http://localhost:${PORT}`);
});