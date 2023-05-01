import "./Help.css";

function Help() {
  return (
    <>
      <div className="help-box">
        <h2>오늘의 추천 음악 수정하는 법 ♪</h2>
        <div>
          <img src={process.env.PUBLIC_URL + "/img/help1.png"} />
          <p>1. 바꾸고 싶은 유튜브 영상에 들어가서 공유 버튼을 누른다.</p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/img/help2.png"} />
          <p>2. 퍼가기를 누른다.</p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/img/help3.png"} />
          <p>3. 사진과 같이 src "따옴표" 안의 주소를 복사한다.</p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/img/help4.png"} />
          <p>4. 홈에 붙여넣고 수정버튼을 누르면 완료.</p>
        </div>
      </div>
    </>
  );
}

export default Help;
