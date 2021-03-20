import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Valor</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12000</td>
                        <td>Desenvolvimento</td>
                        <td>20/12/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="withdraw">R$12000</td>
                        <td>Desenvolvimento</td>
                        <td>20/12/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}