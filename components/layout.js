import Head from "next/head"
import styles from "../styles/Home.module.css"
import Header from "./header"
import Footer from "./footer"

export default function Layout(props){
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
      </Head>
      <Header header={props.header} help={props.help} />
      <div className="container">
        <h3 className="my-3 display-4 text-primary text-center">{props.title}</h3>
        {props.children}
      </div>
      <Footer footer="YuY" />
    </div>
  )
}