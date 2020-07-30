import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
  const valoresIniciais ={
    name: '',
    description: '',
    color: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

 function setValue(chave, valor){
  setValues({
    ...values,
    [chave]: valor,   //nome: 'valor'
  })
 }

 function handleChange(infosDoEvento){
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
} 

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        
        setValues(valoresIniciais);
      }}>

         <FormField 
            label="Nome da Categoria"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
         />

            {<div>
              <label>
                Descrição:
                <textarea
                  type="text"
                  value={values.description}
                  name="description"
                  onChange={handleChange}
                />
              </label>
            </div>}

            <FormField
              label="Color"
              type="color"
              name="color"
              value={values.color}
              onChange={handleChange}
           />

            {/*<div>
              <label>
                Cor:
                <input
                  type="color"
                  value={values.color}
                  name="color"
                  onChange={handleChange}
                />
              </label>
            </div>*/ } 
          
        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return(
            <li key={`${categoria}${indice}`}>
              {categoria.name}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;