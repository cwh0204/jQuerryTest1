function Main_Card(name,username, phone, address){
    var newProfileDiv = $('<div class="ProfileDiv"></div>');
    var newinconDiv1 = $('<div class="FlexDiv icondiv"></div>');
    var newinconDiv2 = $('<div class="icondiv2"></div>')
    $('.LeftDiv').append('<div></div>').css('justify-content','center');
    $('.LeftDiv').children('div').append('<div class="MainCardDiv"></div>');
    $('.MainCardDiv').append('<div></div>').children('div').append(newinconDiv1).append(newinconDiv2);
    $(newinconDiv1).append('<img class="MainIcon" src="../icon/icon.png">');
    $(newinconDiv1).append('<div></div>')
    $(newinconDiv2).append('<div></div>')
    $(newinconDiv2).children('div').append('<span class="span2">주소 : '+ address +'</span>').css('margin-left','30px').css('margin-bottom', '10px');
    $(newinconDiv1).children('div').css('margin-top','30px')
    .append('<div><span class="span2">이름 : '+ name +'</span></div>')
    .append('<div><span class="span2">닉네임 : '+ username +'</span></div>')
    .append('<div><span class="span2">전화번호 : '+ phone +'</span></div>');
}
function User_Card(name,username, phone, address){
    var newProfileDiv = $('<div class="ProfileDiv"></div>');
    var newinconDiv1 = $('<div class="FlexDiv icondiv"></div>');
    var newinconDiv2 = $('<div class="icondiv2"></div>')
    $('.RightDiv').append(newProfileDiv);
    newProfileDiv.append('<div></div>').children('div').append(newinconDiv1).append(newinconDiv2);
    $(newinconDiv1).append('<img class="icon" src="../icon/icon.png">');
    $(newinconDiv1).append('<div></div>')
    $(newinconDiv2).append('<div></div>')
    $(newinconDiv1).children('div').css('margin-top','15px')
    .append('<div><span class="span1">이름 : '+ name +'</span></div>')
    .append('<div><span class="span1">닉네임 : '+ username +'</span></div>')
    .append('<div><span class="span1">전화번호 : '+ phone +'</span></div>');
    $(newinconDiv2).children('div')
    .append('<span class="span1">주소 : '+ address +'</span>').css('margin-left','10px').css('margin-bottom', '10px');
}