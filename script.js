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
