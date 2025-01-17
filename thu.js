let buttonX = 150;
let buttonY = 260;
let buttonWidth = 100;
let buttonHeight = 40;
let screen = 1; // 1 represents the first screen, 2 represents the second screen

function setup() {
    createCanvas(400, 400);
    if (screen === 1) {
        drawScreen1();
    }
}

function drawScreen1() {
    background(255, 204, 209);

    // Draw a circle with a rose inside, centered in the screen
    fill(255, 255, 255);
    noStroke();
    ellipse(200, 130, 80, 80); // Circle

    // Draw a simple rose shape inside the circle
    fill(255, 0, 0);
    beginShape();
    vertex(200, 120);
    bezierVertex(190, 110, 170, 120, 180, 140);
    bezierVertex(190, 150, 210, 150, 220, 140);
    bezierVertex(230, 120, 210, 110, 200, 120);
    endShape(CLOSE);

    fill(0, 128, 0); // Green for stem
    rect(198, 140, 4, 20);

    // Draw the other elements
    drawthutinh();
}

function drawScreen2() {
    background(255, 51, 153); 

    fill(255);
    textSize(16);
    text("Hôm nay là sinh nhật tuổi 20 của em, anh chúc em tất cả <3kaka. Đùa hoi cu nhưng thay vì chúc thì anh sẽ trả lời cho em 1 câu hỏi mà lúc trước em hỏi anh:", 10, 50, 380);
    text("\"Tại sao anh lại chọn tấm ảnh đó vậy\". Tấm ảnh đó là tấm ảnh khiến anh chính thức thích em hoàn toàn và sẽ theo đuổi em hết mình. Nói các khác đó chính là TẤM ẢNH SÉT ĐÁNH. Vậy hoi hết zòi.", 10, 120, 380);
    // Draw a heart below the text
    fill(255, 192, 203);
    noStroke();
    beginShape();
    vertex(200, 250);
    bezierVertex(170, 220, 130, 220, 130, 260);
    bezierVertex(130, 300, 200, 340, 200, 360);
    bezierVertex(200, 340, 270, 300, 270, 260);
    bezierVertex(270, 220, 230, 220, 200, 250);
    endShape(CLOSE);
    // Add "Happy Birthday" text inside the heart
    fill(255, 0, 102);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Mìu Míu", 200, 290);
}





function drawthutinh() {
    fill(204, 0, 102);
    textSize(30);
    text("CHÚC MỪNG SINH NHẬT", 20, 40);

    fill(255, 153, 204);
    strokeWeight(0.3);
    rect(buttonX, buttonY, buttonWidth, buttonHeight);
    fill(204, 0, 102);
    textSize(17);
    text("Thư đây này", 152, 280);
}

function mousePressed() {
    // Check if the mouse is inside the button area
    if (
        mouseX > buttonX &&
        mouseX < buttonX + buttonWidth &&
        mouseY > buttonY &&
        mouseY < buttonY + buttonHeight
    ) {
        screen = 2; // Change to screen 2
        drawScreen2(); // Draw the second screen
    }
}
