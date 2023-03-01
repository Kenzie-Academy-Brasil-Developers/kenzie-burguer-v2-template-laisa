import { UseFormRegister } from 'react-hook-form';
import { StyledFieldset } from './style';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInputProps
{
  name: string;
  label: string;
  type: 'text' | 'email' | 'password';
  defaultValue?: string;
  register: UseFormRegister<any>;
  error: any;
}

const Input = (({ name, label, type, defaultValue, error, register } : IInputProps) => (
  <StyledFieldset>
    <StyledTextField label={label} type={type} defaultValue={defaultValue} {...register(name)} />
    {error && <StyledParagraph fontColor='red'>{error.message}</StyledParagraph>}
  </StyledFieldset>
));

export default Input;