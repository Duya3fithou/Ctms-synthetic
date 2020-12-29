chrome.extension.onMessage.addListener(function (request) {
    if(request.type === 'data') {
        analyticData(request?.data);
    }
});

const analyticData = data => {
    const {dataFilter, totalQuantity} = data;
    console.log('_data: ', data);
};
