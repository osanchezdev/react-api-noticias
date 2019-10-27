import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
  render() {
    return (
      <div className='buscador row'>
        <div className='col s12 m8 offset-m2'>
          <form>
            <h2>Encuentra Noticias por Categoría</h2>

            <div className='input-field col s12 m8 offset-m2'>
              <select onChange={this.props.handleChange}>
                <option value='general'>General</option>
                <option value='business'>Negocios</option>
                <option value='entertainment'>Entretenimiento</option>
                <option value='health'>Salud</option>
                <option value='science'>Ciencia</option>
                <option value='sports'>Deportes</option>
                <option value='technology'>Tecnología</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Formulario.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default Formulario;
