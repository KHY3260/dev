import HomeTitle from "./components/HomeTitle";
import AboutTItle from "./components/AboutTitle";
import HomeDescription from "./components/HomeDescription";
import AboutDescription from "./components/AboutDescription";

function App() {
  return (
    <>
      <header
        style={{
          display: "flex",
          gap: "10px",
          padding: "10px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <a href="#">Home</a>
        <a href="#about">About</a>
      </header>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <HomeTitle />
        <HomeDescription />
        <AboutTItle />
        <AboutDescription />
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=2528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={250}
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={250}
          />
          <img
            src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={250}
          />
        </div>
      </main>
    </>
  );
}

export default App;
