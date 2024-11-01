function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    
    if (userAgent.indexOf("Chrome") > -1) {
        return "Google Chrome";
    } else if (userAgent.indexOf("Firefox") > -1) {
        return "Mozilla Firefox";
    } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
        return "Safari";
    } else if (userAgent.indexOf("Edge") > -1) {
        return "Microsoft Edge";
    } else {
        return "Невідомий браузер";
    }
}

document.getElementById('runTaskBtn').onclick = function() {
    const browserInfo = getBrowserInfo();
    
    document.getElementById('browserInfo').value = "Тип браузера: " + browserInfo;
    
    alert("Тип вашого браузера: " + browserInfo);
    
    console.log("Тип браузера: " + browserInfo);
};
