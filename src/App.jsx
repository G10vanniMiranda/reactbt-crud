import './App.css'
import axios from 'axios';
import { useState, useEffect } from 'react'

function App() {

  const url = 'http://localhost:3000/produtos'

  const [id, setId] = useState('');
  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [foto, setFoto] = useState('');

  const [classInserir, setClassInserir] = useState('');
  const [classSalvar, setClassSalvar] = useState('sumir');
  const [data, setData] = useState([]);

  /** Carregar dados do banco */
  useEffect(() => {
    axios.get(url)
      .then(res => setData(res.data))
  }, [data, setData]);

  /* Inserir dados no banco */
  const Inserir = () => {
    axios.post(url, {
      produto, valor, quantidade, foto
    })
  }

  /**Cadastrando dados no banco */
  const Cadastrar = (e) => {
    e.preventDefault()

    if (produto === '') {
      alert("Por favor preencha o campo nome do produto")
    } else if (valor === '') {
      alert("Por favor preencha o valor do produto")
    } else if (quantidade === '') {
      alert("Por favor preencha o campo quantidade do produto")
    } else if (foto === '') {
      alert("Por favor coloque a url da foto")
    } else {
      alert("Produto cadastrado com sucesso!")
      Inserir()

      setProduto('')
      setValor('')
      setQuantidade('')
      setFoto('')
    }
  }

  /** Remover dados do banco */

  return (

    <div className="container">

      <h1 className='mt-5 mb-4 text-center'>Cadastro de Produtos</h1>

      <form onSubmit={Cadastrar} className='mb-5'>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              value={produto}
              className='form-control'
              placeholder='Nome do Produto'
              onChange={(e) => setProduto(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              value={valor}
              placeholder='Valor'
              className='form-control'
              onChange={(e) => setValor(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              value={quantidade}
              placeholder='Qtd'
              className='form-control'
              onChange={(e) => setQuantidade(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              value={foto}
              placeholder='url da imagem'
              className='form-control'
              onChange={(e) => setFoto(e.target.value)}
            />
          </div>
        </div>

        <button className={`btn btn-outline-success ${classInserir}`}>Inserir</button>
        <button className={`btn btn-outline-primary ${classSalvar}`}>Salvar</button>

      </form>

      <table className='table table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Nome do Produto</th>
            <th scope='col'>Valor</th>
            <th scope='col'>Qtd</th>
            <th scope='col'>Imagem</th>
            <th scope='col' className='text-center' >Ações</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td scope='row'>{item.id}</td>
              <td>{item.produto}</td>
              <td>{item.valor}</td>
              <td>{item.quantidade}</td>

              <td>
                <img
                  width={40}
                  src={item.foto}
                  alt="Imagem do produto"
                />
              </td>

              <td>

                <div className="btn-group d-flex gap-1">

                  <div className="btn btn-outline-warning">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </div>

                  <div className="btn btn-outline-danger">
                    <i className="fa-solid fa-trash"></i>
                  </div>

                </div>

              </td>

            </tr>
          ))

          }
        </tbody>
      </table>

    </div>
  )
}

export default App
