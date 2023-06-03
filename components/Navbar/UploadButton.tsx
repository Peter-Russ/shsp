import Link from "next/link";
import { FiUpload } from "react-icons/fi";
import style from "./UploadButton.module.css";

export default function UserManageHub() {

    return(
        <Link href={"/uploadVideo"} className={style.link}>
            <FiUpload  size={25}/> 
        <span className={style.span}>
            Upload  
        </span>
        </Link>
    );
}