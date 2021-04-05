import {useEffect, useLayoutEffect, useState, useRef} from "react"
import {Router, useRouter} from "next/router"
import Layout from "../components/layout"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import MyImage from "../components/image"

export default function Anzan(){
  const numbers = [
                ["0", "零"], 
                ["1", "一", "壱", "Ⅰ"],
                ["2", "二", "弐", "Ⅱ"],
                ["3", "三", "参", "Ⅲ"],
                ["4", "四", "肆", "Ⅳ"],
                ["5", "五", "伍", "Ⅴ"],
                ["6", "六", "陸", "Ⅵ"],
                ["7", "七", "漆", "Ⅶ"],
                ["8", "八", "捌", "Ⅷ"],
                ["9", "九", "玖", "Ⅸ"]
              ]
  const [baseTimer, setBaseTimer] = useState(0)
  const [answer, setAnswer] = useState(0)
  const [testAnswer, setTestAnswer] = useState(0)
  const [result, setResult] = useState("")
  const [ansCount, setAnsCount] = useState(1)
  const [blinkingInterval, setBlinkingInterval] = useState("")
  const [d1, setD1] = useState(null)
  const [d2, setD2] = useState(null)
  const [d3, setD3] = useState(null)
  const [problemsCount, setProblemsCount] = useState(0)
  const [gap, setGap] = useState(0)
  const [test, setTest] = useState(0)
  const [canSubmit, setCansubmit] = useState(false)
  const numOfProblems = 5
  const router = useRouter()
  const mode = router.query.mode

  //0.25sで常にカウントさせ、待機時間やmodeによる出題間隔をcontrol
  useEffect(() =>{
    setD2(3)
    const baseTimerInterval = setInterval(() =>{
        setBaseTimer(basetimer => basetimer + 1)
    }, 250)
    return () => clearInterval(baseTimerInterval)
  }, [])

  useEffect(() =>{
    if (baseTimer>0 && baseTimer%4===0 && d2>1){
      setD2(d2 => d2 - 1) 
    }
    if(0<gap && gap+3<=baseTimer){
      setD2("")
      setGap(0)
      setProblemsCount(1)
      setTest(baseTimer)
    }
    if (gap===0 && d2===1){
      setGap(baseTimer)
    }
    if ((baseTimer - test)%blinkingInterval == 0){
      if (0<problemsCount && problemsCount < 6){  //5問出す
        setTest(baseTimer)
        Problems()
        setProblemsCount(problemsCount => problemsCount + 1)
      }
      if (5<problemsCount){
        setD1("")
        setD2("")
        setD3("")
        setCansubmit(true)
      }
    }
  }, [baseTimer])

  useEffect(() =>{
    switch (mode){
      case "Easy":
        setBlinkingInterval(8)
        break
      case "Normal":
        setBlinkingInterval(4)
        break
      case "Hard":
        setBlinkingInterval(2)
        break
      default:
    }
  }, [])

  function Problems(){
    let problem
    let rnd
    let s = []
    switch (mode){
      case "Easy":
        problem = Math.floor(Math.random() * 9) + 1
        rnd = Math.floor(Math.random() * numbers[problem].length)
        setD1(numbers[problem][rnd])
        setTestAnswer(testAnswer + problem)
        break
      case "Normal":
        problem = Math.floor(Math.random() * 90) + 10
        rnd = Math.floor(Math.random() * numbers[Math.floor(problem)%10].length)
        setD1(numbers[Math.floor(problem)%10][rnd])
        rnd = Math.floor(Math.random() * numbers[Math.floor(problem/10)%10].length)
        setD2(numbers[Math.floor(problem/10)%10][rnd])
        setTestAnswer(testAnswer + problem)
        break
      case "Hard":
        problem = Math.floor(Math.random() * 900) + 100
        rnd = Math.floor(Math.random() * numbers[Math.floor(problem)%10].length)
        setD1(numbers[Math.floor(problem)%10][rnd])
        rnd = Math.floor(Math.random() * numbers[Math.floor(problem/10)%10].length)
        setD2(numbers[Math.floor(problem/10)%10][rnd])
        rnd = Math.floor(Math.random() * numbers[Math.floor(problem/100)%10].length)
        setD3(numbers[Math.floor(problem/100)%10][rnd])
        setTestAnswer(testAnswer + problem)
        break
      default:
    }
  }

  const onChange = (e) =>{
    setAnswer(e.target.value)
  }
/*  const onKeyPress = (e) =>{
    if (e.key == "Enter") doCheck(e)
  }
*/
  function doClear(){
    setD2(3)
    setGap(0)
    setProblemsCount(0)
    setTestAnswer(0)
    setCansubmit(false)
    setBaseTimer(0)
  }
  const doCheck = (e) =>{
    setD2("")
    let newresult
    if (answer == testAnswer) newresult = result + "◯"
    else newresult = result + "Ｘ"
    setResult(newresult + ",")
    setAnsCount(ansCount => ansCount + 1)
    if(ansCount === numOfProblems){
      console.log(result)
      sessionStorage.setItem('f354e0df8545a73422ad37b9f7fb1cf2', newresult);
      router.push("./result")
    }else{
      doClear()
    }
  }

  const buttonComponent = (() =>{
    return (
      <>
      {
        canSubmit ? 
        <>
          <input type="text" className="" onChange={onChange} />
          <button className="btn btn-info " onClick={doCheck}>解答する</button>
        </>
        :
        <>
          <input type="text" className="" value="" onChange={onChange} />
          <button className="btn btn-info " disabled onClick={doCheck}>解答する</button>
        </>
      }
      </>
    )
  })

  return (
    <div>
      <Layout header="Parse Flash Anzan" help="what's?" title="パーズフラッシュ暗算">
        <div className="bg-primary mt-5 w-75 mx-auto">
          <table className="table table-borderless mt-4 text-white text-center mx-auto w-50">
            <tbody>
              <tr>
                <td>{d3}</td>
                <td>{d2}</td>
                <td>{d1}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-75 mx-auto d-flex justify-content-center">
          {buttonComponent()}
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
