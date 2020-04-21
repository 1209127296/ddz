// 对应 0 ~ 12
// const pokerText = ["A", "2","3","4","5","6","7","8","9","10","J","Q","K"];
// 对应 0 ~ 3
// const flowerText = ["黑桃","红桃","梅花","方块"];
class Poker {
    constructor(value , flower) {
        this.value = value;
        this.flower = flower;
    }
}
module.exports = Poker;