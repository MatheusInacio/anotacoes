import React, { Component } from "react";
import "./style.css";
import deleteImg from "../../assets/img/trash-solid.svg";

export default class Card extends Component {

  delete() {
    const index = this.props.index;
    this.props.deleteNote(index);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <img src={deleteImg} alt="" onClick={this.delete.bind(this)} width="40" height="40" />
        </header>
        <p className="card-nota_texto">{this.props.text}</p>
      </section>
    );
  }
}
