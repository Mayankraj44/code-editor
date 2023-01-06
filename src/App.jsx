import { useEffect, useState } from "react";
import "./App.css";
import Editor from "./component/Editor";
import useLocalStorage from "./hooks/useLocalStorage";

const HTML = ` <nav>
<div class="menu">
  <div class="logo">
    <p >Code Editor</p>
  </div>
  <ul>
    <li><p >Home</p></li>
    <li><p >About</p></li>
    <li><p >Services</p></li>
    <li><p >Contact</p></li>
    <li><p >Feedback</p></li>
  </ul>
</div>
</nav>
<div class="img"></div>
<div class="center">
<div class="title">Create Amazing Website</div>
<div class="sub_title">Pure HTML & CSS Only</div>
<div class="btns">
  <button>Learn More</button>
  <button>Subscribe</button>
</div>
</div>`;

const CSS = `*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins',sans-serif;
}
::selection{
  color: #000;
  background: #fff;
}
nav{
  position: fixed;
  background: #1b1b1b;
  width: 100%;
  padding: 10px 0;
  z-index: 12;
}
nav .menu{
  max-width: 1250px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.menu .logo p{
  text-decoration: none;
  color: #fff;
  font-size: 35px;
  font-weight: 600;
}
.menu ul{
  display: inline-flex;
}
.menu ul li{
  list-style: none;
  margin-left: 7px;
}
.menu ul li:first-child{
  margin-left: 0px;
}
.menu ul li p{
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
}
.menu ul li p:hover{
  background: #fff;
  color: black;
}
.img{
  background: url('img3.jpg')no-repeat;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
}
.img::before{
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.center{
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 20px;
  text-align: center;
}
.center .title{
  color: #fff;
  font-size: 55px;
  font-weight: 600;
}
.center .sub_title{
  color: #fff;
  font-size: 52px;
  font-weight: 600;
}
.center .btns{
  margin-top: 20px;
}
.center .btns button{
  height: 55px;
  width: 170px;
  border-radius: 5px;
  border: none;
  margin: 0 10px;
  border: 2px solid white;
  font-size: 20px;
  font-weight: 500;
  padding: 0 10px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
}
.center .btns button:first-child{
  color: #fff;
  background: none;
}
.btns button:first-child:hover{
  background: white;
  color: black;
}
.center .btns button:last-child{
  background: white;
  color: black;
}`;

function App() {
  const [html, setHtml] = useLocalStorage("HTML", HTML);
  const [css, setCss] = useLocalStorage("CSS", CSS);
  const [js, setJs] = useLocalStorage("JS", "");
  const [srcDoc, setSrcDoc] = useLocalStorage("SRC-DOC", "");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSrcDoc(`
      <html>
      <style>${css}</style>
      <body>${html}</body>
      <script>${js}</script>
      </html>`);
    }, [1000]);

    return () => {
      clearTimeout(timer);
    };
  }, [html, css, js]);

  return (
    <>
      <div className="pane top-pane">
        <Editor value={html} onChange={setHtml} language="xml" title={"HTML"} />
        <Editor value={css} onChange={setCss} language="css" title={"CSS"} />
        <Editor
          value={js}
          onChange={setJs}
          language="Javascript"
          title={"JS"}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          width="100%"
          height="100%"
          title="output"
          frameBorder="0"
          sandbox="allow-scripts"
        />
      </div>
    </>
  );
}

export default App;
