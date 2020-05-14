const sortByDateASC = function (array) {
    array.sort((a, b) => { 
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);

        return dateA - dateB
    })
    return array
}

const sortByDateDESC = function (array) {
    array.sort((a, b) => { 
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);

        return dateB - dateA
    })
    return array
}
 
const filterArrayByString = function (array, filteredString) {
    // const sortedArray = sortByDateDESC(array)
    const filteredArray = array.filter(item => item.filters.includes(filteredString))

    return filteredArray
}

module.exports = {
    sortByDateASC: sortByDateASC,
    sortByDateDESC: sortByDateDESC,
    filterArrayByString: filterArrayByString
}