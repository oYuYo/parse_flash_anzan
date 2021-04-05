import Layout from "../components/layout"
import Link from "next/link"

export default function Intro(){
  return (
    <div>
      <Layout header="Parse Flash Anzan" title="パーズフラッシュ暗算">
        <div className="bg-white mt-5 mb-5">
          <div className="h4">
            パーズフラッシュ暗算のルールはシンプルです。<br/>
            難易度によって1～3桁の非負数が表示されるので、合計した値を答えるだけです。 <br/>
            ただし数字は、アラビア数字、漢数字、ローマ数字を含み、<br/>
            これらが混合して表示されます。<br/>
            <table className="table table-borderless w-50 text-left">
              <tbody>
                <tr><td>0 :</td><td>0, 零</td></tr>
                <tr><td>1 :</td><td>1, 一, 壱, Ⅰ</td></tr>
                <tr><td>2 :</td><td>2, 二, 弐, Ⅱ</td></tr>
                <tr><td>3 :</td><td>3, 三, 参, Ⅲ</td></tr>
                <tr><td>4 :</td><td>4, 四, 肆, Ⅳ</td></tr>
                <tr><td>5 :</td><td>5, 五, 伍, Ⅴ</td></tr>
                <tr><td>6 :</td><td>6, 六, 陸, Ⅵ</td></tr>
                <tr><td>7 :</td><td>7, 七, 漆, Ⅶ</td></tr>
                <tr><td>8 :</td><td>8, 八, 捌, Ⅷ</td></tr>
                <tr><td>9 :</td><td>9, 九, 玖, Ⅸ</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <Link href="./" className="mt-3 mb-5">
          <a className="h5">&lt;&lt;Back to Main Page</a>
        </Link>
      </Layout>
    </div>
  )
}
  