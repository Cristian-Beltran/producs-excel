'use client'
function CreateElement(props){
    // este componente se esta utilizando para tomar 4 datos especificos , 1ro .- descargar el excel , 2.- subir el excel ,3.- añadir un producto ,4.- añadir una categoria
    const handleClick=()=>{
        console.log(props.name);
    }
    return<>
        <button onClick={handleClick}>
            {props.name}
        </button>
    </>
}
export default CreateElement