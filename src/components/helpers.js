const sortByDateDESC = function (array) {
    array.sort((a, b) => { 
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);

        return dateB - dateA
    })
    return array
}
 
const filterAndSortArrayByString = function (array, filteredString) {
    const sortedArray = sortByDateDESC(array)
    const filteredArray = sortedArray.filter(item => item.filters.includes(filteredString))

    return filteredArray
}

module.exports = {
    sortByDateDESC: sortByDateDESC,
    filterAndSortArrayByString: filterAndSortArrayByString
}