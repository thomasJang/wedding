import "./page.scss";
import img from "./CNUk9psVgu.png";

export default function Home() {
  return (
    <div>
      <main>

        <div className="layer mainV5" id="main_style_5">
          <div className="inr basic light">

            <div className="row-01">
              <div className="g-wrap" data-linkname="main_text_on_23">
                <span className="g" data-linkname="main_cus_text_23">장기영</span>
                <span className="g dot" data-linkname="main_cus_text_24">♥</span>
                <span className="g" data-linkname="main_cus_text_25">구소라</span>
              </div>
              <div data-linkname="main_text_on_26">
                <div className="g2-wrap" data-linkname="main_cus_text_26">2025년 5월 31일 토요일, 낮 12시 <br/>한성교회(한성중화기독교회)
                </div>
              </div>

              <div style={{
                margin: "1rem",
                display: "flex",
                justifyContent: "center"
              }}>
                <a className={"button"} href={"https://naver.me/GOPEJku7"} target={"_blank"}>
                네이버지도에서 보기
                </a>
                <a className={"button"} href={"https://kko.kakao.com/npXP1TPjYd"} target={"_blank"}>
                카카오맵에서 보기
                </a>
              </div>
            </div>

            <div className="row-02">
              <div className="main-img-parent">
                <div className={"img"} style={{
                  backgroundImage: `url(${img.src})`
                }} />
                <div className={"img-effect"} />
              </div>
            </div>

            <div className="sectionMg introLayer">


              <div className="sectionHead anibox">
                <div className="enstr">INVITATION</div>
                <span className="name" data-linkname="introTitle">소중한 분들을 초대합니다</span>
              </div>


              <div className="introMent anibox f17">
                <div id="intro-ment-area">저희 두 사람의 작은 만남이<br/>사랑의 결실을 이루어<br/>소중한 결혼식을 올리게 되었습니다.<br/><br/>평생 서로 귀하게 여기며<br/>첫
                  마음 그대로 존중하고 배려하며 살겠습니다.<br/><br/>오로지 믿음과 사랑을 약속하는 날<br/>오셔서 축복해 주시면 더 없는 기쁨으로<br/>간직하겠습니다.
                </div>
              </div>

            </div>

            <div className="sectionMg layer layer03 ly_waytocome clearfix waytocomeSection">

              <div className="sectionHead anibox">
                <div className="enstr">LOCATION</div>
                <span className="name" data-linkname="mapTitle">오시는 길</span>
              </div>

              <div className="location_wrapper">
                <div className="tbox emp">
                  <span data-linkname="hallName">한성교회(한성중화기독교회)</span>
                  <span data-linkname="floorName"></span>
                </div>
                <div className="tbox road" data-linkname="hallLocation">서울 중구 정동길 8</div>
                <div className="tbox tel"><a className="tel" href="" data-linkname="hallTel"></a></div>
              </div>

              <div style={{
                margin: "1rem",
                display: "flex",
                justifyContent: "center"
              }}>
                <a className={"button"} href={"https://naver.me/GOPEJku7"} target={"_blank"}>
                  네이버지도에서 보기
                </a>
                <a className={"button"} href={"https://kko.kakao.com/npXP1TPjYd"} target={"_blank"}>
                  카카오맵에서 보기
                </a>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
