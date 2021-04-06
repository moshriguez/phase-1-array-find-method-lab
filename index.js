function superbowlWin(arr) {
    const win = arr.find(element => (element.result === 'W'))
    if (win !== undefined) {
        return win.year;
    }
}
