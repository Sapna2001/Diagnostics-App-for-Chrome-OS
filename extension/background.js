chrome.browserAction.onClicked.addListener(async (tabs) => {
    const data = await getinfo();
    chrome.tabs.sendMessage(tabs.id, data);
});

const fetchCpu = () => {
    return new Promise((resolve, reject) => {
        chrome.system.cpu.getInfo((data) => {
            resolve(data);
        });
    });
};

const fetchMemory = () => {
    return new Promise((resolve, reject) => {
        chrome.system.memory.getInfo((data) => {
            resolve(data);
        });
    });
};

const getinfo = () => {
    return new Promise(async (resolve, reject) => {
        const cpu = await fetchCpu();
        const memory = await fetchMemory();
        let info = {
            cpu,
            memory,
        }
        resolve(info);
    });
};