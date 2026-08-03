import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";

// Remove e cancela qualquer Service Worker prévio do navegador para desativar o PWA
if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister();
    }
  });
}

// Previne a caixa de diálogo de instalação ("beforeinstallprompt") do navegador
if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
  });
}

createRoot(document.getElementById("root")!).render(<App />);