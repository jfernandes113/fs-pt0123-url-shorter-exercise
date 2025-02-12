import { useForm } from "react-hook-form";
import axios from "axios";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = data => {
    axios.post("/api/login", data)
      .then(response => {
        // handle success
        console.log(response);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="email" ref={register} placeholder="Email" />
      <input name="password" type="password" ref={register} placeholder="Password" />
      <input type="submit" />
    </form>
  );
}

export default LoginPage;
