const deepClone = (before) => {
    let end;
    if (before instanceof Object) {
        // 判断 Array -> Date -> map -> Set -> 其他Object
        if(before instanceof Array){
            end = new Array();
            before.forEach(d =>{
                end.push(d);
            })
        } else if(before instanceof Date){

        }else if (before instanceof Map) {
            end = new Map();
            for (let [key, value] of before) {
                end.set(key, deepClone(value));
            }
        } else if (before instanceof Set) {
            end = new Set();
            before.forEach(value => {
                end.add(deepClone(value));

            })
        } else{
            end = new Object();
            Object.keys(before).forEach((d) => {
                end[d] = deepClone(before[d]);
            });
        }
    } else {
        end = before;
    }
    return end;
};
module.exports = {
    deepClone
}