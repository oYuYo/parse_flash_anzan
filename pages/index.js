import {useEffect, useState, useRef} from "react"
import {useRouter} from "next/router"
import Layout from "../components/layout"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import { normalizeConfig } from "next/dist/next-server/server/config-shared"

export default function Home(){
  const [mode, setMode] = useState("Normal")
  const router = useRouter()

  const doStartAction = (e) => {
    router.push({
      pathname: "./anzan",
      query: {mode: mode}
    })
  }
  const doSetMode = (e) => {
    setMode(e.target.value)
  }
  return (
    <div>
      <Layout header="Parse Flash Anzan" help="what's?" title="パースフラッシュ暗算">
        <div className="bg-primary mt-5 w-75 mx-auto">
          <table className="table table-borderless mt-4 text-white text-center mx-auto w-50">
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-around w-50 mx-auto ">
          <label><input type="radio" value="Easy" onChange={doSetMode} checked={mode=="Easy"} />Easy</label>
          <label><input type="radio" value="Normal" onChange={doSetMode} checked={mode=="Normal"} />Normal</label>
          <label><input type="radio" value="Hard" onChange={doSetMode} checked={mode=="Hard"} />Hard</label>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-info" onClick={doStartAction}><a>Start</a></button>
        </div> 
        <style jsx>{`
        table {
          height: 500px;
        }
        td{
          vertical-align: middle;
          font-size: 48pt;
        }
        `}</style>
      </Layout>
    </div>
  )
}
