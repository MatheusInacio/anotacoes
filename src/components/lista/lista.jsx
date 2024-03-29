import React, { Component } from "react";
import Card from "../card/card";
import "./style.css";

export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((note, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              {/* <div>{categoria}</div> */}
              <Card
                index={index}
                titulo={note.title}
                text={note.text}
                deleteNote={this.props.deleteNote}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
