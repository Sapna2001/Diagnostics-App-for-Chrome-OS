chrome.runtime.onMessage.addListener((info, sender, sendResponse) => {
    document.getElementById("archName").innerHTML = info.cpu.archName;
    document.getElementById("modelName").innerHTML = info.cpu.modelName;
    document.getElementById("processors").innerHTML = info.cpu.numOfProcessors;
    document.getElementById("features").innerHTML = info.cpu.features.length;
    document.getElementById("memoryUsed").innerHTML = ((info.memory.availableCapacity / info.memory.capacity) * 100).toFixed(1) + "%";
    document.getElementById("display").innerHTML = info.display[0].name;
    document.getElementById("displayHeight").innerHTML = info.display[0].bounds.height;
    document.getElementById("displayWidth").innerHTML = info.display[0].bounds.width;
})