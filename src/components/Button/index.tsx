import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, ...rest }: IButtonProps) => {
  return (
    <ButtonContainer
      onClick={rest.onClick}
      disabled={rest.disabled}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
