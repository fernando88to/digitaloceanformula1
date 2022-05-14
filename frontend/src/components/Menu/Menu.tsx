import Link from "next/link";
import style from "./Menu.module.css";
import {useState} from "react";


interface PropsMenu {
    isButtonBack?: boolean;
}

export const Menu = (props:PropsMenu) => {


    return (
        <div className={style.menu}>
            <Link href="/championship">
                <button className={style.mybutton}>Championship</button>
            </Link>

            {props.isButtonBack && <Link href="/">
                <button className={style.mybutton}>Back</button>
            </Link>}

        </div>
    );
};

export default Menu;