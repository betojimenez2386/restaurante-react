import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { agregarReservacion } from "../utils/dynamodb";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

export function Reservaciones() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    address: "",
  });
  return (
    <div>
      <header class="header">
        <div class="contenedor">
          <div class="barra">
            <Link to={"/"} className="logo">
              <h1 class="logo__nombre no-margin centrar-texto">
                Blog<span class="logo__bold">DeCafé</span>
              </h1>
            </Link>

            <nav class="navegacion">
              <Link to={"/cursos"} className="navegacion__enlace">
                Cursos
              </Link>
              <Link to={"/reservaciones"} className="navegacion__enlace">
                Reservaciones
              </Link>
              <Link to={"/menu"} className="navegacion__enlace">
                Menu
              </Link>
            </nav>
          </div>
        </div>
        <div class="header__texto">
          <h2 class="no-margin">Blog de Cafe con consejos y cursos</h2>
          <p class="no-margin">
            {" "}
            Aprende de los Expertos con las mejores recetas y consejos
          </p>
        </div>
      </header>
      <div className="formulario">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                className="campo__field"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nombre"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              placeholder="1234 Main St"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+52..."
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Estado</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>C.P.</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Button
            onClick={() => {
              let numeros = Math.round(Math.random() * 100);
              agregarReservacion({
                id_reservaciones: numeros,
                Nombre: form.name,
                email: form.email,
                telefono: form.phone,
                ciudad: form.city,
                dirección: form.address,
              });
              setForm({
                name: "",
                email: "",
              });
            }}
            variant="primary"
            type="submit"
          >
            Reservar
          </Button>
        </Form>
      </div>

      <footer class="footer">
        <div class="contenedor">
          <div class="barra">
            <Link to={"/"} className="logo">
              <h1 class="logo__nombre no-margin centrar-texto">
                Blog<span class="logo__bold">DeCafé</span>
              </h1>
            </Link>
            <div className="redes">
              <BsInstagram className="iconos" />
              <BsFacebook className="iconos" />
              <BsTwitter className="iconos" />
            </div>
            <nav class="navegacion">
              <Link to={"/cursos"} className="navegacion__enlace">
                Cursos
              </Link>

              <Link to={"/reservaciones"} className="navegacion__enlace">
                Reservaciones
              </Link>

              <Link to={"/menu"} className="navegacion__enlace">
                Menu
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
