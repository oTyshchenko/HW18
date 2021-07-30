export const changeFontSize = (str, box) => {
    if (str) {
        if (str.length >= 0 && str.length < 8) {
            box.style.fontSize = '50px';
        } else if (str.length >= 8 && str.length < 10) {
            box.style.fontSize = '40px';
        } else if (str.length >= 10 && str.length < 13) {
            box.style.fontSize = '30px';
        } else if (str.length >= 13) {
            box.style.fontSize = '20px';
        }
      }
}