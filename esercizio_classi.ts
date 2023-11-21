console.log(" ----------------------------- SALDO DEL FIGLIO ------------------------------------");

class SonAccount {
  balance: number = 0;
  constructor(_balance: number) {
    this.balance = _balance;
  }

  oneDeposit(element: number): number {
    let deposit: number = element;
    this.balance = this.balance + deposit;
    return deposit;
  }

  oneWithDraw(element: number): number {
    let withDraw: number = element;
    this.balance = this.balance - withDraw;
    return withDraw;
  }

  twoDeposit(element: number): number {
    let deposit2: number = element;
    this.balance = this.balance + deposit2;
    return deposit2;
  }

  twoWithDraw(element: number): number {
    let withDraw2: number = element;
    // this.balance = this.balance - withDraw2;
    return withDraw2;
  }
  addIntrest(): any {
    let intrest: any = (this.balance * 10) / 100;
    this.balance = this.balance - intrest;
    return intrest;
  }
}

let saldoSon = new SonAccount(0);

console.log(
  "è stato effettuato un versamento di " + saldoSon.oneDeposit(1000) + "€, ora il tuo saldo è di " + saldoSon.balance + "€"
);

console.log(
  "è stato effettuato un prelievo di " + saldoSon.oneWithDraw(300) + "€, ora il tuo saldo è di " + saldoSon.balance + "€"
);

console.log(
  "è stato effettuato un versamento di " + saldoSon.twoDeposit(1700) + "€, ora il tuo saldo è di " + saldoSon.balance + "€"
);

console.log(
  "è stato effettuato un prelievo di " + saldoSon.oneWithDraw(600) + "€, ora il tuo saldo è di " + saldoSon.balance + "€"
);

console.log("------------------------------- SALDO DELLA MADRE ---------------------------------------");

class MotherAccount extends SonAccount {
  constructor(_balance: number) {
    super(_balance);
  }
}

let saldoMother = new MotherAccount(0);

console.log(
  "è stato effettuato un versamento di " + saldoMother.oneDeposit(1200) + "€, ora il tuo saldo è di " + saldoMother.balance + "€"
);

console.log(
  "è stato effettuato un prelievo di " + saldoMother.oneWithDraw(600) + "€, ora il tuo saldo è di " + saldoMother.balance + "€"
);

console.log(
  "è stato effettuato un versamento di " + saldoMother.twoDeposit(300) + "€, ora il tuo saldo è di " + saldoMother.balance + "€"
);

console.log(
  "è stato effettuato un prelievo di " + saldoMother.oneWithDraw(60) + "€, ora il tuo saldo è di " + saldoMother.balance + "€"
);

console.log("il suo interesse è di " + saldoMother.addIntrest() + "€, ora il tuo saldo è di " + saldoMother.balance);

console.log("-------------ESERCIZIO------------");

let depositSon = document.getElementById("deposit-son") as HTMLInputElement;
let withDrawSon = document.getElementById("withDraw-son") as HTMLInputElement;
let compila = document.getElementById("compila-son") as HTMLButtonElement;

compila.addEventListener("click", esegui);

function esegui(): void {
  let depositSonAmount: number = Number(depositSon.value);
  let withDrawSonAmount: number = Number(withDrawSon.value);
  if (depositSonAmount) {
    console.log(
      "è stato effettuato un versamento di " +
        saldoSon.oneDeposit(depositSonAmount) +
        "€, ora il tuo saldo è di " +
        saldoSon.balance +
        "€"
    );
  }
  if (withDrawSonAmount) {
    console.log(
      "è stato effettuato un prelievo di " +
        saldoSon.oneWithDraw(withDrawSonAmount) +
        "€, ora il tuo saldo è di " +
        saldoSon.balance +
        "€"
    );
  }
  depositSon.value = "";
}
