import { Link } from "react-router-dom"
import { ListaProdutos } from "../Components/ListaProdutos"
import  "./Produtos.css";
import { FaBeer } from 'react-icons/fa';

export default function Produtos() {
  return (
    <div>
        <h1>Produtos</h1>

        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>PREÇO</th>
                <th>EDITAR / EXCLUIR</th>
            </tr>
            </thead>
            <tbody>
            {ListaProdutos.map((produto,indice)=>(
                 <tr key={indice}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                    <td><Link to={`/editar/produtos/${produto.id}`}><FaBeer/></Link> | <Link to={`/excluir/produtos/${produto.id}`}>Excluir</Link></td>
                 </tr>
            ))}
        </tbody>
        <tfoot>
        <tr>
           <td colSpan={4}>PRODUTOS</td>
        </tr>
        </tfoot>
        </table>
        
    </div>
  )
}
