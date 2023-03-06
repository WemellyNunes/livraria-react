import './styles.css';

function Rodape(){
    return(
        <footer className="footer">

            {/* <img className='fund' src="./imagens/fundo.png" alt="nao encontrada a foto"/> */}
            <div className='ico'>
                <div><img src='./img/fb.png'/></div>
                <div><img src='./img/tw.png'/></div>
                <div><img src='./img/ig.png'/></div>
            </div>
            <div className='auto'>
                <h4>Created by Diogo Alvino and Wemelly Nunes</h4>
            </div>
        </footer>

    )
}

export default Rodape;