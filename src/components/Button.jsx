

export default function Button({ icon, title, bgcolor, textcolor, handleClick }) {
  return(
    <button
      className={`${bgcolor} ${textcolor} px-4 py-2 rounded-xl font-medium hover:opacity-80`}
      onClick={handleClick}>
      {icon} {' '}
      {title}
    </button>
  )
}