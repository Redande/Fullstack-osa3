const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('build'))
morgan.token("content", function(req, res) {
  return JSON.stringify(req.body);
});
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :content"
  )
);

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "045-1236543"
  },
  {
    id: 2,
    name: "Arto Järvinen",
    number: "041-21423123"
  },
  {
    id: 3,
    name: "Lea Kutvonen",
    number: "040-4323234"
  },
  {
    id: 4,
    name: "Martti Tienari",
    number: "09-784232"
  }
];

app.get("/info", (req, res) => {
  res.send(
    `<div>Puhelinluettelossa on ${
      persons.length
    } henkilön tiedot<br />${new Date()}</div>`
  );
});

app.get("/api/persons", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(persons));
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(p => p.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter(p => p.id !== id);

  res.status(204).end();
});

const generateId = () => {
  return Math.round(Math.random() * 100000);
};

app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (body.name === undefined || body.number === undefined) {
    return res.status(400).json({
      error: "name or number missing"
    });
  }

  if (persons.map(p => p.name).includes(body.name)) {
    return res.status(400).json({
      error: "name must be unique"
    });
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number
  };

  persons = persons.concat(person);

  res.json(person);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
