import { Link } from "react-router-dom"

interface ICloseButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export const CloseButton = ({ onClick }: ICloseButtonProps) => {
  return (
    <Link className="close-button-link" to='/'><button onClick={() => onClick} type="button" className="close-button">X</button></Link>
  )
}
