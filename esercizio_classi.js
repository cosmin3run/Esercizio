var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log(" ----------------------------- SALDO DEL FIGLIO ------------------------------------");
var SonAccount = /** @class */ (function () {
    function SonAccount(_balance) {
        this.balance = 0;
        this.balance = _balance;
    }
    SonAccount.prototype.oneDeposit = function (element) {
        var deposit = element;
        this.balance = this.balance + deposit;
        return deposit;
    };
    SonAccount.prototype.oneWithDraw = function (element) {
        var withDraw = element;
        this.balance = this.balance - withDraw;
        return withDraw;
    };
    SonAccount.prototype.twoDeposit = function (element) {
        var deposit2 = element;
        this.balance = this.balance + deposit2;
        return deposit2;
    };
    SonAccount.prototype.twoWithDraw = function (element) {
        var withDraw2 = element;
        // this.balance = this.balance - withDraw2;
        return withDraw2;
    };
    SonAccount.prototype.addIntrest = function () {
        var intrest = (this.balance * 10) / 100;
        this.balance = this.balance - intrest;
        return intrest;
    };
    return SonAccount;
}());
var saldoSon = new SonAccount(0);
console.log("è stato effettuato un versamento di " + saldoSon.oneDeposit(1000) + "€, ora il tuo saldo è di " + saldoSon.balance + "€");
console.log("è stato effettuato un prelievo di " + saldoSon.oneWithDraw(300) + "€, ora il tuo saldo è di " + saldoSon.balance + "€");
console.log("è stato effettuato un versamento di " + saldoSon.twoDeposit(1700) + "€, ora il tuo saldo è di " + saldoSon.balance + "€");
console.log("è stato effettuato un prelievo di " + saldoSon.oneWithDraw(600) + "€, ora il tuo saldo è di " + saldoSon.balance + "€");
console.log("------------------------------- SALDO DELLA MADRE ---------------------------------------");
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(_balance) {
        return _super.call(this, _balance) || this;
    }
    return MotherAccount;
}(SonAccount));
var saldoMother = new MotherAccount(0);
console.log("è stato effettuato un versamento di " + saldoMother.oneDeposit(1200) + "€, ora il tuo saldo è di " + saldoMother.balance + "€");
console.log("è stato effettuato un prelievo di " + saldoMother.oneWithDraw(600) + "€, ora il tuo saldo è di " + saldoMother.balance + "€");
console.log("è stato effettuato un versamento di " + saldoMother.twoDeposit(300) + "€, ora il tuo saldo è di " + saldoMother.balance + "€");
console.log("è stato effettuato un prelievo di " + saldoMother.oneWithDraw(60) + "€, ora il tuo saldo è di " + saldoMother.balance + "€");
console.log("il suo interesse è di " + saldoMother.addIntrest() + "€, ora il tuo saldo è di " + saldoMother.balance);
console.log("-------------ESERCIZIO------------");
var depositSon = document.getElementById("deposit-son");
var withDrawSon = document.getElementById("withDraw-son");
var compila = document.getElementById("compila-son");
compila.addEventListener("click", esegui);
function esegui() {
    var depositSonAmount = Number(depositSon.value);
    var withDrawSonAmount = Number(withDrawSon.value);
    if (depositSonAmount) {
        console.log("è stato effettuato un versamento di " +
            saldoSon.oneDeposit(depositSonAmount) +
            "€, ora il tuo saldo è di " +
            saldoSon.balance +
            "€");
    }
    if (withDrawSonAmount) {
        console.log("è stato effettuato un prelievo di " +
            saldoSon.oneWithDraw(withDrawSonAmount) +
            "€, ora il tuo saldo è di " +
            saldoSon.balance +
            "€");
    }
    depositSon.value = "";
}
