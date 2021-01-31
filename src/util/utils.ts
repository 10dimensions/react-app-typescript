function binarySearch(ar, el, compare_fn) {
  if (el.price < ar[0].price) return 0;
  if (el.price > ar[ar.length - 1].price) return ar.length;
  var m = 0;
  var n = ar.length - 1;
  while (m <= n) {
    var k = (n + m) >> 1;
    var cmp = compare_fn(el, ar[k]);
    if (cmp > 0) {
      m = k + 1;
    } else if (cmp < 0) {
      n = k - 1;
    } else {
      return k;
    }
  }
  return -m - 1;
}

function compareString(a, b) {
  return a["name"].localeCompare(b["name"]);
}

export { binarySearch, compareString };
