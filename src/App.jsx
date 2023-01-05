import { useEffect, useState } from "react";
import "./App.css";
import Editor from "./component/Editor";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

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
