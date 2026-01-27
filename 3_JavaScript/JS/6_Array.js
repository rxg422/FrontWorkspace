test1.onclick = function () {
    /*
        JS의 배열을 크기제한, 타입제한이 없으며 유용한 메서드 존재 => 자바의 ArrayList와 비슷
    */
    var arr1 = [];
    var arr2 = new Array();
    var arr3 = new Array(3); // 매개변수로 크기 전달

    console.log(arr1, arr2, arr3);

    // 값 대입
    arr1[0] = 'a';
    arr1[1] = 'b';
    arr1[2] = 'c';

    console.log(arr1[2]);
    console.log(arr1[100]); // undefined 반환

    // 반복
    for (var i = 0; i < arr1.length; i++) {
        console.log(arr1[i]);
    }

    // 향상된 반복문
    /*
        1. for .. in문
            - 객체, 배열 반복 가능
            - 객체 반복 시 변수에 객체의 속성명이 대입
            - 배열 반복 시 변수에 배열의 인덱스가 대입
    */
    for(var i in arr1) {
        console.log(i, arr1[i]);
    }

    /*
        2. for .. of문
            - 자바의 향상된 반복문과 가장 비슷한 구문, 배열 유형 데이터 반복을 위해 사용
            - 변수에 인덱스 값 저장
            - 객체는 반복 불가
    */
    for(var item of arr1) {
        console.log(item);
    }
};

test2.onclick = function() {
    var arr1 = [1, 2, 3];
    var arr2 = new Array("철수", "영희", "훈이");
    var arr3 = [1, 2, 3, "안녕", true, {id:"mkm"}, ["a", "b"], function(){console.log("zz")}];

    arr3[7]();
};