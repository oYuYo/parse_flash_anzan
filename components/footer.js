import Head from "next/head"
import styles from "../styles/Home.module.css"
import { useRouter } from 'next/router'

export default function Footer(props){
  return(
    <div className="text-right h6 px-3">
      <span>copyright@ </span>
      <a href="https://github.com/oYuYo">
        {props.footer}
      </a>
    </div>
  )
}