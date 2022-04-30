import React, { Component } from "react";
import "./style.css";

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      texto: "",
    };
  }

  _handleTitle(event) {
    this.setState({
      titulo: event.target.value,
    });
  }

  _handleText(event) {
    this.setState({
      texto: event.target.value,
    });
  }

  _createCard(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createCard(this.state.titulo, this.state.texto);
    this.setState({
      titulo: "",
      texto: "",
    });
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._createCard.bind(this)}>
        <input
          value={this.state.titulo}
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleTitle.bind(this)}
        />
        <textarea
          value={this.state.texto}
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
