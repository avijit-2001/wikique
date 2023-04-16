export const listToObject = (mySet) => {
    const myList = [...mySet].map((element) => {
        return element;
      });
    let res = {};
    for(let i = 0; i < myList.length; i++) {
        res[myList[i]] = myList[i];
    }
    return res;
};
