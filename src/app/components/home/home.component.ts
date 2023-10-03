import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  container: HTMLElement | null;
  coffees = [
    { name: "Brownies", image: "../../../assets/images/brownies.jpg" },
    { name: "Churros", image: "../../../assets/images/churros.jpeg" },
    { name: "Crepas", image: "../../../assets/images/crepas.jpg" },
    { name: "Flan", image: "../../../assets/images/flan.jpg" },
    { name: "Fresas Con Crema", image: "../../../assets/images/fresas.jpg" },
    { name: "Gelatina", image: "../../../assets/images/gelatina.jpg" },
    { name: "Helado", image: "../../../assets/images/helado.jpg" },
    { name: "Pay De Limon", image: "../../../assets/images/limon.jpg" },
    { name: "Uvas Con Crema", image: "../../../assets/images/uvas.jpg" }
  ];

  constructor() {
    this.container = null;
  }

  ngOnInit() {
    this.container = document.querySelector(".container");
    this.showCoffees();
  }

  showCoffees() {
    if (this.container) {
      let output = "";
      this.coffees.forEach(({ name, image }) => {
        output += `
          <div class="card">
            <img class="card--avatar" src=${image} />
            <h1 class="card--title">${name}</h1>
            <a class="card--link" href="#">Taste</a>
          </div>
        `;
      });
      this.container.innerHTML = output;
    }
  }
}
