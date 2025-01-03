import { initAccountsOptions } from './accountsOptions.js';
import { initFloatingTab } from './floatingTabs.js';
import { initProfileIdCopy } from './profileIdCopy.js';
import { initLeftPanelFilter } from './leftPanelFilter.js';
import { initPasswordCheck } from './passwordCheck.js';
import { leftPanelScrollTags } from './leftPanel.js';

initFloatingTab();

const verifyNumber = num => typeof num === "number" && !isNaN(num);
function formatCents(cents) {
    if (typeof cents !== "number" || isNaN(cents)) return;
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL",
    });

    return formatter.format(cents / 100);
};

const updateMenuCurrentOperations = data => {
    if (!data || JSON.stringify(data) === "{}") return;
    const negotiationValue = document.querySelector(".negotiationValue"),
        negotiationFitLoss = document.querySelector(".negotiationFitLoss"),
        negotiationOpen = document.querySelector(".negotiationOpen"),
        negotiationClose = document.querySelector(".negotiationClose"),
        negotiationOpenContent = negotiationOpen && negotiationOpen.querySelector(".negotiationOpenContent"),
        negotiationNoneContent = negotiationClose && negotiationClose.querySelector(".negotiationNoneContent");

    if (negotiationValue && verifyNumber(data.investmentsTotal)) {
        negotiationValue.innerHTML = `
            <p>Valor total</p>
            <p>${formatCents(data.investmentsTotal)}</p>
        `;
    };

    if (negotiationFitLoss && verifyNumber(data.profit)) {
        const color = data.profit >= 0 ? "#1b985e" : "#e24f32";
        negotiationFitLoss.innerHTML = `
            <p>Lucro e Prejuízo</p>
            <p style="color: ${color};">${formatCents(data.profit)}</p>
        `;
    };

    if (negotiationOpenContent && data.profits && Array.isArray(data.profits)) {
        const hasProfits = data.profits.length;
        negotiationOpen.style.display = !hasProfits ? "none" : "block";
        if (negotiationNoneContent) negotiationClose.style.display = !hasProfits ? "block" : "none";
        negotiationOpenContent.innerHTML = !hasProfits ? "" : data.profits.sort((a, b) => a.endTime - b.endTime).map(profit => {
            const isUp = ["up", "1"].includes(String(profit.direction))
                , color = isUp ? "#1b985e" : "#e24f32"
                , profitColor = profit.profit >= 0 ? "#1b985e" : "#e24f32"
                , arrowDirection = !isUp ? "transform: rotate(180deg);" : ""
                , payoutPercent = parseFloat(profit.payout) * 100

                , curDate = new Date()
                , textTime = profit.endTime - curDate.getTime()
                , timeDate = new Date(textTime)
                , hours = new Date(profit.endTime).getHours() - curDate.getHours()
                , minutes = timeDate.getMinutes()
                , seconds = timeDate.getSeconds()
                , resultTimeText = hours ? `${hours} hora${hours > 1 ? "s" : ""}.` : minutes ? `${String(minutes).padStart(2, "0")} min.` : `${String(seconds || 0).padStart(2, "0")} seg.`;

            return `
                <div class="assetItem ${profit.tag}">
                    <div class="assetNegotiationItem">
                        <div class="iconItem">
                            <img src="${profit.image}" alt="">
                        </div>
                        <div class="detailsAssetNegotiation">
                            <div class="topInfos">
                                <div class="assetName">
                                    <p>${profit.symbol || profit.tickerSymbol}</p>
                                    <p>•</p>
                                    <p>${payoutPercent || 95}%</p>
                                </div>
                                <div class="time">
                                    <p>${resultTimeText}</p>
                                </div>
                            </div>
                            <div class="assetFt">
                                <div class="activeValue">
                                    <p>${formatCents(profit.betValueUsdCents)}</p>
                                    <svg class="ohGHbMkZKR" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true" style="width: 16px; ${arrowDirection} height: 16px;"><path fill="${color}" fill-rule="evenodd" d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z" clip-rule="evenodd"></path></svg>
                                </div>
                                <p class="assetItemLucro" style="color: ${profitColor};">${formatCents(profit.profit)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join("");
    };

    const exploreSymbolsButton = [].slice.call(document.querySelectorAll(".exploreSymbols"))
        , buttons = exploreSymbolsButton?.length && exploreSymbolsButton.filter(btn => !btn.hasEventButton);
    if (buttons?.length) {
        for (const button of buttons.filter(it => !it.hasEventButton)) {
            button.hasEventButton = true;
            button.onclick = () => {
                const openNewSymbol = document.getElementById("openNewSymbol");
                if (openNewSymbol) openNewSymbol.click();
            };
        };
    };
};


const formatTimestamp = timestamp => {
    const date = new Date(timestamp)
        , day = String(date.getDate()).padStart(2, '0')
        , month = String(date.getMonth() + 1).padStart(2, '0')
        , year = date.getFullYear()
        , hours = String(date.getHours()).padStart(2, '0')
        , minutes = String(date.getMinutes()).padStart(2, '0')
        , seconds = String(date.getSeconds()).padStart(2, '0')

    return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
};

const addHistoryData = data => {
    const historyList = document.querySelector(".assetMenuListScrollNegotiation .historyList");
    if (historyList && Array.isArray(data)) {
        const currDate = new Date()
            , day = currDate.getDate()
            , month = currDate.getMonth() + 1
            , year = currDate.getFullYear()
            , date = `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`

        historyList.innerHTML = `${data.map(itemData => {
            // const isUp = itemData.direction === "up"
            const isUp = ["up", "1"].includes(String(itemData.direction))
                , isWin = itemData.operationStatus === "win"
                , color = isUp ? "#1b985e" : "#e24f32"
                , arrowDirection = !isUp ? "transform: rotate(180deg);" : ""
                , payout = parseFloat(itemData.payout)
                , payoutPercent = payout * 100
                , profit = isWin ? itemData.betValueUsdCents + (payout * itemData.betValueUsdCents) : -itemData.betValueUsdCents
                , profitColor = profit >= 0 ? "#1b985e" : "#e24f32"

            itemData.tag ??= "CRIPTO";
            const type = {
                "CRIPTO": "Cripto",
                "FOREX": "Forex",
                "STOCKS": "Stocks",
            }[itemData.tag] || "Cripto";

            const resultTimeText = formatTimestamp(itemData.endTimeUtc * 1000);
            return `
                <div class="assetItem ${itemData.tag}">
                    <div class="assetNegotiationItem">
                        <div class="iconItem">
                            <img src="${itemData.image}" alt="">
                        </div>
                        <div class="detailsAssetNegotiation">
                            <div class="topInfos">
                                <div class="assetName">
                                    <p>${itemData.symbol || itemData.tickerSymbol}</p>
                                    <!--<p>•</p>
                                    <p>${payoutPercent || 95}%</p>-->
                                </div>
                                <div class="time">
                                    <p>${resultTimeText}</p>
                                </div>
                            </div>
                            <div class="assetFt">
                                <div class="activeValue">
                                    <p>${formatCents(itemData.betValueUsdCents)}</p>
                                    <svg class="ohGHbMkZKR" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true" style="width: 16px; ${arrowDirection} height: 16px;"><path fill="${color}" fill-rule="evenodd" d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z" clip-rule="evenodd"></path></svg>
                                </div>
                                <p class="assetItemLucro" style="color: ${profitColor};overflow: hidden; white-space: nowrap; max-width: 5rem;text-overflow: ellipsis;">${formatCents(profit)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join("")}`;
    };
};
const addHistoryItem = data => {
    const historyList = document.querySelector(".assetMenuListScrollNegotiation .historyList");
    if (historyList) {

        const isUp = ["up", "1"].includes(String(data.direction))
            , color = isUp ? "#1b985e" : "#e24f32"
            , profitColor = data.profit >= 0 ? "#1b985e" : "#e24f32"
            , arrowDirection = !isUp ? "transform: rotate(180deg);" : ""
            , payoutPercent = parseFloat(data.payout * 100)
            , resultTimeText = formatTimestamp(data.endTimeUtc * 1000);

        const template = document.createElement("template");
        template.innerHTML = `
            <div class="assetItem ${data.tag}">
                <div class="assetNegotiationItem">
                    <div class="iconItem">
                        <img src="${data.image}" alt="">
                    </div>
                    <div class="detailsAssetNegotiation">
                        <div class="topInfos">
                            <div class="assetName">
                                <p>${data.symbol || data.tickerSymbol}</p>
                                <!--<p>•</p>
                                <p>${payoutPercent || 95}%</p>-->
                            </div>
                            <div class="time">
                                <p>${resultTimeText}</p>
                            </div>
                        </div>
                        <div class="assetFt">
                            <div class="activeValue">
                                <p>${formatCents(data.betValueUsdCents)}</p>
                                <svg class="ohGHbMkZKR" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true" style="width: 16px; ${arrowDirection} height: 16px;"><path fill="${color}" fill-rule="evenodd" d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z" clip-rule="evenodd"></path></svg>
                            </div>
                            <p class="assetItemLucro" style="color: ${profitColor};overflow: hidden; white-space: nowrap; max-width: 5rem;text-overflow: ellipsis;">${formatCents(data.profit)}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        let htmlElement = template.content.cloneNode(true);
        historyList.appendChild(htmlElement);
    };
};

(function () {
    window.addEventListener("message", event => {
        const data = event.data || event.detail || {};
        if (!data || !data.event || !data.payload) return;
        const payload = data.payload;
        if (!payload) return;

        if (data.event === "updateInvestmentsInfos") {
            // console.log(payload)
            updateMenuCurrentOperations(payload);
        };
        if (data.event === "initAccountsOptions") {
            initAccountsOptions();
        };

        if (data.event === "initLeftPanelFilter") {
            initLeftPanelFilter();
        };

        if (data.event === "updateHistory") {
            addHistoryItem(payload)
        };
    })
})();

function panelLeftOpen(target) {
    if ($("#panelLeftTabsId").length) {
        $.get(target, function (data) {
            try {
                $("#panelLeftTabsId").html(data)
                if (target === "components/panelLeft/panelLeftNegotiation.php") {
                    const historyList = document.querySelector("#panelLeftTabsId .historyList");
                    if (historyList) {
                        historyList.innerHTML = ""
                        addHistoryData(window.historyData);
                    };
                };
                $("#panelLeftTabsId").addClass('active');
            } catch (error) {
                console.debug(error)
            }
        }).fail(function (err) {
            console.debug("Erro ao carregar o conteúdo.", err);
        });
    };
};

function panelLeftClose() {
    $("#panelLeftTabsId").removeClass('active');
    setTimeout(() => {
        $("#panelLeftTabsId").empty();
    }, 250);
}

$(document).on("click", ".panelBtnOpen", function () {
    var target = $(this).data("target");
    panelLeftOpen(target);
});

$(document).on("click", ".iconClose", function () {
    panelLeftClose();
});

//////////////////////////////////////////////////////////////////////////////////////////

// Função para abrir o sidebar
function sidebarRightOpen(target) {
    $.get(target, function (data) {
        try {
            $("#sidebarRightId").html(data);
            $("#sidebarRightId").addClass('active');
            if (target === "components/sideBar/newPasswordSideBar.php") {
                initPasswordCheck();
            }
            if (target === "components/sideBar/profileSideBar.php") {
                initProfileIdCopy();
            }
            if (target === "components/sideBar/accountSideBar.php") {
                initAccountsOptions();
            }
        } catch (error) {
            console.debug(error)
        }
    }).fail(function (err) {
        console.debug("Erro ao carregar o conteúdo.", err);
    });
}

function sidebarRightClose() {
    $("#sidebarRightId").empty().removeClass('active');
}

$(document).on("click", ".sidebarBtnOpen", function () {
    var target = $(this).data("target");
    sidebarRightOpen(target);
});

$(document).on("click", ".iconClose", function () {
    sidebarRightClose();
});