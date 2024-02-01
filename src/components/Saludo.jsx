
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";


const Saludo = (props) => {
    const [change, setChange] = useState("");
  return (
    <>
      <div>
        <h1 className="text-center ">hello world!</h1>
      </div>
      <div>
        <p className="text-center">{props.myFriend}</p>
      </div>
      <div>
        <p className="text-center">{props.myFriend}{change} <button
              className="btn btn-outline-primary"
              onClick={() =>
                setChange(change === "(From Changed State)" ? "" : "(From Changed State)")}>{change === "(From Changed State)" ? "Cerrar UseState" : "Mostrar UseState"}
                </button></p>
        
      </div>
    </>
  );
};

export default Saludo;
