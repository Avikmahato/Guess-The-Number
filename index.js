let n = Math.floor(Math.random() * 100);
let button = document.getElementById("btn");
let result = document.getElementById("Res");
let image = document.getElementById("image");
let diff;
let score;
score = Number(score);
diff = Number(diff);
score = 100;
button.onclick = function () {
  let inputNumber = document.getElementById("number").value;
  inputNumber = Number(inputNumber);
  if (inputNumber > 100) {
    window.alert(`Please Enter A Number Between (1-100).`);
    result.textContent = `Hint :`;
  } else {
    diff = Math.abs(inputNumber - n);
    if (inputNumber == n) {
      swal.fire({
        imageUrl:"images/win.jpg",
        title:"Congratulations!!!!!!",
        text:"You Won",
        confirmButtonText:"Click"
      }).then((result)=>{
        if(result.isConfirmed){
          window.location.href="index.html";
        }
      });
    } else if (diff <= 10) {
      result.textContent = `Hint : So Closeeeee`;
      image.src = "images/tooclose.png";
      score -= 1;
    } else if (diff <= 20) {
      result.textContent = `Hint : Closeeeeee`;
      image.src = "images/near.png";
      score -= 1;
    } else if (diff <= 30) {
      result.textContent = `Hint : Closeee`;
      image.src = "images/near.png";
      score -= 1;
    } else if (diff <= 40) {
      result.textContent = `Hint : Long!!!!`;
      image.scr = "images/toolong.png";
      score -= 1;
    } else if (diff <= 50) {
      result.textContent = `Hint : Looong!!!!`;
      image.scr = "images/toolong.png";
      score -= 1;
    } else {
      result.textContent = `Hint : Too Loooooong!!!!`;
      image.src = "images/tolongg.png";
      score -= 1;
    }
  }
};
