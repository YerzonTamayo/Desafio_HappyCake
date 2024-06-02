import React from "react";
export default function Home() {
  return (
    <div className="contentHome">
      <div className="titulos">
        <p className="title">Bienvenido a <strong>Happy Cake</strong></p>
        <p className="contenido">El lugar de los pasteles felices</p>
      </div>
      <div className="imagen">
        <img
          src="src\assets\img\cartoon-cake-ai-generative-free-png.webp"
          alt=""
          width={350}
        />
      </div>
    </div>
  );
}
