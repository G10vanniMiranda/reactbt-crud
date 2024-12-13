import { useState } from 'react'
import './App.css'

function App() {

  const [id, setId] = useState('');
  const [Produto, setProduto] = useState('');
  const [Valor, setValor] = useState('');
  const [Quantidade, setQuantidade] = useState('');
  const [Foto, setFoto] = useState('');

  const [classInserir, setClassInserir] = useState('');
  const [classSalvar, setClassSalvar] = useState('sumir');

  const Cadastrar = (e) => {
    e.preventDefault()

    if(Produto === ''){
      alert("Por favor preencha o campo nome do produto")
    }else if(Valor === ''){
      alert("Por favor preencha o valor do produto")
    }else if(Quantidade === ''){
      alert("Por favor preencha o campo quantidade do produto")
    }else if(Foto === ''){
      alert("Por favor coloque a url da foto")
    }else{
      alert("Produto cadastrado com sucesso!")
    }
  }

  return (

    <div className="container">

      <h1 className='mt-5 mb-4 text-center'>Cadastro de Produtos</h1>

      <form onSubmit={Cadastrar} className='mb-5'>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              value={Produto}
              className='form-control'
              placeholder='Nome do Produto'
              onChange={(e) => setProduto(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              value={Valor}
              placeholder='Valor'
              className='form-control'
              onChange={(e) => setValor(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              value={Quantidade}
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
              value={Foto}
              placeholder='Url da imagem'
              className='form-control'
              onChange={ (e) => setFoto(e.target.value)}
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
          <tr>
            <td scope='row'>1</td>
            <td>Dell G15</td>
            <td>$4.000</td>
            <td>6</td>

            <td>
              <img width={40} src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g15-5530/media-gallery/gray/non-touch/coral/notebook-laptop-g15-5530-gray-gallery-1-v2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=554&qlt=100,1&resMode=sharp2&size=554,402&chrss=full" alt="Imagem do produto" />
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

          <tr>
            <td scope='row'>2</td>
            <td>iPhone 15</td>
            <td>$5.000</td>
            <td>8</td>

            <td>
              <img width={40} src="https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" alt="Imagem do produto" />
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

          <tr>
            <td scope='row'>3</td>
            <td>Apple What</td>
            <td>$6.000</td>
            <td>4</td>

            <td>
              <img width={40} src="https://http2.mlstatic.com/D_NQ_NP_2X_935658-MLA80209058319_102024-F.webp" alt="Imagem do produto" />
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

          <tr>
            <td scope='row'>4</td>
            <td>Monitor Gamer</td>
            <td>$7.500</td>
            <td>2</td>

            <td>
              <img width={40} src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/alienware/aw2724dm/media-gallery/monitor-alienware-aw2724dm-black-gallery-8.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=815&qlt=100,1&resMode=sharp2&size=815,804&chrss=full" alt="Imagem do produto" />
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
        </tbody>
      </table>

    </div>
  )
}

export default App
