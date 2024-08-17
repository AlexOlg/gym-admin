import express from "express";
import mysql from "mysql";

const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "gym_db",
});

app.use(express.json());

//TRAER TODOS LOS USUARIOS
app.get("/users", (req, res) => {
  const query = "SELECT * FROM users";
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

//CREAR UN NUEVO USUARIO
app.post("/users", (req, res) => {
  const query =
    "INSERT INTO users (`username`, `email`, `password`, `gymname`, `logo_src`) VALUES (?)";

  const values = [
    req.body.username,
    req.body.email,
    req.body.password,
    req.body.gymname,
    req.body.logo_src,
  ];
  db.query(query, [values], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json("Cliente agregado satisfactoriamente");
  });
});

//DEVOLVER UN SOLO USUARIO
app.get("/users/:id", (req, res) => {
  const query = "SELECT * FROM users WHERE id = ?";
  db.query(query, req.params.id, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//ACTUALIZAR UN USUARIO
app.put("/users/:id", (req, res) => {
  const clientId = req.params.id;
  const q =
    "UPDATE users SET `username`= ?, `email`= ?, `password`= ?, `gymname`= ?, `logo_src`= ? WHERE id = ?";

  const values = [
    req.body.username,
    req.body.email,
    req.body.password,
    req.body.gymname,
    req.body.logo_src,
  ];

  db.query(q, [...values, clientId], (err, data) => {
    if (err) {
      // Si hay un error en la consulta, respondemos con el error
      return res.status(500).json(err);
    }

    // Si todo va bien, respondemos con un mensaje o con los datos actualizados
    return res.json("Usuario actualizado satisfactoriamente");
  });
});






//TRAER TODOS LOS CLIENTES
app.get("/clients", (req, res) => {
  const query = "SELECT * FROM clients";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//CREAR UN NUEVO CLIENTE
app.post("/clients", (req, res) => {
  const query =
    "INSERT INTO clients (`username`, `email`, `phone_number`, `img_src`) VALUES (?)";

  const values = [
    req.body.username,
    req.body.email,
    req.body.phone_number,
    req.body.img_src,
  ];

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Cliente agregado satisfactoriamente");
  });
});

//DEVOLVER UN SOLO CLIENTE
app.get("/clients/:id", (req, res) => {
  const query = "SELECT * FROM clients WHERE id = ?";
  db.query(query, req.params.id, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//ACTUALIZAR UN CLIENTE
app.put("/clients/:id", (req, res) => {
  const clientId = req.params.id;
  const q =
    "UPDATE clients SET `username`= ?, `email`= ?, `phone_number`= ?, `img_src`= ?, `gym_id`= ?  WHERE id = ?";

  const values = [
    req.body.username,
    req.body.email,
    req.body.phone_number,
    req.body.img_src,
    req.body.gymId,
  ];

  db.query(q, [...values, clientId], (err, data) => {
    if (err) {
      // Si hay un error en la consulta, respondemos con el error
      return res.status(500).json(err);
    }

    // Si todo va bien, respondemos con un mensaje o con los datos actualizados
    return res.json("Cliente actualizado satisfactoriamente");
  });
});

app.listen(8800, () => {
  console.log("Backend conectado wachita");
});
