window.onload = function() {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "secret.json", true)
    xhr.send(null)
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var secrets = JSON.parse(xhr.responseText)
            for (var i in secrets) {
                var dbname = secrets[i].dbname
                var el = document.createElement('div')
                el.innerHTML = '<button id="' + i + '">' + dbname + '</button>'
                document.body.appendChild(el)
            }
            document.body.onclick = function(event) {
                var event = event || window.event
                var target = event.target
                if (target.nodeName.toLowerCase() === 'button') {
                    var buttonId = target.getAttribute('id');
                    (function getCurrentTabId(callback) {
                        chrome.tabs.query({
                            active: true,
                            currentWindow: true
                        }, function(tabs) {
                            if (callback) {
                                callback(tabs.length ? tabs[0].id : null)
                            }
                        })
                    })(function(tabId) {
                        var codeStr = 'document.getElementById("input_password").value ="' + secrets[buttonId].pwd + '";' +
                            'document.getElementById("input_username").value ="' + secrets[buttonId].user + '"'
                        chrome.tabs.executeScript(tabId, { code: codeStr });
                    })
                }
            }
        }
    }
}