import "./App.css";
import Editor from "./component/Editor";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  return (
    <div className="App">
      <div>
        <Editor />
        <Editor />
        <Editor />
      </div>
      <div>
        <iframe
          width="100%"
          height="100%"
          title="output"
          frameBorder="0"
          sandbox="allow-scripts"
        />
      </div>
    </div>
  );
}

export default App;
