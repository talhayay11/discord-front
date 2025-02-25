const { useState } = window.React;
const { createRoot } = window.ReactDOM;

function Discort() {
  const [message, setMessage] = useState("Hoş geldin!");

  return (
    <div className="app">
      <h1>Discord-Like Front</h1>
      <p>{message}</p>
      <button onClick={() => setMessage("Merhaba, nasılsın?")}>
        Mesaj Değiştir
      </button>
    </div>
  );
}

// index.html'de oluşturduğumuz #root elemanını bul
const container = document.getElementById("root");
// React 18 için createRoot API'si
const root = createRoot(container);

root.render(<Discort />);