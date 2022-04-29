import React, { Component } from "react";
import Card from "../card/card";
import "./style.css";

export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
       {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
           return (
            <li className="lista-notas_item" key={index}>
                {/* <div>{categoria}</div> */}
                <Card />
            </li>
           );

       })}
      </ul>
    );
  }
}
