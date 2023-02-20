const script = document.createElement('script');
script.src = chrome.runtime.getURL('lib/lottie.min.js');
document.head.appendChild(script);


const duckyDiv = document.createElement("div");
duckyDiv.className = "ducky ducky-is-dead";
duckyDiv.innerHTML = `
<div id="duck"></div>
`;
document.body.appendChild(duckyDiv);

var animation = lottie.loadAnimation({
    container: document.getElementById('duck'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: chrome.runtime.getURL("animation_files/ducky_hi.json")
});
document.addEventListener("selectionchange", function () {
    // const ducky = document.querySelector(".ducky");
    duckyDiv.classList.toggle("ducky-is-dead");
    const selection = window.getSelection();
    if (selection.toString()) {
        console.log("selection", selection.toString());
        if (duckyDiv.classList.contains("ducky-is-dead")) {
            duckyDiv.classList.remove("ducky-is-dead");
        }
        // selected text here
    }
});
