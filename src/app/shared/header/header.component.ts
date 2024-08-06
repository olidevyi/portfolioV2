import { Component } from "@angular/core";

@Component({
  selector: 'shared-header',
  template: `
  <div class="contenedor-header">
    <header>
      <div class="logo">
        <a href="#">oliver</a>
      </div>
      <nav id="nav">
        <ul>
          <li><a href="#inicio">inicio</a></li>
          <li><a href="#sobremi">sobre mi</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#curriculum">curriculum</a></li>
          <li><a href="#portfolio">portfolio</a></li>
          <li><a href="#contacto">contacto</a></li>
        </ul>
      </nav>
      <div class="nav-responsive">
        <i class="fa-solid fa-bars"></i>
      </div>
    </header>
  </div>
  `,
  styles: [`
  .contenedor-header {
    background: #1e2326;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99;
  }

  .contenedor-header header {
    max-width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
  }

  .contenedor-header header .logo a {
    font-family: 'Righteous';
    font-size: 36px;
    color: #1CB698;
    text-decoration: none;
  }

  .contenedor-header header ul {
    display: flex;
    list-style: none;
  }

  .contenedor-header header nav ul li a {
    text-align: none;
    color: #fff;
    margin: 0 15px;
    padding: 3px;
    transition: .5s;
    text-decoration: none;
  }

  .contenedor-header header nav ul li a:hover {
    color: #1CB698;
  }

  .nav-responsive {
    background-color: #1CB698;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    display: none;
  }
    `]
})
export class HeaderComponent {

}
