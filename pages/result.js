import {useEffect, useState, useRef} from "react"
import {useRouter} from "next/router"
import Layout from "../components/layout"
import styles from "../styles/Home.module.css"
import MyImage from "../components/image"
import { normalizeConfig } from "next/dist/next-server/server/config-shared"

export default function Result(){
  let result = []
  let correct
  const numOfProblems = 5
  try {
    result = sessionStorage.getItem('f354e0df8545a73422ad37b9f7fb1cf2').split(",");
    console.log(result)
    correct = result.filter(function(x){return x==="◯"}).length
    result.unshift((100 * correct)/numOfProblems)
  } catch (error) {

  }

  return (
    <div>
      <Layout header="Parse Flash Anzan" help="what's?" title="パーズフラッシュ暗算">
        <div className="mt-5 w-75 mx-auto text-center h4">
          あなたの正答率は{result[0]}％です
          <table className="table table-striped table-bordered mt-4 text-black text-center mx-auto w-50">
            <tbody>
              <tr className="bg-dark text-white">
                <td>No.</td>
                <td>Result</td>
              </tr>
              <tr>
                <td>1</td>
                <td>{result[1]}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{result[2]}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>{result[3]}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{result[4]}</td>
              </tr>
              <tr>
                <td>5</td>
                <td>{result[5]}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <style jsx>{`
        table {
          height: 500px;
        }
        tr{
        }
        td{
          vertical-align: middle;
        }
        `}</style>
      </Layout>
    </div>
  )
}