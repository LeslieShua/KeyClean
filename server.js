const buttons = [
  { text: "Primary", class: "btn-primary" },
  { text: "Secondary", class: "btn-secondary" },
  { text: "Success", class: "btn-success" },
  { text: "Danger", class: "btn-danger" },
  { text: "Warning", class: "btn-warning" },
  { text: "Info", class: "btn-info" },
  { text: "Light", class: "btn-light" },
  { text: "Dark", class: "btn-dark" },
];

// 버튼들을 추가할 컨테이너 div 요소
const buttonContainer = document.getElementById("buttonContainer");

// 각 버튼을 생성하고 컨테이너에 추가
buttons.forEach((button) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = `btn ${button.class} mb-2`;
  btn.textContent = button.text;
  buttonContainer.appendChild(btn);
});

// const express = require('express');
// const app = express();

// app.listen(8080, function(){
//     console.log('listening on 8080')
// });

// app.get('/pet',function(요청,응답){
//     응답.send('펫')
// });

// app.get('/',function(요청,응답){
//     응답.sendFile(__dirname + '/index.html')
// });
