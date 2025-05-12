"use client";
export function Btns() {
  return (
    <div
      style={{
        margin: "1rem",
        display: "flex",
        justifyContent: "center",
        fontSize: "2rem",
      }}
    >
      <button
        className={"button"}
        style={{
          background: "#03C73C",
          color: "#fff",
        }}
        onClick={() => window.open("https://naver.me/x7nG7Ji1")}
      >
        네이버지도에서 보기
      </button>
      <button
        className={"button"}
        style={{
          background: "#FAE100",
        }}
        onClick={() => {
          window.open("https://place.map.kakao.com/24047600");
        }}
      >
        카카오맵에서 보기
      </button>
    </div>
  );
}
