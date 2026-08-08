function spEng(sentence) {

  // Convert the sentence to lowercase and check for the word "english"
  return sentence.toLowerCase().includes("english");
}

console.log(spEng("eNglisH"));