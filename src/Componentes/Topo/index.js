import Logo from '../../assets/logo.png'
import '../../Componentes/Topo/Style.css'

export default function Topo() {
    return (
        <header className='limitarSecao'>
            <div className='topo'>
                <img src={Logo} alt="Logo" />
                <nav>
                    <a href="">PRODUTOS</a>
                    <a href="">SOBRE</a>
                    <a href="">CONTATO</a>
                </nav>
            </div>

        </header>
    );
}