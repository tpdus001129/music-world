import "./Home.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Home() {
  //좋아요
  const [like, setLike] = useState(() =>
    JSON.parse(localStorage.getItem("heart"))
  );
  // 이미지
  const [imageupload, setImageupload] = useState("");
  const imgFile = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageupload(reader.result);
        resolve();
      };
    });
  };
  const deleteImg = () => {
    setImageupload("");
  };

  //메세지
  const localMessage = localStorage.getItem("message");
  const [message, setMessage] = useState(localMessage ? localMessage : "");

  const onChangeM = (e) => {
    setMessage(e.target.value);
  };
  const saveMessage = () => {
    if (message === "") {
      alert("메세지를 입력해주세요.");
    } else {
      alert("메세지 수정 완료");
      localStorage.setItem("message", message);
    }
  };
  const deleteMessage = () => {
    setMessage("");
    alert("메세지 삭제 완료");
    localStorage.removeItem("message");
  };

  //유튜브
  const addressTest = /^(http:|https:)?(\/\/)?(www\.)?(youtube.com)\/(embed)/;
  const localVideo = localStorage.getItem("video");
  const [video, setVideo] = useState(
    localVideo ? localVideo : ["https://www.youtube.com/embed/Km71Rr9K-Bw"]
  );
  const [video2, setVideo2] = useState("");
  const onChangeV = (e) => {
    setVideo2(e.target.value);
  };
  const changeVideo = (e) => {
    e.preventDefault();
    if (false === addressTest.test(video2)) {
      alert("알맞은 주소를 작성해주세요.");
      setVideo2("");
    } else {
      alert("뮤직 수정 완료");
      setVideo(video2);
      setVideo2("");
      localStorage.setItem("video", video2);
    }
  };
  const deleteVideo = (e) => {
    e.preventDefault();
    alert("뮤직 삭제 완료");
    setVideo("");
    setVideo2("");
    localStorage.removeItem("video");
  };

  return (
    <>
      <div className="home-box">
        <nav>
          <div className="profile">
            {imageupload && <img src={imageupload} />}
          </div>
          <div className="nav-space">
            <div className="heart-space">
              <FontAwesomeIcon
                icon={faHeart}
                className="faHeart"
                onClick={() => {
                  setLike(like + 1);
                  localStorage.setItem("heart", JSON.stringify(like + 1));
                }}
              />
              &nbsp;: {like}
            </div>
            <form>
              <label className="img-change" htmlFor="img-change">
                프로필 수정
              </label>
              <input
                type="file"
                id="img-change"
                accept="image/*"
                onChange={(e) => {
                  imgFile(e.target.files[0]);
                }}
              />
              <button type="button" className="img-delete" onClick={deleteImg}>
                삭제
              </button>
            </form>
          </div>
          <div className="message">
            <p>오늘의 메세지</p>
            <form className="message-form">
              <textarea
                rows="5"
                onChange={onChangeM}
                value={message}
              ></textarea>
              <button type="button" onClick={saveMessage}>
                저장
              </button>
              <button type="button" onClick={deleteMessage}>
                삭제
              </button>
            </form>
          </div>
        </nav>

        <main>
          <h2>오늘의 추천 뮤직</h2>
          <div className="youtube">
            <iframe
              width="560"
              height="315"
              src={video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write;
              encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="iframe-code">
            <form onSubmit={changeVideo}>
              <textarea
                rows="4"
                placeholder="자세한 수정 방법은 메뉴 - 도움말을 참고하세요."
                onChange={onChangeV}
                value={video2}
              />
              <button type="submit" className="change-youtube">
                수정
              </button>
            </form>
            <button onClick={deleteVideo}>삭제</button>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
