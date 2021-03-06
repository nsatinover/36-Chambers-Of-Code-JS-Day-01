class Problem {
        /**
     * Have the wordCount(input) take the str string parameter being passed
     * and return the number of words the string contains
     * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
     * separated by single spaces.
     */
    wordCount(input) {
        // code goes here
        return input.split(' ').length;
    }


    /**
     * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first 
     letter of each word. Words will be separated by only one space.
    * 
    */
    letterCapitalize(str) {
        let returnStr = "";
        let arr = str.split(' ');
        arr.forEach(word => {
            word = word.charAt(0).toUpperCase() + word.slice(1);
            returnStr += word + ' ';
        });
        
        return returnStr.trim();;
    }



    /**
     * Have the function firstReverse(String input) take the input parameter being passed and
     * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
     * program should return the string sredoC dna dlroW olleH.
     */

    firstReverse(input){
        let returnStr = "";
        for(let i = input.length - 1; i >= 0; i--) {
            returnStr += input[i];
        }
        return returnStr;
    }

    /**
     * Have the longestWord(String input) take the input parameter being passed and return the
     * largest word in the string. If there are two or more words that are the same length,
     * return the first word from the string with that length. Ignore punctuation and assume
     * input will not be empty.
     */
    longestWord(input) {
        let arr = input.split(/[^a-zA-Z]/);
        let returnStr = "";
        arr.forEach(word => {
            if(word.length > returnStr.length){
                returnStr = word;
            }
        })
        return returnStr;
    }

    /**
     * Have the swapCase(String input) take the input parameter and swap the case of each
     * character. For example: if str is "Hello World" the output should be hELLO wORLD.
     * Let numbers and symbols stay the way they are.
     */
    swapCase(str) {
        let returnStr = "";
        str.split('').forEach(letter => {
            if(letter === letter.toUpperCase()){
                returnStr += letter.toLowerCase();
            }
            else if(letter === letter.toLowerCase()){
                returnStr += letter.toUpperCase();
            }  
            else {
                returnStr += letter;
            }
        })
        return returnStr;;
    }

}

module.exports = Problem;