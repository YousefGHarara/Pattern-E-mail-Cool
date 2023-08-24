import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./App.css";

function App() {
  const [mail, setMail] = useState("");
  const [isValid, setIsValid] = useState(false);

  function checkPatternMail(str) {
    const regex = /^\w{2,}@[A-Za-z]{2,}\.(com|org|sa)$/gi;
    return regex.test(str);
  }

  useEffect(() => {
    setIsValid(checkPatternMail(mail));
  }, [mail]);

  return (
    
    <div className="App">

      <Helmet>
        <title>Hello From Helmet</title>
        <meta name="description" content="Hello Negga" />
      </Helmet>

      <div className="style-name">
        <h2 className="name">Yousef Ghazy Harara</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="27"
          viewBox="0 0 345 27"
          fill="none"
        >
          <path
            d="M1 25C79.6042 7.64366 258.25 -16.6552 344 25"
            stroke="#0F7771"
            stroke-width="3"
          />
        </svg>
      </div>
      <h3>Check Pattern E-mail</h3>
      <input
        type="text"
        onChange={(e) => setMail(e.target.value)}
        style={isValid ? { borderColor: "green" } : { borderColor: "red" }}
      />
      {isValid && (
        <>
          <h3 className="msg-success">Is Valid</h3>
          <button className="btn-success">Submit</button>
        </>
      )}
      {!isValid && <h3 className="msg-error">Is Not Valid</h3>}
    </div>
  );
}

export default App;
