# VendingMachine
자판기 웹 서비스 만들기
 * https://irondesk.github.io/VendingMachine

## 📌 주요사항
### ✔️ 중점사항
  1. ``div`` 사용 지양하고 계층화된 태그 사용하기
  2. 접근성을 고려한 스크린 리더용 텍스트 설명 넣기 (``sr-only``로 보이지 않게)
  3. SCSS로 CSS 정리
### ✔️ 기능사항
#### Step 1 : 아이템 선택
  1. 아이템을 선택하면, 좌측 하단 장바구니 영역에 렌더링한다.
  2. 아이템을 1회 이상 선택하면, 좌측 하단 장바구니의 수량이 증가한다.

#### Step 2 : 금액 계산
  1. 입금액을 입력하는 input box에 값을 입력하고 입금 버튼을 누르면, 입금 완료 알림창을 보여주고 입력한 만큼 **잔액이 증가**한다.
     - 단 소지금보다 큰 금액이 입금액에 입력될 경우, 오류 알림창을 보여주고 잔액은 유지된다.
     - 입금이 완료되면 소지금에서 입금한 금액만큼 차감한다.
  3. 획득 버튼을 누르면, 장바구니에 담긴 아이템의 지출액을 계산하여 **잔액에서 차감**한다.
  4. 거스름돈 반환 버튼을 누르면, 반환이 되었다는 알림창을 보여주고 **잔액은 0원**으로 바꾼다.

#### Step 3 : 획득한 아이템
  1. 획득한 아이템은 우측 획득한 음료에 렌더링 한다.
  2. 장바구니에 담긴 <span style="color:red">아이템의 지출액</span>은 총금액에 더해진다.

#### 반응형 웹
  * **미디어쿼리**(``@media``)를 활용하여 반응형 웹 구현
  * 768px에서 1단 레이아웃 형태로 바꿔줌.
