// import axios from 'axios';

// const gitRequest = function () {
//     const API = `https://api.github.com/repos/nayemalam/portfoliov2/branches/dev`;

//     let commit = ''

//     axios.get(API)
//     .then(result => {
//         commit = result.data.commit
//     })
//     .catch(error => {
//         if(axios.isCancel(error)) {
//             console.log("Can’t access " + API + " response. Blocked by browser", error)
//         }
//     })
//     return commit
// }

// module.exports = {
//     gitRequest: gitRequest
// }