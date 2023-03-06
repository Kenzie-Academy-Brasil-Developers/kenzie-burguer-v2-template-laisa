import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { IRegisterFormValues } from '../../../providers/@types';
import { UserContext } from '../../../providers/UserContext';

const schema = yup.object().shape(
  {
    name: yup.string().required('Nome obrigatório').min(3, 'O nome precisa conter pelo menos 3 caracteres').max(100, 'O nome precisa conter no máximo 100 caracteres'),

    email: yup.string().required('Email obrigatório').email('É necessário um email válido'),

    password: yup.string().required('Senha obrigatória').matches(/(\d)/, 'Deve conter ao menos 1 número')
    .matches(/[a-z]/, 'Deve conter ao menos 1 letra minúscula')
    .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
    .matches(/(\W|_)/, 'Deve conter no mínimo 1 caracter especial')
    .matches(/.{8,}/, 'Deve conter no minimo 8 caracteres'),

    confirmationPassword: yup.string().required('Confirmar senha').oneOf([yup.ref('password')], 'Confimação de senha deve ser igual a senha')
  }
)

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<IRegisterFormValues>({resolver: yupResolver(schema)});
  const { userRegister } = useContext(UserContext);
  
  return (
    <StyledForm onSubmit={handleSubmit(userRegister)}>
      <Input type='text' label='Nome' defaultValue='' name='name' register={register} error={errors.name} />
      {errors.name}
      <Input type='email' label='Email' defaultValue='' name='email' register={register} error={errors.email} />
      <Input type='password' label='Senha' defaultValue='' name='password' register={register} error={errors.password} />
      <Input type='password' label='Confirmar senha' defaultValue='' name='confirmationPassword' register={register} error={errors.confirmationPassword} />
      <StyledButton $buttonSize='default' $buttonStyle='gray' type='submit'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  )
};

export default RegisterForm;