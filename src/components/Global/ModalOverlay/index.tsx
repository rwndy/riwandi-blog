
interface PropsModalOverlay {
  className: string;
  onClick: () => void
}

const ModalOverlay = ({ className, onClick }: PropsModalOverlay) => {
  return (
    <div className={className} onClick={onClick} />
  )
}

export default ModalOverlay