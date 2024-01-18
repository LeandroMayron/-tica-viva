import IconeLocal from '../../../assets/local.png'
import IconeTel from '../../../assets/telefone.png'
import IconeMail from '../../../assets/email.png'
import IconeFace from '../../../assets/fb.png'
import IconeInsta from '../../../assets/ig.png'
import IconeTwiter from '../../../assets/tt.png'
import '../SecaoContato/Style.css'


export default function SecaoContato() {
    return (
        <section id='contato' className='secaoContato'>
            <div className='limitarSecao'>
                <div className='conteudoContato'>
                    <h2 className='subTitulo'>FALE CONOSCO</h2>
                    <p className='paragrafo'>Não perca tempo, venha conhecer uma das nossas lojas ou entre em contato através das nossas redes sociais ou da central de atendimento.</p>
                </div>
                <div className='areaComunicacao'>
                    <div className='containerContato'>
                        <h4>Contato</h4>
                        <figure>
                            <img src={IconeLocal} alt="Tag" />
                            <p>Nova Iguaçu - RJ</p>
                        </figure>
                        <figure>
                            <img src={IconeTel} alt="telefone" />
                            <a href="tel:2199999999">(21)9999-9999</a>
                        </figure>
                        <figure>
                            <img src={IconeMail} alt="email" />
                            <a href="mail:contato@otica.com">contato@otica.com</a>
                        </figure>
                    </div>
                    <div className='containerContato'>
                        <h4>Nossa Rede</h4>
                        <figure>
                            <img src={IconeFace} alt="icone facebook" />
                            <a href="">/OticaVida</a>
                        </figure>
                        <figure>
                            <img src={IconeInsta} alt="icone instagram" />
                            <a href="">@oticavidarj</a>
                        </figure>
                        <figure>
                            <img src={IconeTwiter} alt="icone twiter" />
                            <a href="">@oticavidarj</a>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}