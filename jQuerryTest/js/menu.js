function User_Card1(name,username, phone, address , type){
    var newProfileDiv = $('<div class="ProfileDiv"></div>');
    var newinconDiv1 = $('<div class="FlexDiv icondiv"></div>');
    var newinconDiv2 = $('<div class="icondiv2"></div>');
    var icon = "icon";
    var SpanSize = "span1"
    if(type == 1){
        $('.LeftDiv').append('<div></div>').css('justify-content','center');
        $('.LeftDiv').children('div').append('<div class="MainCardDiv"></div>');
        $('.MainCardDiv').append('<div></div>').children('div').append(newinconDiv1).append(newinconDiv2);
        icon = "MainIcon";
        SpanSize = "span2";
    }else{
        $('.RightDiv').append(newProfileDiv);
        newProfileDiv.append('<div></div>').children('div').append(newinconDiv1).append(newinconDiv2);
    }
    
    $(newinconDiv1).append('<img class="'+icon+'" src="./jQuerryTest/icon/icon.png">');
    $(newinconDiv1).append('<div></div>')
    $(newinconDiv2).append('<div></div>')

    $(newinconDiv1).children('div').css('margin-top','15px')
    .append('<div><span class="'+SpanSize+'">이름 : '+ name +'</span></div>')
    .append('<div><span class="'+SpanSize+'">닉네임 : '+ username +'</span></div>')
    .append('<div><span class="'+SpanSize+'">전화번호 : '+ phone +'</span></div>');
    $(newinconDiv2).children('div')
    .append('<span class="'+SpanSize+'">주소 : '+ address +'</span>').css('margin-left','10px').css('margin-bottom', '10px');
}