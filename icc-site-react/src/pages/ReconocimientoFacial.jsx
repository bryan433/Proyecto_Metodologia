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
    // Lógica para tomar foto real comentada, se usa temporalmente una imagen estática
    setImage((prevImages) => [...prevImages, dataUrl]);
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage((prevImages) => [...prevImages, e.target.result]);
        setMostrarFormulario(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const cerrarFormulario = () => {
    setMostrarFormulario(false);
  };

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = image.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(image.length / imagesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToPrevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const goToNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  return (
    <div className="h-screen max-h-screen bg-gray-200/50 overflow-hidden">
      <BackgroundContainer />
      <Header />

      <section className="section-facial flex px-4 py-2 gap-4 h-full w-full">
        {/* Columna izquierda */}
        <article className="flex flex-col">
          <header>
            <h1 className="text-3xl font-bold text-black mt-4 mb-4">
              Reconocimiento Facial
            </h1>
          </header>

          <div className="relative flex items-center justify-center w-[400px] h-[400px] bg-gray-300 rounded-lg shadow-lg overflow-hidden">
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

          <div className="mt-6 flex gap-6 items-center">
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

        {/* Columna derecha */}
        <article className="flex flex-col flex-1 h-full justify-between">
          <div className="flex-1 overflow-y-auto pr-2">
            <header className="text-3xl font-bold text-black mt-4 mb-4">
              <h2>Imágenes capturadas</h2>
            </header>

            <ul className="img-container--list grid grid-cols-3 gap-4">
              {currentImages.length > 0 ? (
                currentImages.map((img, index) => (
                  <li key={index}>
                    <img
                      src={img}
                      alt={`Foto ${indexOfFirstImage + index + 1}`}
                      className="h-48 w-48 object-cover rounded-lg shadow-md"
                    />
                  </li>
                ))
              ) : (
                <li className="text-center py-8 col-span-3">
                  <p className="text-gray-500">
                    No hay imágenes capturadas. Por favor, toma una foto o sube una imagen.
                  </p>
                </li>
              )}
            </ul>
          </div>

          {/* Paginación fija debajo */}
          {totalPages > 1 && (
            <>
            {console.log("mostrando paginacion")}
            <nav className="flex justify-center items-center mt-2 space-x-2 py-2 bg-white/60 backdrop-blur rounded-md shadow-md">
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
            </>
          )}
        </article>
      </section>

      {/* Formulario */}
      <FormularioUsuario visible={mostrarFormulario} onClose={cerrarFormulario} />
    </div>
  );
};

export const BackgroundContainer = () => (
  <div className="inset-0 fixed -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
);

export default ReconocimientoFacial;
