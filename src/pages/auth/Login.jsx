import { useState } from "react"

export default function Login() {
    const  [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const formHandler = (e) => {
        e.preventDefault();
        const data = {email, password};
        console.log('data berhasil', data);
    }


  return (
    <form onSubmit={(e) => formHandler(e)}>
      <label>username : </label>
      <input type="name"  value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>password: </label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    </form>
  )
}
