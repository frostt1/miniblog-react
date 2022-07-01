// hooks
import { useState} from "react"


//css
import styles from './Register.module.css'

const Register = () => {

  // states p/ controle de inputs

  const [ displayName, setDisplayName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmedPassword, setConfirmedPassword ] = useState('')

  const [ error, setError ] =useState('')


  // envio do form
  const handleSubmit = (e) => {
      e.preventDefault()

      setError('')

  // criacao de usuário
  const user = {
    displayName: displayName,
    email: email,
    password: password,
  }

  // checagem de senhas
  if( password !== confirmedPassword){
    setError("As senhas precisam ser iguais!")
    return
  }



  }


  return (
    <div>
      <h1 className={styles.register}>Cadastre-se para postar</h1>
      <p className={styles.register}>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
          type="text"
          name="displayName"
          required
          placeholder='Nome do usuário'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)} />
        </label>
        <label>
          <span>E-mail:</span>
          <input
          type="email"
          name="email"
          required
          placeholder='E-mail do usuário'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
           />
        </label>
        <label>
          <span>Senha:</span>
          <input
          type="password"
          name="password"
          required
          placeholder='Insira sua senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
          type="password"
          name="ConfirmedPassword"
          required
          placeholder='Confirme sua senha'
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)} />
        </label>
        <button className="btn">Cadastrar</button>
        { error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Register