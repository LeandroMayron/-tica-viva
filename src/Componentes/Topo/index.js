import Logo from '../../assets/logo.png'
import '../../Componentes/Topo/Style.css'

export default function Topo() {
    return (
        <header className='limitarSecao'>
            <div className='topo'>
                <div className='containerLogo'>
                <img src={Logo} alt="Logo" />
                </div>
                <nav>
                    <a href="#produtos">PRODUTOS</a>
                    <a href="#sobre">SOBRE</a>
                    <a href="#contato">CONTATO</a>
                </nav>
            </div>

        </header>
    );
}