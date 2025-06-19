import { useRef, useState, useEffect } from "react";
import FormularioUsuario from "../components/FormularioUsuario";
import "./reconocimientoFacial.css";
import { Header } from "../components/NavBarPrincipal";
import { Footer } from "../components/Footer";
import { FaUpload } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";

const dataUrl = ["/1.png", "/2.png", "/3.png"];
const optionsUsers = [
  {
    label: "Tomar Foto",
    icon: <MdAddAPhoto size={24} />,
    action: "takePhoto",
  },
  {
    label: "Subir Imagen",
    icon: <FaUpload size={24} />,
    action: "uploadImage",
  },
];

const ReconocimientoFacial = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const cerrarFormulario = () => {
    setMostrarFormulario(false);
  };

  const [image, setImage] = useState([]);

  return (
    <>
      <div className="h-screen max-h-screen block overflow-hidden relative ">
        <BackgroundContainer />
        <Header />

        <section className="section-facial h-full w-full flex flex-col  ">
          <header className="flex flex-col items-center justify-center mb-6">
            <h1 className="text-4xl font-bold text-white text-center mt-8 mb-4">
              Reconocimiento Facial
              <span className="text-pink-500"> ICC</span>
              <span className="text-pink-500"> 2024</span>
            </h1>
          </header>

          <hr className="text-white bg-white mb-10" />

          <div className="flex px-4 py-2 gap-10 flex-col md:flex-row h-full w-full ">
            {/* Columna izquierda */}
            <ReconocimientoFacialContainer setImage={setImage} />
            {/* Columna derecha */}
            <TakePhotoContainer image={image} />
          </div>
        </section>

        {/* Formulario */}
        <FormularioUsuario
          visible={mostrarFormulario}
          onClose={cerrarFormulario}
        />
      </div>
      <Footer />
    </>
  );
};

export const BackgroundContainer = () => (
  <div className="inset-0 fixed -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
);

export const ReconocimientoFacialContainer = ({ setImage }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

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
    setImage((prevImages) => [
      ...prevImages,
      dataUrl[Math.floor(Math.random() * dataUrl.length)],
    ]);
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
  return (
    <article className="flex flex-col">
      <div className="relative flex items-center justify-center h-full bg-gray-300 rounded-lg shadow-lg overflow-hidden">
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

        <div className="absolute bottom-4 flex items-center justify-center w-full flex-nowrap">
          {optionsUsers.map((option, index) => (
            <button
              key={index}
              aria-label={option.label}
              onClick={option.label === "Tomar Foto" ? takePhoto : null}
              className="px-4 py-4 bg-blue-500 cursor-pointer text-white rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors duration-300 mr-2 selected"
            >
              {option.icon}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex gap-6 items-center hidden">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
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
  );
};

export const TakePhotoContainer = ({ image = [] }) => {
  const [imagesPerPage, setImagesPerPage] = useState(6);
  const containerRef = useRef(null);
  const isSelected = true;
  const calculateImagesPerPage = () => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const imageWidth = 200; // mínimo según tu CSS
    const gap = 16;

    const columns = Math.floor((containerWidth + gap) / (imageWidth + gap));
    const images = Math.max(columns * 1, 1);

    setImagesPerPage(images);
  };

  useEffect(() => {
    calculateImagesPerPage();
    window.addEventListener("resize", calculateImagesPerPage);
    return () => window.removeEventListener("resize", calculateImagesPerPage);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(calculateImagesPerPage, 100);
    return () => clearTimeout(timeout);
  }, [image.length]);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = image.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(image.length / imagesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToPrevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const goToNextPage = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [image, totalPages]);

  return (
    <article className="flex flex-col h-full justify-between">
      <div className="flex-1 overflow-y-auto ">
        <header className="text-3xl font-bold text-black mt-4 mb-4">
          <h2 className="text-center text-gray-100 mb-4 font-semibold text-2xl">
            Imágenes capturadas <strong>{image.length}</strong>
          </h2>
        </header>

        <ul className="img-container--list" ref={containerRef}>
          {currentImages.length > 0 ? (
            currentImages.map((img, index) => (
              <li key={`${img}-${index}`}>
                <div className={`img-wrapper selected`}>
                  <img
                    src={img}
                    alt={`Foto ${indexOfFirstImage + index + 1}`}
                    className="photo"
                  />
                </div>
              </li>
            ))
          ) : (
            <li className="text-center flex items-center justify-center">
              <p className="text-gray-500">
                No hay imágenes capturadas. Por favor, toma una foto o sube una
                imagen.
              </p>
            </li>
          )}
        </ul>
      </div>

      {image.length > 0 && totalPages > 1 && (
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
      )}
    </article>
  );
};

export default ReconocimientoFacial;
