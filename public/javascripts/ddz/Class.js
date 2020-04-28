// 对应 0 ~ 12
const pokerText = ["3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2"];
// 对应 0 ~ 3
const flowerText = ["黑桃", "红桃", "梅花", "方块"];
class Poker {
    constructor(value, flower, room) {
        this.room = room;
        if (value instanceof String) {
            this.value = pokerText.findIndex(d => d == value);
        } else {
            this.value = value;
        }
        if (flower instanceof String) {
            this.flower = flowerText.findIndex(d => d == flower);
        } else {
            this.flower = flower;
        }
    }
    getPokerText() {
        return pokerText[this.value];
    }
    getFlowerText() {
        return flowerText[this.flower];
    }
    compare(poker) {
        if (poker instanceof Poker) {
            return this.value - poker.value;
        } else {
            return false; //无法比较,只能和Poker进行比较
        }
    }
    getRemain() { //剩余那些牌
        return totalPoker;
    }
}
//所有牌
resetPoker = (room) => {
    const allPoker = [];
    pokerText.forEach((pt, value) => {
        flowerText.forEach((ft, flower) => {
            allPoker.push(new Poker(value, flower, room));
        })
    })
    return allPoker;
}
const totalPoker = resetPoker();
module.exports = {
    Poker,
    resetPoker
};