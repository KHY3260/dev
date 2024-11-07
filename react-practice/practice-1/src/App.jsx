// src/App.jsx

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
        <h1 id="home">Home</h1>
        <p>
          맛과 정성이 가득한 우리 음식점에 오신 것을 환영합니다. 신선한 재료와
          숙련된 요리사들의 솜씨로 만든 최고의 요리를 즐겨보세요. 편안한
          분위기에서 가족, 친구들과 함께 특별한 시간을 보내실 수 있습니다.
          맛있는 음식과 따뜻한 서비스로 여러분의 방문을 기다리고 있습니다.
        </p>
        <h1 id="about">About</h1>
        <p>
          우리 음식점은 20년 전통의 노하우로 고객 여러분께 최고의 맛과 서비스를
          제공하고 있습니다. 엄선된 식재료와 비밀 레시피로 만든 요리는 입맛을
          사로잡을 것입니다. 가족 경영으로 운영되는 우리 식당은 고객 한 분 한
          분을 가족처럼 모시며, 항상 따뜻하고 친근한 분위기를 유지하고 있습니다.
          맛있는 음식과 함께 잊지 못할 추억을 만들어보세요.
        </p>
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
