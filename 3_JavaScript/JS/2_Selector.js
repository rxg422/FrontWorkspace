/*
    document 객체
        - 작성한 html의 태그를 파싱하여, 변환된 js object를 가지고 있는 객체
        - DOM : Document Object Model
*/
document.querySelector("#id").onclick = function () {
    // id와 일치하는 요소를 선택하는 선택자 함수
    // 1. getElementById("아이디명")
    var li = document.getElementById("myli2"); // id값과 일치하는 요소 1개 선택
    console.log(li);

    // 2. querySelector("css 선택자") : css 선택자와 일치하는 요소 1개 선택
    li = document.querySelector("#myli2");
    console.log(li);
    console.dir(li); // 객체 구조 열람

    // 선택한 요소의 스타일 속성 변경
    li.style.color = "#fff";
    li.style.backgroundColor = "magenta";

    // 3. id 속성값으로 접근
    // 브라우저는 id값의 요소를 전역변수 형태로 등록하여 id속성값을 통해 요소를 바로 획득 가능
    // 단 모든 브라우저가 지원하지 않으며 다른 변수와 충돌 가능성이 있어 주의 요망
    myli2.style.color = "red";
};

document.querySelector("#tag-name").onclick = function () {
    // 태그명 기준 요소 선택
    
    // 1. getElementsByTagName : 배열형태 데이터 반환
    // HTMLCollection : 배열의 유용한 메서드 중 일부만 존재하는 유사 배열
    var liArr = document.getElementsByTagName("li");
    console.log(liArr);

    // 2. querySelectorAll(태그명선택자)
    // NodeList : 배열의 유용한 메서드를 지원하는 유사 배열
    liArr = document.querySelectorAll("li");
    console.log(liArr);

    for (let index = 0; index < liArr.length; index++) {
        console.log(liArr[index]);

        liArr[index].style.color = "rgb(130, 220, 50)";
        liArr[index].style.backgroundColor = "magenta";
    }

    liArr.array.forEach((li) => {
        li.style.color = "white";
    });
};

document.querySelector("#class-name").onclick = function () {
    // 클래스명으로 요소 선택
    var groups = document.getElementsByClassName("group");
    console.log(groups);

    groups = document.querySelectorAll("group");
    console.log(groups);

    // 선택한 요소의 배경색 변경
    for (let index = 0; index < groups.length; index++) {
        var li = groups[index];
        var current = li.style.backgroundColor;

        if (current != "springgreen") {
            li.style.backgroundColor = "springgreen";
        }
        else {
            li.style.backgroundColor = "white";
        }
    }
};

document.querySelector("#name-selector").onclick = function () {
    // 체크한 체크박스의 값 가져오기
    var hobbies = document.getElementsByName("hobby");
    hobbies = document.querySelectorAll("input[name=hobby]");
    console.log(hobbies);

    for (var i = 0; i < hobbies.length; i++) {
        var hobby = hobbies[i];

        // 체크박스 체크여부 관리 속성
        if(hobby.checked) {
            console.log(hobby.value);
        }
    }
};

document.querySelector("#email-confirm").onclick = function () {
    // ID로 접근
    var userEmail = document.querySelector("#userEmail");
    console.log(userEmail.value);

    // 태그명을 접근
    var inputArr = document.querySelectorAll("input");
    console.log(inputArr[7].value);

    // name 값으로 접근
    var userEmail2 = document.querySelector("input[name=userEmail]");
    console.log(userEmail2.value);
};