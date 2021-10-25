
function ok() {
    setTimeout(document.getElementById('load').remove(), 5000)
if (window.location.href == 'https://m.kteam.tk/kf-1.html'){

  var post = '<div id="post"><div id="post_head"><img src="kasya.ico" id="ava"><span id="post_avtor">Kasya Team</span></div><div id="post_text"><p>Курс HTML</p></div><a id="button" href="https://kasyateam.github.io/m/html/start.html">Перейти</a></div><div id="post"><div id="post_head"><img src="kasya.ico" id="ava"><span id="post_avtor">Kasya Team</span></div><div id="post_text"><p>Курс CSS</p></div><a id="button" href="https://kasyateam.github.io/m/css/start.html">Перейти</a></div><div id="post"><div id="post_head"><img src="kasya.ico" id="ava"><span id="post_avtor">Kasya Team</span></div><div id="post_text"><p>Курс JavaScript</p></div><a id="button" href="https://kasyateam.github.io/m/js/start.html">Перейти</a></div>'
  var news = '<div id="info"><h3 id="info_1">'+info_h+'</h3><p id="info_2">'+info_t+'</p></div>'

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
 var info_h = 'Обновление K.Feed'
 var info_t = 'Демонстрация Kasya UI третьего поколения<br>Вам скоро будет необхожимо обновить приложение'
document.body.innerHTML = '<main id="main" onload="ok()"><div id="load"><div id="load_1"><img id="load_2" src="load.gif"></div></div><div id="head"></div>'+post+'<hr id="hr">'+news+'</main>'

