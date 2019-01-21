import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { FavPage } from '../fav/fav';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  info= InfoPage;
  fav= FavPage;
  favoritos_a= [];

  casas= [
    {
      id: 0,
      img: "../assets/imgs/country.jpeg",
      desc: "Departamento en renta de dos habitaciones, nivel 10, con vista privilegiada. El departamento cuenta con aire acondicionado en área social y en recámara principal, dos baños. Alberca, gimnasio.",
      colonia:"Jardines Del Country",
      precio:"$17,000.00",
      estado:"En renta.",
      recamaras:"2",
      banos:"2",
    },

    {
      id: 1,
      img: "../assets/imgs/estancia.jpg",
      desc: "Preciosa casa de lujo hecha con contenedores nuevos, acabados de lujo, griferia importada, pisos y recubrimientos italianos importados de lujo.",
      colonia:"La Estancia",
      precio:"$94,999.00 USD",
      estado:"En venta.",
      recamaras:"1",
      banos:"1.5",
    },

    {
      id: 2,
      img:"../assets/imgs/haciendita.jpg",
      desc: "La Haciendita, coto, tres recámaras, cochera doble, jardin, con vigilancia.",
      colonia: "La Haciendita",
      precio:"$1,650,000.00",
      estado: "En venta.",
      recamaras:"3",
      banos:"2",
    },

    {
      id: 3,
      img:"../assets/imgs/campestre.jpeg",
      desc: "Coto Ontario, coto con alberca, 3 rec, 2.5 wc , seminueva, cochera para 2 autos, jardin con terraza.",
      colonia: "Campestre Los Robles",
      precio: "$ 1,700,000.00",
      estado:"En venta.",
      recamaras:"3",
      banos:"2.5",
    },

    {
      id: 4,
      img:"../assets/imgs/solares.jpg",
      desc: "Nueva, minimalista, cochera para 2 autos, estudio, 5 baños, cocina integral, sala, comedor, jardín, terraza, área de servicio con entrada, 3 recámaras, principal con baño y vestidor, escalera azotea, preparada para roof garden.",
      colonia:"Solares Residencial",
      precio:"$ 4,400,000.00",
      estado: "En venta.",
      recamaras:"3",
      banos:"5",
    },

    {
      id: 5,
      img: "../assets/imgs/buga.jpeg",
      desc:"Amplia y moderna, terminados finos, en desniveles, jardín que se integra al bosque la Primavera. Escrituración inmediata. Cochera 3 autos, 3 rec, 3 baños, 2 medios baños, Cuarto TV, Estudio, Sala, Comedor, Cocina, Sótano con cuarto servicio con baño.",
      colonia:"Ciudad Bugambilias",
      precio:"$ 6,950,000.00",
      estado:"En venta.",
      recamaras:"3",
      banos:"3",
    },

    {
      id: 6,
      img: "../assets/imgs/campestre2.jpg",
      desc: "Casa Hermosa de 3 pisos, 150 m2 de Terreno, 220 m2 de Construcción, Sala a doble altura, Jardín , 3 Habitaciones, Escalera en madera y cristal, Cocina con Granito y Foil, Cuarto de Servicio, Roof Garden.",
      colonia:"El Campestre",
      precio:"$2,800,000.00",
      estado:"En venta.",
      recamaras:"3",
      banos:"3",
    },

    {
      id: 7,
      img: "../assets/imgs/virreyes.jpg",
      desc: "Hermosa residencia en coto privado con vigilancia, cerca de plaza Galerias. Con acabados en Mármol, madera Tzalam, cantera, teka, cristal templado, granito, acero inoxidable.",
      colonia:"Virreyes Residencial",
      precio:"$ $2,800,000.00",
      estado:"En venta.",
      recamaras:"4",
      banos:"4",
    },

    {
      id: 8,
      img: "../assets/imgs/victoria.jpg",
      desc: "Casa en Residencial Victoria, con 4 recámsras, 3 baños, en coto privado con vigilancia.",
      colonia:"Residencial Victoria",
      precio:"$2,400,000.00",
      estado:"En venta.",
      recamaras:"4",
      banos:"3",
    },

    {
      id: 9,
      img: "../assets/imgs/dream.jpg",
      desc: "Paseos del Sol 4 recamaras, 3 baños, 2 autos, impecable, 272 construcción, 210 terreno",
      colonia:"Paseos Del Sol",
      precio: "$ 3,950,000.00",
      estado:"En venta.",
      recamaras:"4",
      banos:"3",
    }
  ]

  constructor(public navCtrl: NavController) {

  }

  clickInfo(c)
  {
    this.navCtrl.push(this.info, {casa: c, favoritos: this.favoritos_a});
    console.log(c);
  }

  clickFav()
  {
    this.navCtrl.push(this.fav, {favoritos: this.favoritos_a});
  }

}
