import React from "react";
import { IForm, setForm } from "../../store/login";
import { RootState } from "../../store";
import { connect } from "react-redux";
import Input from "../../components/Input";
import MeuButton from "../../components/MeuButton";

function LoginForm({ form, setForm }: IInfo) {
  const handleOnChange = (event) => {
    setForm({ [event.target.name]: event.target.value });
  };

  const handleOnClick = async () => {    
    if(form.email === "" || form.senha === "" ){
      alert("preencha os campos")
      return;
    }    

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: form.email,
          senha: form.senha,
        }),
      });
  
      if (response.ok) {
        // Handle success (e.g., redirect, update state, etc.)
        console.log('Login successful');
      } else {
        // Handle errors (e.g., display error message)
        console.error('Login failed');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error during login:', error);
    }
  };
  

  return (
    <div className="flex justify-start flex-col w-full bg-white p-3 rounded-md">
      <h1 className="text-4xl text-black font-mono border-b border-black pb-2 w-full">
        Login
      </h1>
      <form className="mt-10 grid grid-cols-1 gap-3">
        <div className="flex flex-col gap-2">
          <label className="text-black">Email: </label>
          <Input
            type="text"
            value={form.email}
            name={"email"}
            onBlur={handleOnChange}
          />
        </div>        
        <div className="flex flex-col gap-2">
          <label className="text-black">Senha: </label>
          <Input
            type="password"
            value={form.senha}
            name={"senha"}
            onBlur={handleOnChange}
          />
        </div>        
      </form>
      <div className="flex justify-end mt-8">
        <MeuButton MeuOnClick={handleOnClick}>Login</MeuButton>        
      </div>
    </div>
  );
}

interface IProps {
  form: IForm;
}

interface IDispatchProps {
  setForm: (data: any) => void;
}

type IInfo = IProps & IDispatchProps;

const mapStateToProps = (state: RootState) => ({
  form: state.user.content,
});

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  setForm: (data: any) => dispatch(setForm(data)),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);


