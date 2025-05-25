import React, { useRef, useState, useEffect } from "react";
import FormularioUsuario from '../components/FormularioUsuario';

const ReconocimientoFacial = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false); // NUEVO

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error al acceder a la webcam:", error);
      }
    };

    startWebcam();
  }, []);

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/png");
      setImage(dataUrl);
      setMostrarFormulario(true); // MOSTRAR FORMULARIO AL TOMAR FOTO
    }
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        setMostrarFormulario(true); // TAMBIÉN MUESTRA FORMULARIO AL SUBIR IMAGEN
      };
      reader.readAsDataURL(file);
    }
  };

  const cerrarFormulario = () => {
    setMostrarFormulario(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-950 relative">
      <h1 className="text-3xl font-bold text-white mt-4 mb-4">Reconocimiento Facial</h1>
      <div
        className="relative flex items-center justify-center"
        style={{
          width: "400px",
          height: "400px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        ></video>
        <canvas
          ref={canvasRef}
          style={{ display: "none" }}
          width="400"
          height="400"
        ></canvas>
      </div>

      <div className="mt-6 flex gap-6 items-center space-y-4">
        <button
          onClick={takePhoto}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold"
        >
          Tomar Foto
        </button>
        <label
          htmlFor="upload"
          className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold cursor-pointer"
        >
          Subir Imagen
        </label>
        <input
          id="upload"
          type="file"
          accept="image/*"
          onChange={handleUpload}
          style={{ display: "none" }}
        />
      </div>

      {image && (
        <div className="mt-6">
          <img
            src={image}
            alt="Captura"
            className="rounded-lg w-[300px] h-[200px] object-contain"
          />
        </div>
      )}

      {/* FORMULARIO */}
      <FormularioUsuario visible={mostrarFormulario} onClose={cerrarFormulario} />
    </div>
  );
};

export default ReconocimientoFacial;
