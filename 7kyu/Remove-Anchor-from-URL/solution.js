function removeUrlAnchor(url) {
    
  // Return the original URL if it doesn't contain an anchor.
  if (!url.includes("#")) {
    return url;
  }

  // Return the URL without the anchor and everything after it.
  let position = url.indexOf("#");
  return url.substring(0, position);
}

console.log(removeUrlAnchor("www.codewars.com#about"));