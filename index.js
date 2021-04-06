function superbowlWin(arr) {
    const win = arr.find(
    function find(element, index, array) {
        return (element.result === 'W');
    })
    if (win !== undefined) {
        return win.year;
    }
}
