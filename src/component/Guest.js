import "./Guest.css";
import { useState } from "react";

function App() {
  const localGuest = JSON.parse(localStorage.getItem("guset"));
  const [guest, setGuest] = useState("");
  const [guests, setGuests] = useState(localGuest ? localGuest : []);

  const createGuset = (e) => {
    e.preventDefault();
    if (guest === "") {
      alert("댓글을 작성해주세요.");
    } else {
      setGuests((list) => {
        const newList = [...list, { value: guest }];
        localStorage.setItem("guset", JSON.stringify(newList));
        return newList;
      });
      setGuest("");
    }
  };

  const deleteGuset = (index) => {
    setGuests((list) => {
      const newList = [...list];
      newList.splice(index, 1);
      localStorage.setItem("guset", JSON.stringify(newList));
      return newList;
    });
  };

  return (
    <>
      <div className="input-box">
        <form onSubmit={createGuset}>
          <input
            placeholder="뮤직월드는 어떠셨나요? 댓글을 작성해주세요~"
            value={guest}
            type="text"
            onChange={(e) => {
              setGuest(e.target.value);
            }}
          />
          <button type="submit">추가</button>
        </form>
      </div>

      <div>
        {guests.map((item, index) => (
          <div className="input-list" key={index}>
            <div className="input-text">{item.value}</div>
            <div className="deleteGuest">
              <button type="button" onClick={() => deleteGuset(index)}>
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
