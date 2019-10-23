import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTest';
  nombre;
  guess;
  chances = 5;
  numeroAdivinar = Math.floor((Math.random() * 10) + 1);
  adivino = false;
  perdio = false;
  termino = false;
  mensaje = "Suerte!";
  adivinar() {
    if (this.guess == this.numeroAdivinar) {
      this.adivino = true;
      this.termino = true;
      this.mensaje = "Ganaste!";
    }
    else {
      this.chances--;
      if (this.chances == 0) {
        this.perdio = true;
        this.termino = true;
        this.mensaje = "Perdiste!"
      } else if (this.guess < this.numeroAdivinar) {
        this.mensaje = "Más alto!"
      } else {
        this.mensaje = "Más bajo!"
      }
    }
  }
  volverAJugar() {
    this.perdio = false;
    this.chances = 5;
    this.adivino = false;
    this.termino = false;
    this.mensaje = "Suerte!";
    this.numeroAdivinar = Math.floor((Math.random() * 10) + 1);
  }
}
