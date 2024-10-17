// Định nghĩa các lời chúc
const wishNormal = [
    "Chúc bạn một ngày 20/10 thật tuyệt vời!",
    "Hy vọng ngày của bạn thật nhiều niềm vui và hạnh phúc!",
    "Chúc bạn luôn xinh đẹp và rạng rỡ!",
    "Chúc bạn ngày càng thành công và tự tin!",
    "Mong rằng bạn sẽ có một ngày đầy ắp tiếng cười!",
    "Chúc bạn ngày 20/10 tràn ngập yêu thương và hạnh phúc!",
    "Ngày Phụ nữ Việt Nam, chúc bạn luôn xinh đẹp, rạng rỡ và thành công trong cuộc sống.",
    "Chúc cho ngày của bạn thật sự đặc biệt và không bao giờ thiếu tiếng cười.",
    "Gửi tới bạn lời chúc tràn đầy sức khỏe và may mắn nhân ngày Phụ nữ Việt Nam.",
    "Chúc bạn luôn tìm thấy niềm vui trong mọi hoàn cảnh, không chỉ hôm nay mà cả mọi ngày.",
    "Ngày 20/10, chúc bạn luôn được yêu thương và trân trọng.",
    "Chúc bạn một ngày tràn ngập nụ cười và ấm áp tình thân.",
    "Chúc bạn có một ngày 20/10 thật ý nghĩa bên người thân yêu.",
    "Mong rằng mọi điều tốt đẹp nhất sẽ đến với bạn trong ngày Phụ nữ Việt Nam này.",
    "Chúc bạn luôn thành công và đạt được mọi mục tiêu trong cuộc sống.",
    "Chúc bạn ngày càng quyến rũ, ngọt ngào và tự tin.",
    "Chúc cho ánh sáng của bạn luôn tỏa sáng và ấm áp mỗi ngày.",
    "Chúc bạn một ngày 20/10 đầy ắp tình yêu và sự quan tâm.",
    "Mong cho cuộc sống của bạn luôn được bình an và hạnh phúc.",
    "Chúc bạn luôn tràn đầy năng lượng và tích cực trong mọi việc.",
    "Chúc cho bạn có một ngày 20/10 thật sự khác biệt và đáng nhớ.",
    "Gửi tới bạn sự ngưỡng mộ và trân trọng sâu sắc nhân ngày Phụ nữ Việt Nam.",
    "Chúc bạn một ngày đầy ắp niềm vui và thành công.",
    "Mong rằng tình yêu và sự ấm áp luôn bao quanh bạn.",
    "Chúc bạn luôn được bảo vệ, yêu thương và trân trọng mỗi ngày.",
    "Mong rằng bạn sẽ luôn tìm thấy hạnh phúc trong những điều nhỏ bé nhất.",
    "Chúc bạn một ngày 20/10 thật lành mạnh và tràn đầy sức sống.",
    "Gửi tới bạn lời chúc mạnh khỏe, may mắn và thành công.",
    "Chúc bạn luôn được vui vẻ và hạnh phúc bên gia đình thân yêu.",
    "Chúc bạn có một ngày đặc biệt với những hoạt động yêu thích.",
    "Chúc bạn luôn có thật nhiều niềm tin và hy vọng trong cuộc sống.",
    "Mong cho bạn có thật nhiều điều kỳ diệu trong ngày Phụ nữ Việt Nam.",
    "Chúc bạn luôn có một tinh thần lạc quan và yêu đời.",
    "Chúc bạn có một ngày 20/10 thật sự đáng nhớ và đầy ý nghĩa.",
    "Chúc bạn luôn tìm được niềm vui trong công việc và cuộc sống.",
    "Chúc bạn ngày càng xinh đẹp và tràn đầy sức sống.",
    "Chúc bạn một ngày 20/10 với thật nhiều sự ngọt ngào và hạnh phúc.",
    "Gửi tới bạn bó hoa tươi thắm nhất và những lời chúc tốt đẹp nhất.",
    "Chúc bạn luôn tươi trẻ và đầy sức sống.",
    "Chúc bạn có thật nhiều thành công trong sự nghiệp và cuộc sống.",
    "Mong rằng bạn sẽ luôn cảm thấy được yêu thương và trân trọng.",
    "Chúc bạn có một ngày 20/10 thật ấm áp và tràn đầy yêu thương.",
    "Mong mọi điều tốt đẹp nhất sẽ đến với bạn trong ngày này và cả sau này.",
    "Chúc bạn luôn cảm thấy hạnh phúc, yêu đời và tràn đầy năng lượng."
];


const girlWishSpecial = {
    'thu ba': "Gửi cậu, nhân ngày 20/10\n\nHôm nay là 20/10, và thật lòng mình chỉ muốn chúc cậu một ngày đặc biệt, thật nhiều niềm vui và hạnh phúc. Cậu là người mang lại cảm giác dễ chịu, nhẹ nhàng – một kiểu bình yên mà chẳng cần cố gắng.\n\nMong cậu luôn rạng rỡ, sống đúng với những gì cậu mong muốn. hãy sống với vẻ đẹp của chính mình và toả sáng như một viên kim cương\n\nThân gửi Huy 😍",
    'ba': "Gửi cậu, nhân ngày 20/10\n\nHôm nay là 20/10, và thật lòng mình chỉ muốn chúc cậu một ngày đặc biệt, thật nhiều niềm vui và hạnh phúc. Cậu là người mang lại cảm giác dễ chịu, nhẹ nhàng – một kiểu bình yên mà chẳng cần cố gắng.\n\nMong cậu luôn rạng rỡ, sống đúng với những gì cậu mong muốn. hãy sống với vẻ đẹp của chính mình và toả sáng như một viên kim cương\n\nThân gửi Huy 😍",
    'vân anh': "Hôm nay là ngày 20/10, tui có đôi lời gửi đến vanh\n\nChúc vanh ko còn mang những buồn phiền trong người, cười nhiều hơn, khóc ít hơn, hạnh phúc và luôn toả sáng như mặt trời\n\nVà ngày tháng sau này sẽ tích cực, yêu bản thân hơn, ngày càng xinh đẹp\n\nChúc cả thế giới của tui sẽ thành công trên con đường riêng của mình, những điều tốt đẹp nhất sẽ đến với cậu ko chỉ trong ngày hôm nay mà trong tất cả những ngày sắp tới\n\nChúc vanh có 1 ngày 20/10 thật vui vẻ, hạnh phúc và ý nghĩa nhaaa",
    'anh': "Hôm nay là ngày 20/10, tui có đôi lời gửi đến vanh\n\nChúc vanh ko còn mang những buồn phiền trong người, cười nhiều hơn, khóc ít hơn, hạnh phúc và luôn toả sáng như mặt trời\n\nVà ngày tháng sau này sẽ tích cực, yêu bản thân hơn, ngày càng xinh đẹp\n\nChúc cả thế giới của tui sẽ thành công trên con đường riêng của mình, những điều tốt đẹp nhất sẽ đến với cậu ko chỉ trong ngày hôm nay mà trong tất cả những ngày sắp tới\n\nChúc vanh có 1 ngày 20/10 thật vui vẻ, hạnh phúc và ý nghĩa nhaaa"
};

const manWishSpecial = {
    'khôi': "20/11 vui vẻ nha",
    'kha': "Chúc anh Kha top1 tin năm nay 😍"
};

const girlNormal = [
    "khuê", "trang", "thảo", "nhi", "bình lê", "lê", "thảo nguyên", "nguyên", "hiền",
    "như ý", "ý", "duyên", "uyên", "kiều", "hiền duyên", "kiều duyên", "khánh linh",
    "linh", "huyền", "phúc"
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

function speakGreeting() {
    const greetingText = document.getElementById('greetingText').textContent;
    const speech = new SpeechSynthesisUtterance(greetingText);
    window.speechSynthesis.speak(speech);
}

window.onload = () => {
    const nameInput = document.getElementById('nameInput');
    nameInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            getGreeting();
        }
    });

    const speakButton = document.querySelector('.speakButton');
    speakButton.style.display = 'none';
};

function applyTextEffects(element) {
    element.style.transition = 'all 0.5s ease';
    element.style.color = 'red';
}

document.addEventListener('DOMContentLoaded', function () {
    const background = document.querySelector('body');
    background.addEventListener('mousemove', function () {
    });
});
