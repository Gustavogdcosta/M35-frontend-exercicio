import { ButtonContainer, ButtonLink } from './stylesButton'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void //aqui ta permitindo receber uma função que não tem argumentos
  children: string //aqui é o texto dentro do botão (pode ser qualquer nome, é só uma variável)
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        variant={variant}
        type="button"
        title={title}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
