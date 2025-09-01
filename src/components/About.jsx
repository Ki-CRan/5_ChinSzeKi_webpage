// import React from 'react'
// import Navbar from './Navbar';
import Footer from './Footer';


function About() {
  return (

    <>
        {/* <Navbar /> */}
            <section className="about" id="about">

                <h2 className="title">關於我們</h2>
                <br />
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.125736248076!2d114.22507189999999!3d22.311083999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040145637b41a7%3A0xab827da0184aef07!2z5riv5bCI6KeA5aGY5pWZ5a245Lit5b-D!5e0!3m2!1szh-TW!2shk!4v1755489611081!5m2!1szh-TW!2shk" width="600" height="450" loading="lazy" ></iframe>
                </div>
                <br/>
                <p>這網站是由ERB前端開發學生團隊製作的網站，若對網站有疑問或建議，請私訊我!</p>
                <p>ERB前端開發課程致力培育學生熟悉網頁開發中常用的工具和技術，包括HTML5、CSS3、JavaScript, 使用React.js開發前端網站, 熟悉當中網絡應用程式的各個子模組，包括架構、軟件、平台, 了解多種雲端服務在前端網絡中如何影響網上媒體的製作</p>
                <p>由於所有資料和圖片均從不同網站截取和參考及有AI從旁協助，此網站亦只用作學術用途，並無直接或間接獲取經濟利益的活動,內容亦並無確認內容的準確性，此網站所有內容只供參考。</p>

            </section>

        <Footer /> 
    </>
  )
}

export default About



