chrome.browserAction.onClicked.addListener(async (tabs) => {
    const data = await getinfo();
    chrome.tabs.sendMessage(tabs.id, data);
    console.log(data);
});

const fetchCpu = () => {
    return new Promise((resolve, reject) => {
        chrome.system.cpu.getInfo((data) => {
            resolve(data);
        });
    });
};

// const fetchStorage = () => {
//     return new Promise((resolve, reject) => {
//         chrome.system.storage.getInfo((data) => {
//             resolve(data);
//         });
//     });
// };

const fetchMemory = () => {
    return new Promise((resolve, reject) => {
        chrome.system.memory.getInfo((data) => {
            resolve(data);
        });
    });
};

const fetchDisplay = () => {
    return new Promise((resolve, reject) => {
        chrome.system.display.getInfo((data) => {
            resolve(data);
        });
    });
};

const getinfo = () => {
    return new Promise(async (resolve, reject) => {
        const cpu = await fetchCpu();
        // const storage = await fetchStorage();
        const memory = await fetchMemory();
        const display = await fetchDisplay()
        let info = {
            cpu,
            // storage,
            memory,
            display
        }
        resolve(info);
    });
};