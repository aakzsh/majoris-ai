const express = require("express");
const app = express();
const { gpt } = require("gpti");
app.use(express.json());
const multer = require("multer");
const { PdfDataReader } = require("pdf-data-parser");

const upload = multer({
  dest: "./uploads/",
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader("Access-Control-Allow-Origin", "*")
next();
});

app.get("/", (req, res) => {
  res.send({
    message: "hello world",
  });
});

app.post("/upload", upload.single("file"), async (req, res) => {
  console.log("here\n")
  const file = req.file;

  console.log(file)
  let reader = new PdfDataReader({ url: file.path });
  var rows = "";
  await reader.on("data", (row) => {
    rows += row += "\n";
    console.log(row);
  });
  reader.on("end", () => {
    console.log("complete");
    res.send(rows);
  });
  reader.on("error", (err) => {
    console.log(err);
    res.send({ textdata: null }, { status: 400 });
  });
});

app.post("/parsetext", async (req, res) => {
  const filetext = req.body.textdata;
  console.log(filetext);

  // console.log(text);
  res.send({ data: "text" });
});


app.post("/resumejson", async (req, res) => {
  const resume_content = req.body.textdata;
  console.log(resume_content.length)
  await gpt(
    {
      prompt:
        "this is the text of a resume, please summarize this with json keys such as name, education, experience etc (whatever seems fit ):- " +
        resume_content,
      model: "gpt-4", // code or model
      type: "json", // optional: "json" or "markdown"
    },
    (err, data) => {
      if (err != null) {
        console.log(err);
        res.send({ res:err });
      } else {
        // console.log(data.gpt);
        const jsonObject = JSON.parse(data.gpt)
        console.log(jsonObject)
        res.send({ res: jsonObject });
      }
    }
  );
  // res.send({ res: "data" });
});
app.listen(8080, () => {
  console.log("Server is listening on port 8080.");
});