import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  container: HTMLElement | null;
  coffees = [
    { name: "Expresso", image: "../../../assets/images/coffee1.jpg" },
    { name: "Turco", image: "../../../assets/images/coffee2.jpg" },
    { name: "Moka", image: "../../../assets/images/coffee3.jpg" },
    { name: "Latte", image: "../../../assets/images/coffee4.jpg" },
    { name: "Con Leche", image: "../../../assets/images/coffee5.jpeg" },
    { name: "Capuchino", image: "../../../assets/images/coffee6.jpeg" },
    { name: "Americano", image: "../../../assets/images/coffee7.jpeg" },
    { name: "Irlandes", image: "../../../assets/images/coffee8.jpg" },
    { name: "De Olla", image: "../../../assets/images/coffee9.jpg" }
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
