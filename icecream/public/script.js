const { ThirdwebSDK, ChainId } = thirdweb;

// Initialize the Thirdweb SDK with Mainnet
const sdk = new ThirdwebSDK(ChainId.Mainnet);

let selectedAccount;
const contractAddress = "0x2aDc4d57239754199A8F4B2F285466b941be793e";
const contract = sdk.getNFTDrop(contractAddress);

// Connect the user's wallet
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
            console.error("Error connecting to wallet:", error);
        }
    } else {
        alert("Please install MetaMask!");
    }
}

// Check if the user is eligible to claim a token
async function checkEligibility() {
    try {
        const isEligible = await contract.claimConditions.canClaim(selectedAccount);
        if (isEligible) {
            document.getElementById('message').innerText = "You are eligible to claim the token.";
        } else {
            document.getElementById('message').innerText = "You are not eligible to claim the token.";
            document.getElementById('claim-token').style.display = 'none';
        }
    } catch (error) {
        console.error("Error checking eligibility:", error);
        document.getElementById('message').innerText = "Error checking eligibility.";
    }
}

// Claim the token
async function claimToken() {
    if (!selectedAccount) return;
    try {
        await contract.claim(selectedAccount, 1); // Adjust the number of tokens to claim as needed
        document.getElementById('message').innerText = "Token claimed successfully!";
    } catch (error) {
        console.error("Token claim failed:", error);
        document.getElementById('message').innerText = "Token claim failed.";
    }
}

// Toggle play/pause for the background audio
function togglePlayPause() {
    const audio = document.getElementById('background-audio');
    const button = document.getElementById('play-pause-button');

    if (audio.paused) {
        audio.play().then(() => {
            button.textContent = 'Pause';
        }).catch((error) => {
            console.error('Audio play failed:', error);
        });
    } else {
        audio.pause();
        button.textContent = 'Play';
    }
}

// Add falling ice cream emojis to the page
function addFallingEmojis() {
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
}

// Set up event listeners once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('connect-wallet').addEventListener('click', connectWallet);
    document.getElementById('claim-token').addEventListener('click', claimToken);
    document.getElementById('play-pause-button').addEventListener('click', togglePlayPause);
    addFallingEmojis();
});