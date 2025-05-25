import React, { useRef, useState, useEffect } from "react";

const ReconocimientoFacial = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);

  // Solicitar acceso a la webcam al cargar la página
  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error al acceder a la webcam:", error);
      }
    };

    startWebcam();
  }, []); // Se ejecuta solo una vez al cargar el componente

  // Tomar una foto desde la webcam
  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/png");
      setImage(dataUrl); // Guardar la imagen tomada
    }
  };

  // Manejar la subida de una imagen
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result); // Guardar la imagen subida
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen bg-blue-950"
    >
      {/* Cuadrado con la webcam */}
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

      {/* Botones */}
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

      {/* Mostrar la imagen tomada o subida */}
      {image && (
        <div className="mt-6">
          <img
            src={image}
            alt="Captura"
            className="rounded-lg w-[300px] h-[200px] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ReconocimientoFacial;