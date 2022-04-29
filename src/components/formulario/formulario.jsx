import React, { Component } from "react";
import "./style.css";

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleTitle(event) {
    this.titulo = event.target.value;
    // console.log(this.titulo);
  }

  _handleText(event) {
    this.texto = event.target.value;
    // console.log(this.titulo);
  }

  _createCard(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createCard(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._createCard.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleText.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
