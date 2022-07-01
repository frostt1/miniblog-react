// hooks
import { useState} from "react"


//css
import styles from './Register.module.css'

const Register = () => {
  return (
    <div>
      <h1 className={styles.register}>Cadastre-se para postar</h1>
      <p className={styles.register}>Crie seu usuário e compartilhe suas histórias</p>
      <form>
        <label>
          <span>Nome:</span>
          <input
          type="text"
          name="displayName"
          required
          placeholder='Nome do usuário' />
        </label>
        <label>
          <span>E-mail:</span>
          <input
          type="email"
          name="email"
          required
          placeholder='E-mail do usuário' />
        </label>
        <label>
          <span>Senha:</span>
          <input
          type="password"
          name="password"
          required
          placeholder='Insira sua senha' />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
          type="password"
          name="ConfirmedPassword"
          required
          placeholder='Confirme sua senha' />
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  )
}

export default Register