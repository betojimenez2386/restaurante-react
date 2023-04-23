import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import imagenes from "./assets/imagenes";
import { Button } from "react-bootstrap";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

export function Menu() {
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
      <div className="menu">
        <Accordion defaultActiveKey="1" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Menú de ensaladas</Accordion.Header>
            <Accordion.Body>
              <div className="contenedor-menu">
                <section className="card">
                  <img src={imagenes.lentejas} className="contenedor-imagen" />
                  <div className="card__text">
                    <p className="text__menu">
                      con lentejas, tomate, pepino, cebolla roja, perejil y
                      aderezo de vinagreta de mostaza.<br></br>
                      <Button>odene aqui</Button>
                    </p>
                  </div>
                </section>

                <section className="card">
                  <img src={imagenes.aguacate} className="contenedor-imagen" />
                  <div className="card__text">
                    <p className="text__menu">
                      con aguacate, mango, cebolla roja y aderezo de cilantro y
                      limón.<br></br>
                      <Button>Ordene aquí</Button>
                    </p>
                  </div>
                </section>
                <section className="card">
                  <img src={imagenes.col} className="contenedor-imagen" />
                  <div className="card__text">
                    <p className="text__menu">
                      con col rizada, manzana, nueces y aderezo de vinagreta de
                      miel.<br></br>
                      <Button>Ordene aquí</Button>
                    </p>
                  </div>
                </section>
                <section className="card">
                  <img src={imagenes.fresa} className="contenedor-imagen" />
                  <div className="card__text">
                    <p className="text__menu">
                      con espinacas, fresas, nueces y aderezo de vinagreta
                      balsámica.<br></br>
                      <Button>Ordene aquí</Button>
                    </p>
                  </div>
                </section>
                <section className="card">
                  <img src={imagenes.garbanzos} className="contenedor-imagen" />
                  <div className="card__text">
                    <p className="text__menu">
                      con garbanzos, tomate, pepino, cebolla roja, perejil y
                      aderezo de aceite de oliva y limón.
                      <br></br>
                      <Button>Ordene aquí</Button>
                    </p>
                  </div>
                </section>
                <section className="card">
                  <img src={imagenes.naranja} className="contenedor-imagen" />
                  <div className="card__text">
                    <p className="text__menu">
                      con remolacha, naranja, nueces y aderezo de miel y
                      mostaza.<br></br>
                      <Button>Ordene aquí</Button>
                    </p>
                  </div>
                </section>
                <section className="card">
                  <img src={imagenes.quinoa} className="contenedor-imagen" />
                  <div className="card__text">
                    <p className="text__menu">
                      con quinoa, aguacate, tomate, pepino, cebolla roja y
                      aderezo de limón.<br></br>
                      <Button>Ordene aquí</Button>
                    </p>
                  </div>
                </section>
                <section className="card">
                  <img src={imagenes.tomate} className="contenedor-imagen" />
                  <div className="card__text">
                    <p className="text__menu">
                      con tomate, aguacate, cebolla roja, cilantro y aderezo de
                      lima.<br></br>
                      <Button>Ordene aquí</Button>
                    </p>
                  </div>
                </section>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="acordion">
              Menú de Cafe
            </Accordion.Header>
            <Accordion.Body>
              <div className="contenedor-menu">
                <section className="card">
                  <img src={imagenes.capuccino} className="contenedor-imagen" />
                  <div className="card__text">
                    <p className="text__menu">
                      CAPUCCINO CALIENTE.<br></br>
                      <Button>odene aqui</Button>
                    </p>
                  </div>
                </section>

                <section className="card">
                  <img src={imagenes.chai} className="contenedor-imagen" />
                  <div className="card__text">
                    <p className="text__menu">
                      TE CHAI.<br></br>
                      <Button>Ordene aquí</Button>
                    </p>
                  </div>
                </section>
                <section className="card">
                  <img src={imagenes.ice} className="contenedor-imagen" />
                  <div className="card__text">
                    <p className="text__menu">
                      CAFE FRIO CON PANNA.<br></br>
                      <Button>Ordene aquí</Button>
                    </p>
                  </div>
                </section>
                <section className="card">
                  <img src={imagenes.latte} className="contenedor-imagen" />
                  <div className="card__text">
                    <p className="text__menu">
                      CAFFE LATTE CON LECHE.<br></br>
                      <Button>Ordene aquí</Button>
                    </p>
                  </div>
                </section>
                <section className="card">
                  <img src={imagenes.mericano} className="contenedor-imagen" />
                  <div className="card__text">
                    <p className="text__menu">
                      CAFE AMERICANO CALIENTE.
                      <br></br>
                      <Button>Ordene aquí</Button>
                    </p>
                  </div>
                </section>
                <section className="card">
                  <img src={imagenes.popote} className="contenedor-imagen" />
                  <div className="card__text">
                    <p className="text__menu">
                      LATTE FRIO CON PANNA .<br></br>
                      <Button>Ordene aquí</Button>
                    </p>
                  </div>
                </section>
                <section className="card">
                  <img src={imagenes.popote2} className="contenedor-imagen" />
                  <div className="card__text">
                    <p className="text__menu">
                      CAFFE FRAPPE CON PANNA.<br></br>
                      <Button>Ordene aquí</Button>
                    </p>
                  </div>
                </section>
                <section className="card">
                  <img src={imagenes.mocha} className="contenedor-imagen" />
                  <div className="card__text">
                    <p className="text__menu">
                      CAFE MOCHA CON PANNA Y CHOCOLATE.<br></br>
                      <Button>Ordene aquí</Button>
                    </p>
                  </div>
                </section>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
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

//export default FlushExample;
