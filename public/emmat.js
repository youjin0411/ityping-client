const emmat = [
  {
    emmat: "! + Tab",
    description: "HTML 기본 구조 세팅",
    example: `
      <html>
        ...
      </html>
    `
  },
  {
    emmat: "div>ul>li",
    description: "요소를 중첩시킴",
    example: `
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    `
  },
  {
    emmat: "div+p+bq",
    description: "요소를 같은 수준에 배치",
    example: `
      <div></div>
      <p></p>
      <blockquote></blockquote>
    `
  },
  {
    emmat: "div+div>p>span+em^bq",
    description: "트리에서 한 수준 올라가면서 다음 요소의 위치를 변경",
    example: `
      <div></div>
      <div>
        <p><span></span><em></em></p>
        <blockquote></blockquote>
      </div>
    `
  },
  {
    emmat: "ul>li*2",
    description: "요소 반복 출력",
    example: `
      <ul>
        <li></li>
        <li></li>
      </ul>
    `
  },
  {
    emmat: "div>(ul>li*2)+footer>p",
    description: "하위 트리 그룹화",
    example: `
      <div>
        <ul>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>
        <footer>
          <p></p>
        </footer>
      </div>
    `
  },
  {
    emmat: "div#header+div.page+div#footer.class1.class2.class3",
    description: "CSS와 동일한 구문을 사용하여 ID와 클래스 속성 추가",
    example: `
      <div id="header"></div>
      <div class="page"></div>
      <div id="footer" class="class1 class2 class3"></div>
    `
  },
  {
    emmat: "td[title='Hello world!' colspan=3]",
    description: "지정된 값을 가진 속성",
    example: "<td title='Hello world!' colspan='3'></td>",
  },
  {
    emmat: "td[colspan title]",
    description: "빈 속성 값",
    example: "<td colspan='' title=''></td>",
  },
  {
    emmat: "ul>li.item$*5",
    description: "숫자가 매겨진 요소",
    example:
      "<ul><li class='item1'></li><li class='item2'></li><li class='item3'></li><li class='item4'></li><li class='item5'></li></ul>",
  },
  {
    emmat: "ul>li.item$$$*5",
    description: "0으로 패딩된 숫자가 매겨진 요소",
    example:
      "<ul><li class='item001'></li><li class='item002'></li><li class='item003'></li><li class='item004'></li><li class='item005'></li></ul>",
  },
  {
    emmat: "ul>li.item$@-*5",
    description: "내림차순으로 숫자가 매겨진 요소",
    example:
      "<ul><li class='item5'></li><li class='item4'></li><li class='item3'></li><li class='item2'></li><li class='item1'></li></ul>",
  },
  {
    emmat: "ul>li.item$@3*5",
    description: "다른 기준으로 숫자가 매겨진 요소",
    example:
      "<ul><li class='item3'></li><li class='item4'></li><li class='item5'></li><li class='item6'></li><li class='item7'></li></ul>",
  },
  {
    emmat: "ul>li.item$@-3*5",
    description: "다른 기준으로 숫자가 매겨진 요소를 내림차순으로 나열",
    example:
      "<ul><li class='item7'></li><li class='item6'></li><li class='item5'></li><li class='item4'></li><li class='item3'></li></ul>",
  },
  {
    emmat: "a{Click me}",
    description: "요소에 텍스트 추가",
    example: "<a href=''>Click me</a>",
  }
];