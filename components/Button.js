function Button({ buttonText, onClickHandler }){

    return(
        
        <button 
        onClick={onClickHandler}
         
        className="
        bg-red-300 
        hover:-translate-y-1 
        hover:scale-110
        hover:bg-indigo-500
        text-white
        font-bold
        py-6
        px-6
        rounded-full
        m-2
        transition-colors
        duration-800
        ease-in-out
        animate-bounce
        "
         >
            {buttonText}
        </button>
    );
} 

export default Button;