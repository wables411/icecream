import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { ethers } from 'ethers';

// Create the client with your clientId
const client = createThirdwebClient({ 
  clientId: "abbc426311cb661ab9bfb5714e5a6b59" // Replace with your actual client ID
});

// Connect to your contract
const contract = getContract({ 
  client, 
  chain: defineChain(8453), 
  address: "0x2aDc4d57239754199A8F4B2F285466b941be793e"
});

let selectedAccount;

async function connectWallet() {
    if (window.ethereum) {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            selectedAccount = await signer.getAddress();
            document.getElementById('connect-wallet').style.display = 'none';
            document.getElementById('claim-token').style.display = 'block';
            checkEligibility();
        } catch (error) {
            console.error(error);
        }
    } else {
        alert("Please install MetaMask!");
    }
}

async function checkEligibility() {
    try {
        const isEligible = await contract.isEligibleToClaim(selectedAccount);
        if (isEligible) {
            document.getElementById('message').innerText = "You are eligible to claim the token.";
        } else {
            document.getElementById('message').innerText = "You are not eligible to claim the token.";
            document.getElementById('claim-token').style.display = 'none';
        }
    } catch (error) {
        console.error(error);
        document.getElementById('message').innerText = "Error checking eligibility.";
    }
}

async function claimToken() {
    if (!selectedAccount) return;
    try {
        await contract.claimTo(selectedAccount, 2020); // Adjust the number of tokens to claim as needed
        document.getElementById('message').innerText = "Token claimed successfully!";
    } catch (error) {
        console.error(error);
        document.getElementById('message').innerText = "Token claim failed.";
    }
}

function togglePlayPause() {
    const audio = document.getElementById('background-audio');
    const button = document.getElementById('play-pause-button');

    if (audio.paused) {
        audio.play();
        button.textContent = 'Pause';
    } else {
        audio.pause();
        button.textContent = 'Play';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Script Loaded");
    const playPauseButton = document.getElementById('play-pause-button');
    playPauseButton.addEventListener('click', togglePlayPause);

    // Add falling ice cream emojis
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

    const connectWalletButton = document.getElementById('connect-wallet');
    connectWalletButton.addEventListener('click', connectWallet);
    const claimTokenButton = document.getElementById('claim-token');
    claimTokenButton.addEventListener('click', claimToken);
});
