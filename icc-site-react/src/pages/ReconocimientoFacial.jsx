import { useRef, useState, useEffect } from "react";
import FormularioUsuario from "../components/FormularioUsuario";
import "./reconocimientoFacial.css";
import { Header } from "../components/NavBarPrincipal";
const dataUrl = "/1.png";

const ReconocimientoFacial = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [image, setImage] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

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
    "";
    // if (videoRef.current && canvasRef.current) {
    //   const canvas = canvasRef.current;
    //   const context = canvas.getContext("2d");
    //   context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    //   const dataUrl = canvas.toDataURL("image/png");
    //   setImage(dataUrl);
    //   setMostrarFormulario(true); // MOSTRAR FORMULARIO AL TOMAR FOTO
    // }

    setImage((prevImages) => [...prevImages, dataUrl]);
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        setMostrarFormulario(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const cerrarFormulario = () => {
    setMostrarFormulario(false);
  };

  // --- Lógica de Paginación ---
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = image.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(image.length / imagesPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="h-screen max-h-screen bg-gray-200/50">
      <BackgroundContainer />
      <Header />

      <section className="section-facial flex  relative px-4 py-2 gap-4 h-full w-full">
        <article className="flex flex-col ">
          <header>
            <h1 className="text-3xl font-bold text-black mt-4 mb-4">
              Reconocimiento Facial
            </h1>
          </header>

          {/* container video */}
          <div className="relative flex items-center justify-center w-[400px] h-[400px] bg-gray-300 rounded-lg shadow-lg overflow-hidden ">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            ></video>
            <canvas
              ref={canvasRef}
              style={{ display: "none" }}
              width="400"
              height="400"
            ></canvas>
          </div>

          <div
            className="mt-6 flex gap-6 items-center space-y-4"
            aria-label="buttons de acción"
          >
            <button
              onClick={takePhoto}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
            >
              Tomar Foto
            </button>
            <label
              htmlFor="upload"
              className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold cursor-pointer hover:bg-green-600 transition-colors duration-300"
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
        </article>

        <article className=" flex flex-col">
          <div className="w-full flex flex-col h-full">
            <header className="text-3xl font-bold text-black mt-4 mb-4">
              <h2>Imágenes capturadas</h2>
            </header>
            {/* Contenedor de imágenes con scroll */}
            <ul className="img-container--list ">
              {" "}
              {/* Ajustado para una mejor visualización de la grilla */}
              {currentImages.length > 0 ? (
                currentImages.map((img, index) => (
                  <li key={index}>
                    <img
                      src={img}
                      alt={`Foto ${indexOfFirstImage + index + 1}`}
                      className="w-full h-48 w-48 object-cover rounded-lg shadow-md" // Ajusta el tamaño de la imagen dentro de la grilla
                    />
                  </li>
                ))
              ) : (
                <li className=" text-center py-8">
                  {" "}
                  {/* Ocupa ambas columnas */}
                  <p className="text-gray-500">
                    No hay imágenes capturadas. Por favor, toma una foto o sube
                    una imagen.
                  </p>
                </li>
              )}
            </ul>

            {/* --- Controles de Paginación --- */}
            {totalPages > 1 && ( // Solo muestra la paginación si hay más de una página
              <nav className="flex justify-center items-center mt-4 space-x-2">
                <button
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition-colors duration-300"
                >
                  {"<"} Anterior
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === i + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    } transition-colors duration-300`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition-colors duration-300"
                >
                  Siguiente {">"}
                </button>
              </nav>
            )}
          </div>
        </article>
      </section>

      {/* FORMULARIO */}
      <FormularioUsuario
        visible={mostrarFormulario}
        onClose={cerrarFormulario}
      />
    </div>
  );
};

export const BackgroundContainer = () => {
  return (
    <div className=" inset-0 fixed -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
  );
};

export default ReconocimientoFacial;
