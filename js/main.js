const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const emailError = document.querySelector('.card__subscribe__input-error');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const card = document.querySelector('.card');
const dismissBtn = document.querySelector('.success-msg button');
const successMsg = document.querySelector('.success-msg');


function handleSubmit(e) {
  e.preventDefault();
  
  const email = emailInput.value.trim(); // 取得最新輸入值

  if (!email || !emailRegex.test(email)) {
    showEmailError();
  } else {
    hiddenEmailError();
    card.style.display = "none";
    successMsg.style.display = "flex";
  }
}

function showEmailError() {
  emailInput.classList.add("error");
  emailError.style.display = "flex";
}

function hiddenEmailError() {
  emailInput.classList.remove("error");
  emailError.style.display = "none";
}

// 監聽表單提交事件
form.addEventListener('submit', handleSubmit);

// 監聽 email 欄位的輸入變化，讓錯誤訊息消失
emailInput.addEventListener('input', hiddenEmailError);

dismissBtn.addEventListener('click', () => {
    card.style.display = "flex";
    successMsg.style.display = "none";
})
