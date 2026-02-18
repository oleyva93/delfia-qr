import { useState, useRef } from "react";
import QRCode from "qrcode";
import "../styles/QRGenerator.css";

function QRAnyGenerator() {
  const [inputText, setInputText] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const canvasRef = useRef(null);

  const generateQR = async () => {
    if (!inputText.trim()) {
      alert("Por favor ingresa un texto o URL");
      return;
    }

    setIsGenerating(true);
    try {
      // Generar el código QR
      const qrDataUrl = await QRCode.toDataURL(inputText, {
        width: 300,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      });

      // Crear un canvas para agregar el texto "BĀMA" en el centro
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // Crear una imagen del QR
      const img = new Image();
      img.onload = () => {
        // Dibujar el QR en el canvas
        canvas.width = img.width;
        canvas.height = img.height;

        // Convertir el canvas a data URL
        const finalQrUrl = canvas.toDataURL("image/png");
        setQrCodeUrl(finalQrUrl);
      };
      img.src = qrDataUrl;
    } catch (error) {
      console.error("Error generando el código QR:", error);
      alert("Error al generar el código QR");
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadQR = () => {
    if (qrCodeUrl) {
      const link = document.createElement("a");
      link.download = "qr-any.png";
      link.href = qrCodeUrl;
      link.click();
    }
  };

  return (
    <div className="qr-generator-page">
      <div className="container">
        <h1>Generador de Códigos QR</h1>
        <p className="subtitle">Sin sello en el centro</p>

        <div className="input-section">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ingresa un texto, URL o cualquier contenido..."
            rows={4}
            className="text-input text-black"
          />

          <button
            onClick={generateQR}
            disabled={isGenerating || !inputText.trim()}
            className="generate-btn"
          >
            {isGenerating ? "Generando..." : "Generar QR"}
          </button>
        </div>

        {qrCodeUrl && (
          <div className="qr-section">
            <h2>Tu código QR</h2>
            <div className="qr-container">
              <img
                src={qrCodeUrl}
                alt="Código QR"
                className="qr-image"
              />
            </div>
            <button onClick={downloadQR} className="download-btn">
              Descargar QR
            </button>
          </div>
        )}

        {/* Canvas oculto para procesamiento */}
        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>
    </div>
  );
}

export default QRAnyGenerator;
