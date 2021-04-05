import Head from "next/head"
import styles from "../styles/Home.module.css"
import Link from "next/link"

export default function Header(props){
    return(
    <div >
      <div className="bg-dark text-white d-flex justify-content-between">
        <h1 className="px-4 h4">
          <Link href="./"><a>{props.header}</a>
          </Link>
        </h1>
          <h1 className="px-4 h4">
            <Link href="./Introduction"><a>{props.help}</a>
            </Link>
          </h1>
      </div>
    </div>
  )
}