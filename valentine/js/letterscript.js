let lettercontainer = document.getElementById("lettercontainer");
let theletter = document.getElementsByClassName("theletter");
let first = "I love you";
let second = "i love you so much";
let curr_letter = 0
let count_num = 0
let letterarr = [first, second]

letterarr.forEach(function (value, i) {
    const heart = document.createElement('div');
    heart.classList.add('theletter');
    heart.setAttribute("id", "letter" + i);
    heart.innerHTML = `
    <p style="font-size: 12px; text-align: center; line-height: 2.8; margin: 10 0 0 0;">
    ${i}
    <br>
    ${value}</p>
    `;
    lettercontainer.prepend(heart);
    count_num ++
  });

  let letter_id = document.getElementById("letter" + curr_letter)

