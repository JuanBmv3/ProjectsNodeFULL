
function Button({operador, fn}) {
  return (
    <button className="h-10 w-10 flex items-center justify-center 
        font-bold text-white text-2xl bg-lime-600 rounded-full hover:outline-none hover:rin-2 hover:ring-offset-2 hover:ring-lime-500"
        
        onClick={fn}
    > 
      {operador}
    </button>
  )
}

export default Button
