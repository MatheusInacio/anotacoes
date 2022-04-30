import logo from "./logo.svg";
import "./App.css";
import ListaDeNotas from "./components/lista/lista";
import Formulario from "./components/formulario/formulario";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.notes = [];
    this.state = {
      notes: [],
    };
  }

  createCard(title, text) {
    // console.log("nova nota criada");
    const newNote = { title, text };
    const newNoteArray = [...this.state.notes, newNote];
    const newState = {
      notes: newNoteArray,
    };
    this.notes.push(newNote);
    // console.log(this.notas);
    this.setState(newState);
  }

  deleteNote(index) {
    // console.log("deletar");
    this.notes.splice(index, 1);
    this.setState({
      notes: this.notes,
    });
  }

  render() {
    return (
      <section className="conteudo">
        <Formulario createCard={this.createCard.bind(this)} />
        <ListaDeNotas
          notas={this.notes}
          deleteNote={this.deleteNote.bind(this)}
        />
      </section>
    );
  }
}

export default App;
