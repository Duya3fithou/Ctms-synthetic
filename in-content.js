window.onload = function () {
    let button = document.createElement('button');

    button.innerHTML = 'Receive and analyze data';
    document.body.prepend(button);

    button.addEventListener('click', function () {
        let list = document.getElementsByTagName('TR');
        const data = [];
        for (let i = 5; i < list.length; i++) {
            const quantity = list[i].getElementsByTagName('TD')[1].innerText;
            const diligence = list[i].getElementsByTagName('TD')[4].innerText;
            const midterm = list[i].getElementsByTagName('TD')[5].innerText;
            const endterm = list[i].getElementsByTagName('TD')[6].innerText;
            const point_avg = Number(diligence) * 0.1 + Number(midterm) * 0.2 + Number(endterm) * 0.7;
            let dataSubject = {
                subjectName: list[i].getElementsByTagName('TD')[0].innerText,
                quantity,
                subjectId: list[i].getElementsByTagName('TD')[2].innerText,
                teacher: list[i].getElementsByTagName('TD')[3].innerText,
                diligence,
                midterm,
                endterm,
                point_avg: Math.round(point_avg * 100) / 100
            };
            data.push(dataSubject);
        }

        chrome.extension.sendMessage({
            type: 'data',
            data: data
        });
    });
};
