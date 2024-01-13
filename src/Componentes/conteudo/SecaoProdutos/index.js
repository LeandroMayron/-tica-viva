import React from "react";
import OculosGrau from '../../../assets/oculos01.png'
import OculosTransition from '../../../assets/oculos02.png'
import OculosSol from '../../../assets/oculos03.png'
import OculosInfantil from '../../../assets/oculos04.png'

export default function SecaoProdutos(){
    return(
        <section className="limitarSecao">
            <div>
                <h2 className="subTitulo">NOSSOS PRODUTOS</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition de todos os modelos masculinos, femininos e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            </div>
            <div className="card">
                <h3>Óculos de grau</h3>
                <img src={OculosGrau} alt="Óculos de grau"/>
                <p>R$ 500,00</p>
            </div>
            <div className="card">
                 <h3>Óculos transition</h3>
                 <img src={OculosTransition} alt="Óculos transition"/>
                 <p>R$ 750,00</p>
            </div>
            <div className="card">
                <h3>Óculos de sol</h3>
                <img src={OculosSol} alt="Óculos de sol"/>
                <p>R$ 700,00</p>
            </div>
            <div>
                <h3>Óculos infantil</h3>
                <img src={OculosInfantil} alt=""/>
                <p>R$ 500,00</p>
            </div>
            <div>
                <p>Todos os nossos produtos incluem:</p>
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especias na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    );
}