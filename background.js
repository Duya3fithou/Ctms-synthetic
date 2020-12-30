chrome.extension.onMessage.addListener(function (request) {
    if (request.type === 'data') {
        analyticData(request?.data);
    }
});

const analyticData = data => {
    let tempArray = [];
    data.map(item => {
        const idx = tempArray.findIndex(itemFind => itemFind.subjectName === item.subjectName);
        if (idx === -1) {
            tempArray.push(item);
        } else {
            tempArray[idx].point_avg = Math.max(tempArray[idx].point_avg, item.point_avg);
        }
    });
    const dataFilter = tempArray.filter(item => item.quantity !== '0' && item.point_avg >= 5);
    let totalSubjectQuantity = 0;
    let totalPointQuantity = 0;
    dataFilter.forEach(item => {
        totalSubjectQuantity += Number(item.quantity);
        totalPointQuantity += Number(item.point_avg) * Number(item.quantity);
    });

    console.log('dataFilter: ', dataFilter);
    console.log('totalSubjectQuantity: ', totalSubjectQuantity);
    console.log('totalPointQuantity: ', totalPointQuantity);
    console.log('total point avg: ', totalPointQuantity/totalSubjectQuantity)
    console.log('total point avg 4: ', ((totalPointQuantity/totalSubjectQuantity) * 4) / 10)
};
