import axios from 'axios';

function zhongerbingData() {
  return axios.get('https://raw.githubusercontent.com/DarkFlameMastaa/zhongerbingData/master/zhongerbinData.json')
  .then((response) => (
          response.data
          ))
  .catch(function (error) {
    console.log(error);
  });
}
function serchUserName(un) {
  return axios.get(`https://api.github.com/users/${un}`)
  .then((response) => (
          response.data
          ))
  .catch(function (error) {
    console.log(error);
  });
}

function getArticle(name) {
  return axios.get(`https://raw.githubusercontent.com/DarkFlameMastaa/markdownarticle/master/${name}.md`)
  .then((response) => (
          response.data
          ))
  .catch(function (error) {
    console.log(error);
  });
}

export {zhongerbingData}
export {serchUserName}
export {getArticle}
