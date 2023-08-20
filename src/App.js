import { useEffect, useState } from "react";
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
      <h3>Check Pattern E-mail</h3>
      <input type="text" onChange={(e) => setMail(e.target.value)} style={isValid ? {borderColor : 'green'} : {borderColor : "red"} } />
      {isValid && 
      <>
        <h3 className="msg-success">Is Valid</h3>
        <button className="btn-success">Submit</button>
      </>
      }
      {!isValid && <h3 className="msg-error">Is Not Valid</h3>}
    </div>
  );
}

export default App;
