import Loja from '../../../assets/loja.png'
import Atendimento from '../../../assets/atendimento.png'
import "../SecaoSobre/Style.css"

export default function SecaoSobre() {
    return (
        <section className='secaoQuemSomos  '>
            <div className='limitarSecao'>
                <h2 className='subTitulo'>QUEM SOMOS NÓS?</h2>
                <p className='paragrafoQuemSomos'>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Ótica vida iniciou as suas ativídades focando no atendimento ao público de renda mais baixa, sempre com o objstivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                <div className='cardQuemSomos'>
                    <div className='cardImg'>
                        <img src={Loja} alt="Imagem da Loja" />
                    </div>
                    <div className='cardImg'>
                        <h3>NOSSAS FILIAIS</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na Ámerica</p>
                    </div>
                    <div className='cardImg'>
                        <h3>ATENDIMENTO FLEXÍVEL</h3>
                        <p>Nossa equipe possui e é treinada para te atender</p>
                    </div>
                    <div className='cardImg'>
                        <img src={Atendimento} alt="Imagens das nossa atendente" />
                    </div>
                </div>
            </div>

        </section>

    );
}