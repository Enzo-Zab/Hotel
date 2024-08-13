import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <div className="align">
          <h1 className='bigger'>Detalhes do Hóspede</h1>
          
          <form className="form">
            <div>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder='Nome' />
            </div>
            <div>
              <label htmlFor="phone">Telefone</label>
              <input type="tel" id="phone" placeholder='Telefone' />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder='Email' />
            </div>
            <div>
              <label htmlFor="country">País</label>
              <input type="text" id="country" placeholder='País' />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" placeholder='Senha' />
            </div>
            <button type="submit" className="register-button">Cadastrar</button>
          </form>
          
          <p>Já tem uma conta? <a className='link' href="#">Entrar</a></p>
        </div>
      </div>
    </>
  )
}

export default App
