document.addEventListener('DOMContentLoaded', () => {
    const tossBtn = document.getElementById('tossBtn');
    const coins = [
        document.getElementById('coin1'),
        document.getElementById('coin2'),
        document.getElementById('coin3')
    ];
    const resultDiv = document.getElementById('result');

    tossBtn.addEventListener('click', () => {
        // 1. Khoá nút và thêm hiệu ứng lật
        tossBtn.disabled = true;
        resultDiv.innerText = "Đang gieo...";
        
        coins.forEach(coin => {
            coin.classList.add('flipping');
            coin.querySelector('.coin-face').innerText = "";
        });

        // 2. Chờ 1.5 giây để hiệu ứng lật diễn ra, sau đó hiển thị kết quả
        setTimeout(() => {
            let countNgua = 0;
            let countSap = 0;

            coins.forEach(coin => {
                // Dừng hiệu ứng lật
                coin.classList.remove('flipping');
                
                // Thuật toán tung đồng xu (50% sấp, 50% ngửa)
                const isNgua = Math.random() >= 0.5;
                const face = coin.querySelector('.coin-face');

                if (isNgua) {
                    countNgua++;
                    face.innerText = "N"; // Ngửa
                    coin.classList.add('ngua');
                    coin.classList.remove('sap');
                } else {
                    countSap++;
                    face.innerText = "S"; // Sấp
                    coin.classList.add('sap');
                    coin.classList.remove('ngua');
                }
            });

            // 3. Hiển thị kết quả tổng hợp
            resultDiv.innerText = `Kết quả: ${countNgua} Ngửa, ${countSap} Sấp`;
            
            // Mở khoá nút để gieo tiếp
            tossBtn.disabled = false;

        }, 1500); // Đợi 1.5s (1500 milliseconds)
    });
});
/* --- PHẦN THÊM MỚI CHO VẼ QUẺ --- */

.toss-counter {
    margin-top: 15px;
    font-weight: bold;
    color: #666;
}

#resetBtn {
    background-color: #2e7d32; /* Màu xanh lá cho nút làm mới */
}

#resetBtn:hover {
    background-color: #1b5e20;
}

.hexagram-container {
    margin-top: 25px;
    display: flex;
    flex-direction: column-reverse; /* Quan trọng: Xếp hào từ dưới (Hào 1) lên trên (Hào 6) */
    align-items: center;
    gap: 10px;
    min-height: 180px;
}

.hao {
    width: 140px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: all 0.3s ease;
}

/* Hào Dương (1 vạch liền) */
.hao.duong::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: #333;
    border-radius: 4px;
}

/* Hào Âm (2 vạch đứt) */
.hao.am::before,
.hao.am::after {
    content: '';
    width: 45%;
    height: 100%;
    background-color: #333;
    border-radius: 4px;
}

/* Đánh dấu Hào Động */
.hao .dong-marker {
    position: absolute;
    right: -30px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #8b0000;
}
