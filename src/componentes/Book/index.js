import './index.css'

const Book = (props) => {
    return(
        <div className='livro'>
            <div className='cabecalho'>
                <img src={props.capa} alt={props.autor}/>
            </div>
            <div className='rodape'>
                <h4>{props.autor}</h4>
                <h5>{props.titulo}</h5>
            </div>
        </div>
    )
}

export default Book