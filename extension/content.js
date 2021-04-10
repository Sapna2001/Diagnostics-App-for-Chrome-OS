chrome.runtime.onMessage.addListener((info, sender, sendResponse) => {
    console.log(info.cpu);
    console.log(info.display);
    console.log(info.memory);
    document.getElementById("archName").innerHTML = info.cpu.archName;
    document.getElementById("modelName").innerHTML = info.cpu.modelName;
    document.getElementById("processors").innerHTML = info.cpu.numOfProcessors;
    document.getElementById("features").innerHTML = info.cpu.features.length;
    document.getElementById("memoryUsed").innerHTML = ((info.memory.availableCapacity / info.memory.capacity) * 100).toFixed(1) + "%";
})