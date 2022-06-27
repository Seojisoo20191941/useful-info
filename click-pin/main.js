// function pinClick() {
//   const pinImg = document.querySelector(".pin").src;
//   let pinChange;
//   if (pinImg === "blackpin.png") {
//     pinChange = "redpin.png";
//   } else {
//     pinChange = "blackpin.png";
//   }
//   document.querySelector(".pin").src = pinChange;
// }

// function handleTitleClick(){
//     //     const currentColor=h1.style.color;
//     //     let newColor;
//     //     if(currentColor==="blue"){
//     //         newColor="tomato";
//     //     }else{
//     //         newColor="blue";
//     //     }
//     //     h1.style.color=newColor;//바뀌는 값을 저장까지 할 수 있는
//     // }

// const pin = document.querySelector(".pin");
// function pinClick() {
//   pin.classList.toggle("clicked");
//   //clicked라는 css로 왔다갔다
// }

function makeImage(e) {
  var evt = window.event ? window.event : e; // 이벤트 받기 (파폭, IE 처리)

  var img = document.createElement("img"); // 이미지 객채 생성
  var rnd = Math.round(Math.random() * 20) + 1; // 이미지 랜덤하게 보여주기 위한 ..
  if (rnd < 10) rnd = "0" + rnd;

  img.src = "http://superkts.pe.kr/images/helper/smp_180_" + rnd + ".jpg"; // 이미지 경로 설정 (랜덤)
  img.style.position = "absolute";
  img.style.top = evt.clientY + document.body.scrollTop;
  img.style.left = evt.clientX + document.body.scrollLeft;
  document.body.appendChild(img);
}
document.onclick = makeImage;
