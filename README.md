## Day2 - Make a clock

#### < CSS >

- transform-origin

  => transform의 기준점 변경

- trasition-timing-function : cubic-bezier(,,)

  => transition 모양 설정

#### < Javascript >

- setInterval(function, millisec)

  => function을 millisec초마다 반복

- \` ${매개변수} \`

  => 변수를 매개변수로 넣음

  => ''가 아니라 ``(backtick)임에 주의!

## Day3 - Update CSS Variables with JS

#### < HTML >

- input Attribute

  - range

    => 막대 조절 바

  - min, max, value

    => 최소, 최대, 기본값 설정

  - data-sth

    => 원하는 이름으로 속성 값을 줄 수 있음

#### < CSS >

- filter

  => blur, 그레이효과 등의 효과 줄 수 있음

#### < Javascript >

- forEach

  => for 반복문을 내부적으로 수행

- dataset.dataname

  => HTML에서 data-sth에서 (sth = dataname) 설정한 값을 가져옴

- addEventListener

  - change

    => HTML input 태그 값이 변할 때

  - mousemove

    => 마우스를 움직일 때

## Day4 - Array Pratice1

#### < Javascript >

- filter()

  => 원하는 정보만 골라내서 배열 생성

- map()

  => 기존 배열을 활용하여 새로운 배열 생성

- sort()

  => 특정 기준으로 순서를 나타내는 배열 생성(삼항연산자 사용했음)

- reduce()

  => 수식을 사용하여 나타낸 배열들의 합을 나타냄

  => 두 번째 매개변수는 콜백함수 내의 첫 번째 매개변수의 초기값 설정

  => ex) value.reduce((total, innervalue), 0); // total 초기값 = 0

## Day5 - Flex Panels Image Gallery

#### < CSS >

- flex: flex-grow, flex-shrink, flex-basis

  - flex: { number }

    => flex-grow : 부모 flex에서 차지하는 비율

  - flex: { 크기 지정(px, em, %...) }

    => flex-basis : 기본 크기 설정

- transition : property name | duration | (timing function) | delay

#### < Javascript >

- <name>.classList.toggle('<classname>');

  => 해당 name 태그의 클래스에 해당하는 classname이 있다면 삭제, 없다면 추가

- <name>.addEventListener('transitionend', <function>);

  => transition이 끝나면 해당 함수를 실행

## Day6 - AJAX Type Ahead

#### < CSS >

- text-transform: capitalize

  => 영어 단어의 첫 단어를 모두 대문자로 변환

- transfrom: perspective

  => 관찰자 위치 (크기가 클수록 변형정도가 줄어듦)

#### < Javascript >

- fetch(url)

  => HTTP resposne 객체를 래핑한 Promise 객체 반환

  => then 메서드를 통해 resolve한 객체 전달 받음

  => default로 GET 방식으로 동작

  [fetch 함수 참고링크](https://velog.io/@eunjin/JavaScript-fetch-%ED%95%A8%EC%88%98-%EC%93%B0%EB%8A%94-%EB%B2%95-fetch-%ED%95%A8%EC%88%98%EB%A1%9C-HTTP-%EC%9A%94%EC%B2%AD%ED%95%98%EB%8A%94-%EB%B2%95)

- new RegExp()

  => 정규표현식
  => g플래그 : 전역 검색(매칭되는 모든 문자열 검색)

  if) 사용x => 처음으로 매칭되는 값만 가져옴

  => i플래그 : 대소문자 구별없이 검색

  [정규표현식 참고링크](https://beomy.tistory.com/21)

## Day7 - Array Practice2

#### < Javascript >

- some()

  => 주어진 배열 중 '하나라도' 참이면 true를 반환

- every()

  => 주어진 배열이 '모두' 참이어야 true 반환

- find()

  => 해당 조건을 만족하는 배열 반환

- findIndex()

  => 해당 조건을 만족하는 index(id) 값 반환

## Day8 - Canvas

#### < HTML >

- <canvas></canvas>

  => 캔버스 태그

#### < Javascript >

- ctx = canvas.getContext('2d');

  => 캔버스에 그림을 그리기 위한 기본 설정

- canvas = document.querySelector('#id');

  canvas.width = num;

  canvas.height = num;

  => 캔버스 크기 재설정

- 그림그리기 위한 기본 설정

  - ctx.strokeStyle = '<color>'; // 선의 테두리 색상 설정

  - ctx.lineCap = 'butt | round | square'; // 선의 끝점 모양 설정

  - ctx.lineJoint = 'round | bevel | miter'; // 선이 연결되는 지점의 모양 설정

  - ctx.lineWidth = num; // 선의 두께 설정

  - ctx.globalCompositeOperation = '<options>'; // 선의 투명도 설정

- 실제 그릴 수 있도록 동작시키기

  - ctx.beginPath(); // 선을 그림
  - ctx.moveTo(x,y); // 시작점
  - ctx.lineTo(x,y); //마지막 점
  - ctx.stroke();

## Day9 - Dev Tools Tricks

#### < Javascript >

- console.log('%s', word)

  => %s 포함 시 해당 자리에 string을 넣을 수 있음

- console.log('%c~')

  => %c 이후 글씨에 스타일을 넣을 수 있음

- console.assert(조건, '문장');

  => 해당 조건을 충족시키지 않을 때 나타낼 문장으로 테스트 가능

- console.warn('') / console.error('') / console.info('')

  => 경고 / 에러메시지 / 정보를 나타냄

- console.clear()

  => console창 비우기

- console.log(태그|id값|...)

  => 해당 DOM 요소 보이기

- console.dir(태그|id값|...)

  => 해당 DOM요소의 태그만 보이기

- forEach => console.group('')/console.groupCollapsed('') ... console.groupEnd('')

  => 주어진 값으로 그룹화 지음

  => 기본 : 그룹 값 열린 상태로 보여줌

  => groupCollapsed : 그룹 값 닫힌 상태로 보여줌

- console.count('')

  => 해당 값이 언급 된 만큼 수를 count함

- console.time('') ... console.timeEnd('')

  => time : 시작 시점 , timeEnd : 끝 지점

  => timeEnd - time 시간을 구해줌

- console.table();

  => 주어진 배열을 테이블 형식으로 표시함

## Day10 - Hold Shift to Check Multiple Checkboxes

#### < Javascript >

- e.shiftKey

  => event 값에 shiftKey가 눌렸을 때

## Day11 - HTML Video Player

#### < Javascript >

[HTMLMediaElement 속성]<https://developer.mozilla.org/ko/docs/Web/API/HTMLMediaElement>

- HTMLMediaElement.paused

  => 미디어 일시 정지 여부를 Boolean 값으로 반환

- HTMLMediaElement.playbackRate

  => 재생 속도를 double 값으로 반환

- HTMLMediaElement.volume

  => 오비오 볼륨을 double 값으로 반환

  => 0.0(무음)에서 1.0(최대크기) 사이 값을 가짐

- HTMLMediaElement.currentTime

  => 현재 재생 시점을 초 단위로 표현한 double 값

  => 이 값을 세팅하여 재생 시점 변경 가능

- HTMLMediaElement.duration

  => 미디어 전체 길이를 초 단위로 double 값으로 반환

  => 재생 가능한 미디어가 없을 경우 0 반환

- Element.offsetWidth

  => 요소의 전체 크기

- Element.reqestFullscreen()

  => 지정한 요소를 전체 화면 크기로 변경

- document.exitFullscreen()

  => 브라우저가 full-screen mode에서 창 모드로 다시 전환
