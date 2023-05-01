import "./Top3.css";

function Top3() {
  return (
    <>
      <div className="chart-box">
        <h2>이달의 인기 뮤직 ♬</h2>
        <div className="img-box">
          <div className="out">
            <div className="medal">
              <p>1</p>
            </div>
            <div className="in">
              <img
                className="front"
                src={process.env.PUBLIC_URL + "/img/top1.jpg"}
              />
              <div className="back">
                <p>아이브 - I AM</p>
                <p>
                  "넌 그냥 믿으면 돼 <br /> 보이는 그대로야"
                </p>
              </div>
            </div>
          </div>

          <div className="out">
            <div className="medal">
              <p>2</p>
            </div>
            <div className="in">
              <img
                className="front"
                src={process.env.PUBLIC_URL + "/img/top2.jpg"}
              />
              <div className="back">
                <p>지수 - 꽃</p>
                <p>"꽃 향기만 남기고 갔단다"</p>
              </div>
            </div>
          </div>

          <div className="out">
            <div className="medal">
              <p>3</p>
            </div>
            <div className="in">
              <img
                className="front"
                src={process.env.PUBLIC_URL + "/img/top3.jpg"}
              />
              <div className="back">
                <p>뉴진스 - Ditto</p>
                <p>
                  "훌쩍 커버렸어 <br /> 함께한 기억처럼"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Top3;
