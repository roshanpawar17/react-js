import style from "./ConditionalClasses.module.css";

const ConditionalClasses = () => {

    const isActive = true;

    return (
        <button className={`${isActive ? style.active : style.inactive} ${style.button} button-width`}>Button</button>
    )
}

export default ConditionalClasses;