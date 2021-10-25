
function ok() {
    setTimeout(document.getElementById('load').remove(), 5000)
if (window.location.href == 'https://m.kteam.tk/kf-1.html'){
 document.body.innerHTML = 'Новости'
}else if (window.location.href == 'https://m.kteam.tk/kf-2.html'){
 document.body.innerHTML = 'Курсы программирования'
}else if (window.location.href == 'https://m.kteam.tk/kf-3.html'){
 document.body.innerHTML = 'Kasya ID'
}else if (window.location.href == 'https://m.kteam.tk/kf-4.html'){
 document.body.innerHTML = 'Поддержка'
}else {
 window.location.href = 'index.html'
}
}
