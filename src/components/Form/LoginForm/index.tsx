import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ILoginFormValues } from '../../../providers/@types';
import { UserContext } from '../../../providers/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

const LoginForm = () => 
{
  const { register, handleSubmit, formState: { errors }} = useForm<ILoginFormValues>();
  const { userLogin } = useContext(UserContext);

  return (
    <StyledForm onSubmit={handleSubmit(userLogin)}>
      <Input type='email' label='Email' defaultValue='' name='email' register={register} error={errors.email} />
      <Input type='password' label='Senha' defaultValue='' name='password' register={register} error={errors.password} />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  )
};

export default LoginForm;