// ===== INIT STATE (без мигания) =====
let lang = document.documentElement.getAttribute("data-lang") || "ru";
let mode = document.documentElement.getAttribute("data-mode") || "job";

// ===== ELEMENTS =====
const langOptions = document.querySelectorAll(".lang-option");
const langIndicator = document.querySelector(".lang-indicator");

const modeOptions = document.querySelectorAll(".mode-option");
const modeIndicator = document.querySelector(".mode-indicator");

// ===== FADE ANIMATION =====
function animateFade(callback){
  const elements = [
    document.getElementById("title"),
    document.getElementById("subtitle")
  ];

  elements.forEach(el=>{
    el.style.opacity = 0;
    el.style.transform = "translateY(10px)";
  });

  setTimeout(()=>{
    callback();

    elements.forEach(el=>{
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    });

  },200);
}

// ===== UPDATE CONTENT =====
function updateModeContent(){

  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const btn = document.getElementById("btn");

  // перевод кнопок режима
  if(lang === "ru"){
    modeOptions[0].innerText = "Ищу работу";
    modeOptions[1].innerText = "Ищу сотрудника";
  } else {
    modeOptions[0].innerText = "İş axtarıram";
    modeOptions[1].innerText = "İşçi axtarıram";
  }

  animateFade(()=>{

    if(mode === "job"){

      if(lang === "ru"){
        title.innerText = "Найдите работу быстрее, чем откликнетесь";
        subtitle.innerText = "Умный поиск вакансий для тех, кто ценит время";
        input1.placeholder = "Должность";
        input2.placeholder = "Город";
        btn.innerText = "Найти работу";
      } else {
        title.innerText = "İşi daha tez tap";
        subtitle.innerText = "Vaxtınıza dəyər verənlər üçün ağıllı platforma";
        input1.placeholder = "Vəzifə";
        input2.placeholder = "Şəhər";
        btn.innerText = "İş tap";
      }

    } else {

      if(lang === "ru"){
        title.innerText = "Найдите сотрудников за минуты";
        subtitle.innerText = "Публикуйте вакансии и находите лучших кандидатов";
        btn.innerText = "Разместить вакансию";
      } else {
        title.innerText = "Əməkdaşları tez tapın";
        subtitle.innerText = "Vakansiya yerləşdirin və ən yaxşı namizədləri tapın";
        btn.innerText = "Vakansiya yerləşdir";
      }

    }

  });
}

// ===== INIT UI (сразу, без мигания) =====
langOptions.forEach((opt,i)=>{
  if(opt.dataset.lang === lang){
    opt.classList.add("active");
    langIndicator.style.transform = `translateX(${i * 100}%)`;
  } else {
    opt.classList.remove("active");
  }
});

modeOptions.forEach((opt,i)=>{
  if(opt.dataset.mode === mode){
    opt.classList.add("active");
    modeIndicator.style.transform = `translateX(${i * 100}%)`;
  } else {
    opt.classList.remove("active");
  }
});

// ===== LANGUAGE SWITCH =====
langOptions.forEach((option,index)=>{
  option.addEventListener("click",()=>{
    langOptions.forEach(o=>o.classList.remove("active"));
    option.classList.add("active");
    langIndicator.style.transform = `translateX(${index * 100}%)`;

    lang = option.dataset.lang;

    localStorage.setItem("lang", lang);

    updateModeContent();
  });
});

// ===== MODE SWITCH =====
modeOptions.forEach((option,index)=>{
  option.addEventListener("click",()=>{
    modeOptions.forEach(o=>o.classList.remove("active"));
    option.classList.add("active");
    modeIndicator.style.transform = `translateX(${index * 100}%)`;

    mode = option.dataset.mode;

    localStorage.setItem("mode", mode);

    updateModeContent();
  });
});

// ===== SCROLL ANIMATION =====
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
});

// ===== PARALLAX =====
document.addEventListener("mousemove",(e)=>{
  const glow=document.querySelector(".bg-glow");
  if(glow){
    glow.style.transform=`translate(${e.clientX/25}px,${e.clientY/25}px)`
  }
});

// ===== INIT CONTENT =====
updateModeContent();
btn.addEventListener("click", () => {
  if(lang === "ru"){
    alert("Тестовая кнопка сработала");
  } else {
    alert("Test düyməsi işləyir");
  }
});