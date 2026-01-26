confirmBtn.onclick = function() {
    // confirm : 확인/취소 버튼을 통해 논리적인 처리를 지원하는 팝업창
    var bool = confirm("정말 삭제하시겠습니까?");
    console.log(bool);

    if(bool) {
        // 파일 삭제 로직
        // alert : 메시지 내용을 출력하는 팝업
        alert("파일을 삭제하였습니다.");
    }
};

promptBtn.onclick = function() {
    // prompt : 사용자로부터 문자열 입력을 받을 수 있는 모달
    var name = prompt("당신의 이름은 무엇인가요?");
    console.log(name);

    // if(name == null || name == "") {
    //     alert("올바른 이름을 입력하세요.");
    // }
    // else {
    //     alert(name + "님 안녕하세요.");
    // }

    // js에서는 값이 존재하는 경우 true로 취급
    if(!name) {
        alert("올바른 이름을 입력하세요.");
    }
    else {
        alert(name + "님 안녕하세요.");
    }
};

innerH.onclick = function() {
    /* 
        innerHTML : 각 HTML 태그의 content 영역을 의미
            - getter 방식 : html이 포함된 content를 반환
            - setter 방식 : 주어진 문자열을 html로 변환하여 출력
    */
    var str = "<h1>집에 보내줘</h1>";

    wrapper.innerHTML = str; // setter
    console.log(wrapper.innerHTML); // getter
};

innerT.onclick = function() {
    /* 
        innerText/textContent : content영역 안의 문자 요소만을 가져오는 속성
    */
    var str = "<h1>집에 가자</h1>";

    // wrapper.innerText = str;
    wrapper.textContent = str;
    console.log(wrapper.innerText);
};

outerH.onclick = function() {
    /* outerHTML : 선택된 요소의 내부 content값과 선택된 요소값을 합처셔 반환하거나 저장 */
    console.log(wrapper.outerHTML); // getter
    wrapper.outerHTML = "<mark>이제는 우리가 헤어져야 할 시간</mark>"; // setter
};