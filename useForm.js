import { useState } from "react";

export const useForm = (valorInicial = {}) => {

    const [stateForm, setStateForm] = useState(valorInicial)

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        
        setStateForm({...stateForm, [name] : value});
    }

    const formReset = () => {
        setStateForm(valorInicial);
    }

  return {
    ...stateForm,
    stateForm,
    onInputChange,
    formReset
  }
}
