export function wc (text){
    let words = {};
    text = text.split(" ");
    
    text.forEach(word => {
        if (word in words){
            words[word]++;
        } else{
            words[word] = 1;
        }
    });
    return words;
}

console.log(wc("the function shall return an object whose properties are the words and the values of these properties are the occurrence numbers"))
console.log(wc("fish bowl fish bowl fish"))

export class WList {
    constructor(list){
        this.words = list.split(" "),
        this.count = wc(list);
        this.wordsSort = new Set(this.words);
    }
    
    getWords(){
        let sorted = Array.from(this.wordsSort)

        return sorted
    }

    getCount(word){
        let count = 0;
        this.words.forEach(word2 =>{
            if (word2 === word){
                count++;
            }
        });
    }

    maxCountWord(){
        let maxWord = null;
        let maxCount = 0;
        for (const word of this.wordsSort) {
            const count = this.count[word];
            if (count > maxCount) {
              maxWord = word;
              maxCount = count;
            }
          }
          return maxWord;
    }

    minCountWord(){
        let minWord = null;
        let minCount = 10000000;
        for (const word of this.wordsSort) {
            const count = this.count[word];
            if (count < minCount) {
              minWord = word;
              minCount = count;
            }
          }
          return minWord;
    }

    applyWordFunc(f){

            const results = [];
        for (const word of this.wordsSort) {
            results.push(f(word));
        }
        return results;
        }
    }
    
