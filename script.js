// Định nghĩa các lời chúc
const wishNormal = [
    "Chúc bạn một ngày 20/10 thật tuyệt vời!",
    "Hy vọng ngày của bạn thật nhiều niềm vui và hạnh phúc!",
    "Chúc bạn luôn xinh đẹp và rạng rỡ!",
    "Chúc bạn ngày càng thành công và tự tin!",
    "Mong rằng bạn sẽ có một ngày đầy ắp tiếng cười!"
];

const girlWishSpecial = {
    'lan': "Chúc Lan một ngày 20/10 thật đặc biệt!",
    'hoa': "Hoa luôn tươi tắn và xinh đẹp!"
};

const manWishSpecial = {
    'khôi': "Chúc Khôi một ngày tốt lành!",
    'kha': "Hy vọng Kha có một ngày 20/10 thật vui!"
};

const girlNormal = [
    "khuê", "trang", "thảo"
];

// Hàm xử lý sự kiện nhận lời chúc
function getGreeting() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim().toLowerCase();
    const greetingText = document.getElementById('greetingText');

    if (!name) {
        greetingText.textContent = "Nhập tên để nhận lời chúc";
        document.querySelector('.speakButton').style.display = 'none';
        return;
    }

    let message;
    if (name in girlWishSpecial) {
        message = girlWishSpecial[name];
    } else if (name in manWishSpecial) {
        message = manWishSpecial[name];
    } else if (girlNormal.includes(name)) {
        message = wishNormal[Math.floor(Math.random() * wishNormal.length)];
    } else {
        message = `Chúc bạn ${name.charAt(0).toUpperCase() + name.slice(1)} có một ngày 20/10 thật vui vẻ, ngày càng xinh đẹp và nết na.`;
    }

    greetingText.textContent = message;
    applyTextEffects(greetingText);

    const speakButton = document.querySelector('.speakButton');
    speakButton.style.display = 'inline-block';
}

// Hàm phát âm lời chúc
function speakGreeting() {
    const greetingText = document.getElementById('greetingText').textContent;
    const speech = new SpeechSynthesisUtterance(greetingText);
    window.speechSynthesis.speak(speech);
}

// Thiết lập sự kiện khi tải trang
window.onload = () => {
    const nameInput = document.getElementById('nameInput');
    nameInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            getGreeting();
        }
    });

    const speakButton = document.querySelector('.speakButton');
    speakButton.style.display = 'none'; // Initially hide the speak button
};

// Function to apply visual effects when greeting changes
function applyTextEffects(element) {
    element.style.transition = 'all 0.5s ease';
    element.style.color = 'red'; // Change text color for emphasis
    // Additional visual effects like particles or animation can be added here
}

// Add event listeners for interactive effects
document.addEventListener('DOMContentLoaded', function () {
    const background = document.querySelector('body');
    background.addEventListener('mousemove', function () {
        // Add interactive effects like particle backgrounds on mouse move
    });
});
