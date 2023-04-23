import { Link } from "react-router-dom";
import blog2 from "./assets/blog2.jpg";
import blog1 from "./assets/blog1.jpg";
import blog3 from "./assets/blog3.jpg";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

export const Home = () => {
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
      <div class="contenedor contenido-principal">
        <main class="blog">
          <h3> Nuestro Blog</h3>

          <article class="entrada">
            <div class="entrada__imagen">
              <img loading="lazy" src={blog1} alt="imagen blog" />
            </div>

            <div class="entrada__contenido">
              <h4 class="no-margin"> Tipos de granos de Café</h4>
              <p>
                Morbi tempor ornare libero ac aliquet. Integer nec ligula eget
                ante vestibulum vulputate id et est. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Fusce erat sem, elementum at tellus vitae, suscipit porta
                sem. Cras gravida velit in vehicula porttitor. Nunc lobortis
                erat nec ex semper, eu ullamcorper dui hendrerit. Duis mollis
                nulla ligula, in tempus dolor pellentesque ut.{" "}
              </p>
              <a href="entrada.html" class="boton boton--primario">
                {" "}
                Leer Entrada
              </a>
            </div>
          </article>

          <article class="entrada">
            <div class="entrada__imagen">
              <img loading="lazy" src={blog2} alt="imagen blog" />
            </div>

            <div class="entrada__contenido">
              <h4 class="no-margin"> 3 Deliciosas Recetas de Café</h4>
              <p>
                Morbi tempor ornare libero ac aliquet. Integer nec ligula eget
                ante vestibulum vulputate id et est. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Fusce erat sem, elementum at tellus vitae, suscipit porta
                sem. Cras gravida velit in vehicula porttitor. Nunc lobortis
                erat nec ex semper, eu ullamcorper dui hendrerit. Duis mollis
                nulla ligula, in tempus dolor pellentesque ut.{" "}
              </p>
              <a href="entrada.html" class="boton boton--primario">
                {" "}
                Leer Entrada
              </a>
            </div>
          </article>

          <article class="entrada">
            <div class="entrada__imagen">
              <img loading="lazy" src={blog3} alt="imagen blog" />
            </div>

            <div class="entrada__contenido">
              <h4 class="no-margin"> Beneficios del Cafe</h4>
              <p>
                Morbi tempor ornare libero ac aliquet. Integer nec ligula eget
                ante vestibulum vulputate id et est. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Fusce erat sem, elementum at tellus vitae, suscipit porta
                sem. Cras gravida velit in vehicula porttitor. Nunc lobortis
                erat nec ex semper, eu ullamcorper dui hendrerit. Duis mollis
                nulla ligula, in tempus dolor pellentesque ut.{" "}
              </p>
              <a href="entrada.html" class="boton boton--primario">
                {" "}
                Leer Entrada
              </a>
            </div>
          </article>
        </main>
        <aside class="sidebar">
          <h3> Nuestros cursos y talleres</h3>
          <ul class="cursos no-padding">
            <li class="widget-curso">
              <h4 class="no-margin">Técnicas de Extracción de Café</h4>
              <p class="widget-curso__label">
                Precio:
                <span class="widget-curso__info">Gratis</span>
              </p>
              <p class="widget-curso__label">
                Cupo:
                <span class="widget-curso__info">20</span>
              </p>
              <a href="entrada.html" class="boton boton--secundario">
                {" "}
                Mas información
              </a>
            </li>

            <li class="widget-curso">
              <h4 class="no-margin">4 Recetas de Café Para Principiantes</h4>
              <p class="widget-curso__label">
                Precio:
                <span class="widget-curso__info">Gratis</span>
              </p>
              <p class="widget-curso__label">
                Cupo:
                <span class="widget-curso__info">20</span>
              </p>
              <a href="entrada.html" class="boton boton--secundario">
                Mas información
              </a>
            </li>
          </ul>
        </aside>
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
};
