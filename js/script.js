$(document).ready(function(){

    // 메인메뉴 hover 
    $(".gnb li").hover(function(){
        $(".subMenu").slideDown(300);
    }, function(){
        // 서브메뉴 부분에서 마우스가 빠져나왔을 시 
        $(".subMenu").mouseleave(function(){
            $(".subMenu").slideUp(300);
        });
    });

    // 몇박 입력받는 부분 초기설정
    $(".stay").val("2박");

    // datepicker 설정
    let today = new Date();
    $("#datepicker_today").datepicker();
    // 체크인 부분에 오늘 날짜로 설정한다.
    $("#datepicker_today").datepicker('setDate', today);

    //  오늘 날짜에 + 2일을 더해 초기 셋팅으로 해놓는다.
    today.setDate(today.getDate() + 2);

    // 체크아웃 부분 정의.
    $("#datepicker_checkOutDay").datepicker();

    // 2일을 더한 값으로 화면에 셋팅.
    $("#datepicker_checkOutDay").datepicker('setDate', today);

    // 체크아웃 부분의 input 키 입력 부분을 감지해서
    // 오늘 날짜와 체크아웃 날짜를 계산하여 몇박인지 자동으로 입력하게 해준다.
    $("#datepicker_checkOutDay").on("propertychange change keyup paste input", function() {
        // 오늘 날짜 입력부분의 Day 부분을 가져온다.
        let tDay = $("#datepicker_today").datepicker('getDate');

        // 체크아웃 부분을 담을 변수선언.
        let checkOutDay = new Date();

        // 최종 결과값을 담을 변수.
        let result;

        // 체크아웃 값을 가져온다.
        checkOutDay =  $("#datepicker_checkOutDay").datepicker('getDate');

        // 체크아웃 값과 오늘 값을 빼서 담아준다.
        result = checkOutDay.getDate() - tDay.getDate();
        console.log(result+'일');

        // 최종적으로 몇박인지 자동으로 채워준다.
        $('.stay').val(result+"박");

        /*
        문제점 
        day 에 해당되는 부분만 계산하기 때문에
        해당 월에 계산시 정상적으로 값이 나오지만
        7월에서 8월로, 월이 바뀔 시에는 계산이 되지 않는다.
        */
    });

    // 스크롤 Top 버튼 제어
    $(".topBtn").hide(); // 기본옵션은 hide()
    $(window).scroll(function(){
        if($(this).scrollTop() > 500) { 
            $(".topBtn").fadeIn();
        } else {
            $(".topBtn").fadeOut();
        }
    });

    $(".topBtn").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});