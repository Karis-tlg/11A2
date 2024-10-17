import random

WishNormal = [
    "Chúc bạn một ngày 20/10 thật tuyệt vời!",
    "Hy vọng ngày của bạn thật nhiều niềm vui và hạnh phúc!",
    "Chúc bạn luôn xinh đẹp và rạng rỡ!",
    "Chúc bạn ngày càng thành công và tự tin!",
    "Mong rằng bạn sẽ có một ngày đầy ắp tiếng cười!"
]

GirlWishSpecial = {
    'lan': "Chúc Lan một ngày 20/10 thật đặc biệt!",
    'hoa': "Hoa luôn tươi tắn và xinh đẹp!"
}

ManWishSpecial = {
    "khôi": "ok1",
    "kha": "ok top 1 tin"
}

GirlNormal = [
    "khuê", "trang", "thảo"
]

while True:
    name = input("Nhập tên để nhận lời chúc: ").strip().lower()

    if name in GirlWishSpecial:
        print(GirlWishSpecial[name])
    elif name in ManWishSpecial:
        print(ManWishSpecial[name])
    elif name in GirlNormal:
        print(random.choice(WishNormal))
    else:
        print(f"Chúc bạn {name.title()} có một ngày 20/10 thật vui vẻ, ngày càng xinh đẹp và nết na.")
