import "./index.css";
import {useState} from 'react';
import InputText from '../InputText';
import Dropdown from "../Dropdown";
import Button from "../Button";

const Form = (props) => {

  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [capa, setCapa] = useState('')
  const [categoria, setCategoria] = useState('')

  const Salvar = (evento) => {
     evento.preventDefault()
     props.LivroCadastrado({
      titulo,
      autor,
      capa,
      categoria
     })
  }

  return (
    <section className="formulario">
      <form onSubmit={Salvar}>
        <h2>Preencha os dados para criar o card do livro</h2>
        <InputText 
            obrigatorio={true} 
            label="Titulo" 
            placeholder="Digite o título do livro" 
            valor={titulo}
            Alterado={valor => setTitulo(valor)}
        />
        <InputText 
            obrigatorio={true} 
            label="Autor" 
            placeholder="Digite o nome do autor" 
            valor={autor}
            Alterado={valor => setAutor(valor)}
        />
        <InputText 
            label="Capa" 
            placeholder="Digite o endereço da capa"
            valor={capa}
            Alterado={valor => setCapa(valor)} 
        />
        <Dropdown 
            obrigatorio={true} 
            label='Categoria' 
            itens={props.categorias}
            valor={categoria}
            Alterado={valor => setCategoria(valor)}
        />
        <Button>
           Criar Card
        </Button>
      </form>
    </section>
  );
};

export default Form;
