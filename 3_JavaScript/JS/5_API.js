test1.onclick = function() {
    var str = "Samsung Apple Xiomi";
    console.log(str.length);
    console.log(str.toUpperCase);
    console.log(str.toLowerCase);
    console.log(str.indexOf("pl"));
    console.log(str.lastIndexOf("i"));
    console.log(str.charAt(0));
    console.log(str[0]);

    // 문자열의 일부를 반환하는 메서드
    console.log(str.substring(2, 4));
    console.log(str.substring(2));

    var arr = str.split(" ");
    console.log(arr);
};

test2.onclick = function() {
    var num = 123.456;
    console.log(Math.round(num * 10) / 10);
    console.log(Math.ceil(num));
    console.log(Math.floor(num));
};

test3.onclick = function() {
    var now = new Date();
    console.log(now);

    var time1 = new Date(2026, 0, 20);
    console.log(time1);

    // 날짜형식 문자열로 객체 생성
    var time2 = new Date("1999/03/01 15:44:21");
    console.log(time2);

    // yyyy/mm/dd(e) HH:MM:ss 형식으로 출력
    displayDate(time2);
};

function displayDate(date) {
    var yyyy = date.getFullYear();
    var mm = date.getMonth() + 1;
    var dd = date.getDate();
    var dayArr = ["일", "월", "화", "수", "목", "금", "토"];
    var day = date.getDay(); // 0(일) ~ 6(토)

    alert(yyyy+"/"+mm+"/"+dd+"("+dayArr[day]+")");
}

test4.onclick = function() {
    // 덧셈을 제외한 number 자료형으로 형 변환 후 연산
    console.log(7 - '7');

    // number로 변환할 수 없는 문자열로 연산 시 NaN 반환
    console.log(7 % 'a');

    // boolean값 number로 변환 시 true=1, false=0 으로 변환
    console.log(7 + true);
    console.log(7 + false);

    // 원시값끼리만 연산 가능 -> 참조변수를 원시값으로 변환 후 연산처리
    console.log([] + 1);

    function fn() {}
    console.log(fn + 1);
};

test5.onclick = function() {
    var num = "1234.567원";

    // 변환 불가 문자가 존재하면 NaN 반환
    console.log(Number(num));

    // 문자열을 정수로 변환, 변환불가 문자가 존재하는 경우 해당 문자의 앞까지 변환
    console.log(parseInt(num));
    
    // 문자열을 실수로 변환, 변환불가 문자가 존재하는 경우 해당 문자의 앞까지 변환
    console.log(parseFloat(num));
};

test6.onclick = function() {
    console.log(10/0); // infinity
    console.log(typeof(10/0)); // number;

    console.log(10/'a'); // NaN
    console.log(typeof(10/'a')); // number;

    var num = prompt("숫자 : ");

    if(!isNaN(num)) {
        alert("숫자 입니다.");
    }
    else {
        alert("숫자가 아닙니다.");
    }
};

test7.onclick = function() {
    /* 
        js에서는 변수나 리터럴을 boolean형으로 형변환을 할 수 있으며, 값이 존재하지 않는 값은 false로 변환한다.
        ex) 0, -0, 0.0, "", undefined, null, NaN

        * [], {} : 주소값이 존재하여 true로 반환됨.
    */
    console.log(Boolean(123));
    console.log(Boolean("abc"));
    console.log(Boolean(""));
    console.log(Boolean(undefined));
    console.log(Boolean(null));
    console.log(Boolean([]));
    console.log(Boolean({}));
    
    function fn() {}
    console.log(Boolean(fn));

    // 문자열 0을 number로 변환 후 비교
    console.log("0" == 0);
    
    console.log([] == 0); // true;
    console.log([] == "0"); // false;
};

test8.onclick = function() {
    /*
        엄격 동등비교 연산자(===, !==)
            - 두 값간의 자료형 검사 또한 수행
    */

    console.log(3 === "3");
    console.log(3 === 3);
    console.log(3 !== "3");
    console.log(3 !== Number("3"));
    console.log(null === undefined); // null은 객체, undefined는 undefined 타입 => false;
};

test9.onclick = function() {
    var num = prompt("정수 : ");

    // 입력한 값이 홀 수 인지 출력
    // alert(num%2==1 ? "홀수" : "짝수");

    /*
        짧은 조건문
            - (조건식) && (실행문) : 조건이 참이면 실행
            - (조건식) || (실행문) : 조건이 거짓이면 실행
    */
    num%2==0 && alert("짝수");
    num%2==0 || alert("홀수");
};