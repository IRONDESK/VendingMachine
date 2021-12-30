let selectedObj = {
    Original: 0,
    Violet: 0,
    Yellow: 0,
    Cool: 0,
    Green: 0,
    Orange: 0
};
let getObj = {
    Original: 0,
    Violet: 0,
    Yellow: 0,
    Cool: 0,
    Green: 0,
    Orange: 0
};
let change = 0;
let myMoney = 25000;
let selectedList = [];
let selectedCount = 0;

function itemSelect () {
    const selectBox = document.querySelector(".list-item");
    const getItemStaged = document.querySelector(".list-item-staged");

    // 선택 음료수
    selectBox.addEventListener("click", (e) => {
        selected = e.target.closest("button").dataset.item.split(" ")[0];
        selectedObj[selected] += 1;
        selectedCount += 1;

        if (selectedList.indexOf(selected) == -1) {
            selectedList.push(selected)
        }
        const selectedRender = selectedList.map((v) => {
            return `<li class="item-staged">
            <img class="img-item" src="resource/img/${v}_Cola.svg" alt="${v} Cola">
            <strong class="txt-item">${v} Cola</strong>
            <span class="num-counter">${selectedObj[v]}</span>
        </li>
        `}).join("");
        getItemStaged.innerHTML = selectedRender;
        
    });

    // 획득 음료수
    const myItems = document.querySelector(".cont-myitems");
    const itemsResult = myItems.querySelector(".list-item-staged");
    const getBtn = document.querySelector(".btn-get");

    getBtn.addEventListener("click", () => {
        if (change - selectedCount*1000 < 0) {
            alert("잔액이 부족합니다.");
            return
        }
        change -= Number(depositVal.value);
        changeTxt.textContent = `${change.toLocaleString('ko-KR')} 원`;

        const resultRender = selectedList.map((v) => {
            return `<li class="item-staged">
            <img class="img-item" src="resource/img/${v}_Cola.svg" alt="${v} Cola">
            <strong class="txt-item">${v} Cola</strong>
            <span class="num-counter">${selectedObj[v]}</span>
        </li>
        `}).join("");
        itemsResult.innerHTML = resultRender;
        getItemStaged.innerHTML = ``;
    })
}


const changeArea = document.querySelector(".cont-return");
const myinfoArea = document.querySelector(".my-info");
const depositArea = document.querySelector(".cont-put");
// 잔액
const changeTxt = changeArea.querySelector(".txt-balance");
const returnBtn = changeArea.querySelector(".btn-return");

// 입금액
const depositVal = depositArea.querySelector(".input-put");
const depositBtn = depositArea.querySelector(".btn-put");

// 소지금
const infoMyMoney = myinfoArea.querySelector(".txt-money");

function checkMoney () {
    returnBtn.addEventListener("click", () => {
        myMoney += change;
        infoMyMoney.textContent = `${myMoney.toLocaleString('ko-KR')} 원`;
        change = 0;
        changeTxt.textContent = `${change.toLocaleString('ko-KR')} 원`;
    })

    depositBtn.addEventListener("click", () => {
        if (depositVal.value !== "") {
            change += Number(depositVal.value);
            changeTxt.textContent = `${change.toLocaleString('ko-KR')} 원`;

            myMoney -= depositVal.value;
            infoMyMoney.textContent = `${myMoney.toLocaleString('ko-KR')} 원`;
        } else {
            alert("입금액을 입력해주세요.")
        }
    })
}


itemSelect();
checkMoney();

