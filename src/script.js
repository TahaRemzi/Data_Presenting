
function copyToClipboard_1() {
    var copyText = document.getElementById("myinput_1");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(copyText.value).then(function() {
        alert("Copied the text: " + copyText.value);
    }, function(err) {
        console.error('Failed to copy text: ', err);
    });
}
function copyToClipboard_2() {
    var copyText = document.getElementById("myinput_2");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(copyText.value).then(function() {
        alert("Copied the text: " + copyText.value);
    }, function(err) {
        console.error('Failed to copy text: ', err);
    });
}