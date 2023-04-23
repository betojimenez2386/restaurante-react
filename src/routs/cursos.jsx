import "./cursos.css";
import curso1 from "./assets/curso1.jpg";
import curso2 from "./assets/curso2.jpg";
import curso3 from "./assets/curso3.jpg";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

export const Cursos = () => {
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
      <main class="contenedor">
        <h3 class="centrar-texto"> Nuestros Próximos Cursos y Talleres</h3>

        <div class="curso">
          <div class="curso__imagen">
            <img src={curso2} alt="imagen del curso" />
          </div>
          <div class="curso__informacion">
            <h4 class="no-margin">Técnicas de Extracción de Café</h4>
            <p class="curso__label">
              Precio:
              <span class="curso__info">Gratis</span>
            </p>
            <p class="curso__label">
              Cupo:
              <span class="curso__info">20</span>
            </p>
            <p class="curso__descripcion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut augue malesuada eros facilisis hendrerit vel sed nunc.
              Pellentesque vel nisl dapibus, porttitor tellus sodales, consequat
              lacus. Etiam efficitur nulla justo, a consectetur elit scelerisque
              non. Curabitur tincidunt elit quis placerat venenatis. Aenean
              auctor vestibulum massa, id hendrerit mauris vehicula at. Praesent
              fermentum elit in odio consectetur, tincidunt mattis leo
              fermentum. Sed ut ex justo.
            </p>
          </div>
        </div>
        <div class="curso">
          <div class="curso__imagen">
            <img src={curso1} alt="imagen del curso" />
          </div>
          <div class="curso__informacion">
            <h4 class="no-margin">Taller para Moler y Tostar Granos</h4>
            <p class="curso__label">
              Precio:
              <span class="curso__info">Gratis</span>
            </p>
            <p class="curso__label">
              Cupo:
              <span class="curso__info">20</span>
            </p>
            <p class="curso__descripcion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut augue malesuada eros facilisis hendrerit vel sed nunc.
              Pellentesque vel nisl dapibus, porttitor tellus sodales, consequat
              lacus. Etiam efficitur nulla justo, a consectetur elit scelerisque
              non. Curabitur tincidunt elit quis placerat venenatis. Aenean
              auctor vestibulum massa, id hendrerit mauris vehicula at. Praesent
              fermentum elit in odio consectetur, tincidunt mattis leo
              fermentum. Sed ut ex justo.
            </p>
          </div>
        </div>

        <div class="curso">
          <div class="curso__imagen">
            <img src={curso3} alt="imagen del curso" />
          </div>
          <div class="curso__informacion">
            <h4 class="no-margin">4 recetas de café para Principiantes</h4>
            <p class="curso__label">
              Precio:
              <span class="curso__info">Gratis</span>
            </p>
            <p class="curso__label">
              Cupo:
              <span class="curso__info">20</span>
            </p>
            <p class="curso__descripcion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut augue malesuada eros facilisis hendrerit vel sed nunc.
              Pellentesque vel nisl dapibus, porttitor tellus sodales, consequat
              lacus. Etiam efficitur nulla justo, a consectetur elit scelerisque
              non. Curabitur tincidunt elit quis placerat venenatis. Aenean
              auctor vestibulum massa, id hendrerit mauris vehicula at. Praesent
              fermentum elit in odio consectetur, tincidunt mattis leo
              fermentum. Sed ut ex justo.
            </p>
          </div>
        </div>
      </main>

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
};
