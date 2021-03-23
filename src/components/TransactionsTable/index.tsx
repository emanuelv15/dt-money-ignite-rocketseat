import { useEffect } from 'react';

import { api } from '../../services/api';
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, [])

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