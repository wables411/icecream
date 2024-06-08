import React, { useEffect } from "react";
import { ThirdwebProvider, ConnectButton } from "@thirdweb-dev/react";
import { createWallet, walletConnect } from "@thirdweb-dev/wallets";
import "./App.css";

const client = new ThirdwebProvider({
  clientId: "YOUR_CLIENT_ID",
});

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  walletConnect(),
  createWallet("me.rainbow"),
];

function App() {
  useEffect(() => {
    const playPauseButton = document.getElementById('play-pause-button');
    const audio = document.getElementById('background-audio');
    playPauseButton.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
      } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
      }
    });

    const emojis = ['🍦', '🍧', '🍨'];
    const numEmojis = 10;
    for (let i = 0; i < numEmojis; i++) {
      let emoji = document.createElement('div');
      emoji.className = 'ice-cream-emoji';
      emoji.style.left = `${Math.random() * 100}vw`;
      emoji.style.animationDuration = `${Math.random() * 3 + 2}s`;
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      document.body.appendChild(emoji);
    }
  }, []);

  return (
    <ThirdwebProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1 className="header-title">$ICECREAM SO GOOD</h1>
          <div className="header-images">
            <img src="figmataicecream.png" alt="figmataicecream" className="header-image" />
            <img src="miladyicecreamparlor.jpeg" alt="Milady Ice Cream Parlor" className="header-image" />
            <img src="remilioicecream.png" alt="remilio Ice Cream" className="header-image" />
            <img src="strawberryicecreamsq.png" alt="ticker" className="header-image" />
          </div>
          <button id="play-pause-button" className="play-button">Play</button>
          <audio id="background-audio" loop>
            <source src="icecreamsogood.mp3" type="audio/mpeg" />
          </audio>
          <video autoPlay muted loop id="background-video">
            <source src="melting.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <ConnectButton
            client={client}
            wallets={wallets}
            theme={"dark"}
            connectButton={{ label: "Connect Wallet" }}
            connectModal={{
              size: "compact",
              titleIcon: "",
              showThirdwebBranding: false,
            }}
          />
          <button id="claim-token" className="claim-button" style={{ display: 'none' }}>Claim</button>
          <p id="message" className="message"></p>
        </header>
        <div className="content">
          <h1 className="content-title">$ICECREAM SO GOOD</h1>
          <p>🍦 𝒯𝐻𝐸 𝐿♥𝒱𝐸 𝒫𝐼𝐿𝐿𝐸𝒟 𝐼𝒞𝐸 𝒞𝑅𝐸𝒜𝑀 𝒞𝑂𝐼𝒩 𝒪𝒩 𝐵𝒜𝒮𝐸 🍦</p>
          <p>$icecream parlor under construction. come back soon for a tasty treat yum nom nom nom 🍦
            <button className="follow-button" onClick={() => window.open('https://x.com/icecream_coin', '_blank')}>follow</button>
            for all $icecream updates 🍦
          </p>
          <footer>
            🍦 CA 0x297ffE5933e02a975f413e62e9f6d903A43858b2
          </footer>
          <a href="https://tokepad.xyz/market/0xa8d54b72c0c141ef1b641d17a148422b995a2c6e" target="_blank">
            <button className="buy-button">Buy $ICECREAM Token</button>
          </a>
        </div>
      </div>
    </ThirdwebProvider>
  );
}

export default App;
