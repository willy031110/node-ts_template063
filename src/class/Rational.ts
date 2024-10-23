/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
export class Rational {
    numerator:number;
    denominator:number;

    constructor(numerator: number, denominator: number){
        this.numerator = numerator;
        this.denominator = denominator;
    }

    public getNumerator():number{
        return this.numerator;
    }

    public getDenominator():number{
        return this.denominator;
    }

    public normalize():Rational{
        let gcd = this.gcd(this.numerator, this.denominator);
        this.numerator /= gcd;
        this.denominator /= gcd;
        return this;
    }

    public gcd(a:number, b:number):number{
        while(b != 0){
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public isWhole():boolean{
        return this.numerator % this.denominator == 0;
    }

    public isDecimal():boolean{
        return !this.isWhole();
    }

    public equals(r:Rational):boolean{
        const normalized1 = this.normalize();
        const normalized2 = r.normalize();
        return normalized1.numerator == normalized2.numerator && normalized1.denominator == normalized2.denominator;
    }

    public static _parseRational(numArray:String[], denomArray:String[]):Rational{
        const numerator = parseInt(numArray.join(''));
        const denominator = parseInt(denomArray.join(''));
        return new Rational(numerator, denominator);
    }

    public static parseRational(rationalStr:String):Rational{
        const parts = rationalStr.split("/");
        const numerator = parseInt(parts[0]);
        const denominator = parseInt(parts[1]);
        return new Rational(numerator, denominator);
    }

    public toString():String{
        return `${this.numerator}/${this.denominator}`;
    }
}