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
  + range

    => 막대 조절 바

  + min, max, value

    => 최소, 최대, 기본값 설정

  + data-sth

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

  + change

    => HTML input 태그 값이 변할 때

  + mousemove

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

  + flex: { number }

      => flex-grow : 부모 flex에서 차지하는 비율
  
  +   flex: { 크기 지정(px, em, %...) }

      => flex-basis : 기본 크기 설정

- transition : property name | duration | (timing function) | delay 

#### < Javascript >
- <name>.classList.toggle('<classname>');

  => 해당 name 태그의 클래스에 해당하는 classname이 있다면 삭제, 없다면 추가

- <name>.addEventListener('transitionend', <function>); 

  => transition이 끝나면 해당 함수를 실행

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

  + ctx.strokeStyle = '<color>'; // 선의 테두리 색상 설정
  
  + ctx.lineCap = 'butt | round | square'; // 선의 끝점 모양 설정
  
  + ctx.lineJoint = 'round | bevel | miter'; // 선이 연결되는 지점의 모양 설정
  
  + ctx.lineWidth = num; // 선의 두께 설정
  
  + ctx.globalCompositeOperation = '<options>'; // 선의 투명도 설정
  
  
- 실제 그릴 수 있도록 동작시키기

  + ctx.beginPath(); // 선을 그림
  + ctx.moveTo(x,y); // 시작점
  + ctx.lineTo(x,y); //마지막 점
  + ctx.stroke(); 

