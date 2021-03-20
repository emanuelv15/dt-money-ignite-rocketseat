import { Container } from "./styles";

import icomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={icomeImg} alt="icome" />
                </header>
                <strong>R$1000</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="icome" />
                </header>
                <strong>R$1000</strong>
            </div>

            <div className="total-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="icome" />
                </header>
                <strong>R$1000</strong>
            </div>
        </Container>
    )
}