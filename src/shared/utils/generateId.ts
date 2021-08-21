export function GenerateId(len: number, base?: string) {
  base =
    base || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  var randomString = "";
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * base.length);
    randomString += base.substring(randomPoz, randomPoz + 1);
  }

  return randomString;
}
