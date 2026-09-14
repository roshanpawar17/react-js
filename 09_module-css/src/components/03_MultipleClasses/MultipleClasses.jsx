import style from "./MultipleClasses.module.css";

const MultipleClasses = () => {
    return (
        <>
          <button className={`${style.button} ${style.primary} ${style['button-border-removal']} button-width`}>Save</button>
        </>
    )
}

export default MultipleClasses;