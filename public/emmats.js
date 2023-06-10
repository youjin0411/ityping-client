export const emmats = [
  {
    emmat: "ul>li",
    description: "요소를 중첩시킴",
    example: 
    `<ul>
      <li></li>
    </ul>`
  },
  {
    emmat: "div+p",
    description: "요소를 같은 수준에 배치",
    example: 
    `<div></div>
    <p></p>`
  },
  {
    emmat: "div>p^div",
    description: "트리에서 한 수준 올라가면서 다음 요소의 위치를 변경",
    example: 
    `<div>
      <p></p>
      <div></div>
    </div>`
  },
  {
    emmat: "ul>li*2",
    description: "요소 반복 출력",
    example:
    `<ul>
      <li></li>
      <li></li>
    </ul>`
  },
  {
    emmat: "div#box",
    description: "ID 속성 추가",
    example:
    `<div id="box"></div>`
  },
  {
    emmat: "div.hi",
    description: "클래스 속성 추가",
    example:
    `<div class="hi"></div>`
  },
  {
    emmat: "td[title=hi]",
    description: "지정된 값을 가진 속성",
    example: "<td title=hi></td>",
  },
  {
    emmat: "td[title]",
    description: "빈 속성 값",
    example: "<td title=''></td>",
  },
  {
    emmat: "li.$*3",
    description: "숫자가 매겨진 요소",
    example:
    `<li class='1'></li>
    <li class='2'></li>
    <li class='3'></li>`,
  },
  {
    emmat: "li.$$$*3",
    description: "0으로 패딩된 숫자가 매겨진 요소",
    example:
    `<li class='001'></li>
    <li class='002'></li>
    <li class='003'></li>`,
  },
  {
    emmat: "ul>li.$@-*3",
    description: "내림차순으로 숫자가 매겨진 요소",
    example:
    `<li class='3'></li>
    <li class='2'></li>
    <li class='1'></li>`,
  },
  {
    emmat: "a{클릭}",
    description: "요소에 텍스트 추가",
    example: "<a href=''>클릭</a>",
  }
];