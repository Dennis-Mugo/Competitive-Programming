var sortSentence = function(s) {
    s = s.split(" ");
    s.sort((word1, word2) => {
        let m = word1.length;
        let n = word2.length;
        return parseInt(word1[m - 1]) - parseInt(word2[n - 1]);
        });
    s = s.map(word => word.slice(0, -1));
    return s.join(" ");
    
};