document.addEventListener('DOMContentLoaded', () => {
    const tossBtn = document.getElementById('tossBtn');
    const resetBtn = document.getElementById('resetBtn');
    const coins = [
        document.getElementById('coin1'),
        document.getElementById('coin2'),
        document.getElementById('coin3')
    ];
    const resultDiv = document.getElementById('result');
    const tossCountSpan = document.getElementById('tossCount');
    const hexagramDiv = document.getElementById('hexagram');

    let currentToss = 0;
    const MAX_TOSSES = 6;

    tossBtn.addEventListener('click', () => {
        if (currentToss >= MAX_TOSSES) return;

        tossBtn.disabled = true;
        resultDiv.innerText = "Đang gieo...";
        
        coins.forEach(coin => {
            coin.classList.add('flipping');
            coin.querySelector('.coin-face').innerText = "";
        });

        setTimeout(() => {
            let totalPoints = 0;
            let countNgua = 0;
            let countSap = 0;

            coins.forEach(coin => {
                coin.classList.remove('flipping');
                const isNgua = Math.random() >= 0.5;
                const face = coin.querySelector('.coin-face');

                if (isNgua) {
                    countNgua++;
                    totalPoints += 3; // Ngửa = 3 điểm
                    face.innerText = "N";
                    coin.classList.add('ngua');
                    coin.classList.remove('sap');
                } else {
                    countSap++;
                    totalPoints += 2; // Sấp = 2 điểm
                    face.innerText = "S";
                    coin.classList.add('sap');
                    coin.classList.remove('ngua');
                }
            });

            currentToss++;
            tossCountSpan.innerText = currentToss;
            
            // Xử lý vẽ Hào
            drawHao(totalPoints);

            resultDiv.innerText = `Lần ${currentToss}: ${countNgua} Ngửa, ${countSap} Sấp (Tổng: ${totalPoints})`;

            // Kiểm tra xem đã gieo đủ 6 lần chưa
            if (currentToss === MAX_TOSSES) {
                tossBtn.style.display = 'none';
                resetBtn.style.display = 'inline-block';
                resultDiv.innerText = "Đã gieo xong quẻ! Hãy chiêm nghiệm kết quả.";
            } else {
                tossBtn.disabled = false;
            }

        }, 1500);
    });

    // Hàm vẽ từng Hào
    function drawHao(points) {
        const haoDiv = document.createElement('div');
        haoDiv.classList.add('hao');

        // Phân tích điểm để ra Âm/Dương và có Động hay không
        if (points === 7 || points === 9) {
            haoDiv.classList.add('duong'); // 7, 9 là Dương
        } else if (points === 6 || points === 8) {
            haoDiv.classList.add('am'); // 6, 8 là Âm
        }

        // Đánh dấu Hào Động (6 là Lão Âm, 9 là Lão Dương)
        if (points === 6 || points === 9) {
            const marker = document.createElement('span');
            marker.classList.add('dong-marker');
            marker.innerText = points === 6 ? 'x' : 'o'; // 'x' cho âm động, 'o' cho dương động
            haoDiv.appendChild(marker);
        }

        // Thêm hào vào giao diện
        hexagramDiv.appendChild(haoDiv);
    }

    // Hàm Reset Gieo Quẻ Mới
    resetBtn.addEventListener('click', () => {
        currentToss = 0;
        tossCountSpan.innerText = currentToss;
        hexagramDiv.innerHTML = ''; // Xoá sạch quẻ cũ
        resultDiv.innerText = "Sẵn sàng gieo quẻ!";
        
        coins.forEach(coin => {
            coin.querySelector('.coin-face').innerText = "?";
            coin.classList.remove('ngua', 'sap');
            coin.style.background = ''; // Đưa về màu mặc định
        });

        resetBtn.style.display = 'none';
        tossBtn.style.display = 'inline-block';
        tossBtn.disabled = false;
    });
});
