// ml5.jsとp5.jsでつくる機械学習コンテンツプログラミング_表紙

var spacer;
function setup() {
  createCanvas(1000, 1000, P2D);
  rectMode(CENTER);
  pixelDensity();
  noStroke();
  colorMode(HSB,360,100,100,100);
  background(170, 10,100);

  // 描画する図形の配置をランダムにする
  spacer = random(60,100);

  // 削除すると図形が点滅
  noLoop();
}

function draw() {

  for (let x = 0; x < width; x += spacer) {
    for (let y = 0; y < height; y += spacer) {

	  //図形の色と透明度の指定
		fill(random(170,210), 85 ,random(20,100),random(5,100));

      //縦横に図形を置いていく
      rect(x + spacer / 2, y + spacer / 2,50,50);
      rect(x + spacer / 2, y + spacer / 2,50,50);
    }
  }
}
