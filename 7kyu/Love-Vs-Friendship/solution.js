function wordsToMarks(string) {
    
  return [...string].reduce((sum, char) => {
    return sum + char.charCodeAt(0) - 96;
  }, 0);
}