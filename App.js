import axios from "axios";
import { useState } from "react";
import "./App.css";
import logo from "../src/imagens/logo.png";

function App() {
  const [cnj, setCnj] = useState("");

  async function consultar() {
    try {
      const response = await axios.get(
        `https://op.digesto.com.br/api/tribproc/${cnj}?tipo_numero=8`,
        {
          headers: {
            authorization:
              "Bearer NWFmOGJhNGMtNDNlMy00MzYxLTllOWMtZjczNDU4YWI2YTVi",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    // fetch(`https://op.digesto.com.br/api/tribproc/${cnj}?tipo_numero=8`, {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     Authorization:
    //       "Bearer NWFmOGJhNGMtNDNlMy00MzYxLTllOWMtZjczNDU4YWI2YTVi",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((erro) => console.error(erro));
  }

  return (
    <main className="container">
      <img className="logo" src={logo} alt="Logo Digesto" />
      <form
        onSubmit={(eve) => {
          eve.preventDefault();
          consultar();
        }}
      >
        <div className="texto-inf">Digite no campo abaixo o número CNJ do processo: </div>
        <input
          className="caixa-texto"
          placeholder="Digite o CNJ"
          type="text"
          onChange={(eve) => setCnj(eve.target.value)}
        ></input>
        <input className="enviar" type="submit" value="Buscar"></input>
      </form>{" "}
    </main>
  );
}

export default App;
