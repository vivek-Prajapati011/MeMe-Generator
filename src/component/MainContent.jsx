import React, { useState } from "react";

const MainContent = () => {
  const [meme, setMeMe] = useState({
    imgurl: "./Akshay-Kumar-Meme-templates-15.jpeg",
    topText: "sdfsd",
    bottom: "adadf",
  });
  const submitHandler = (e) => {
    const value = e.target.value;
    setMeMe((prevMeme) => ({
      ...prevMeme,
      topText: value,
    }));
  };
  return (
    <main>
      <div>
        <label>
          {" "}
          Top Text
          <input type="text" name="Top Text" onChange={submitHandler} />
        </label>
        <label>
          {" "}
          Bottom Text
          <input type="text" name="Bottom Text" />
        </label>
        <button>Get New MeMe Images</button>
        <div className="img-container">
          <img src={meme.imgurl} />
          <span className="top">{meme.topText}</span>
          <span className="bottom">{meme.bottom}</span>
        </div>
      </div>
    </main>
  );
};
export default MainContent;
