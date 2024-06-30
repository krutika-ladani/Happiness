document.getElementById('hug-button').addEventListener('click', function() {
    togglePopup('hug-message');
});

document.getElementById('miss-button').addEventListener('click', function() {
    togglePopup('miss-message');
});

document.getElementById('dump-button').addEventListener('click', function() {
    togglePopup('dump-message');
});

document.getElementById('hungry-button').addEventListener('click', function() {
    togglePopup('hungry-message');
});

document.getElementById('motivation-button').addEventListener('click', function() {
    togglePopup('motivation-message');
});

document.getElementById('lover-button').addEventListener('click', function() {
    togglePopup('lover-message');
});

document.getElementById('broken-button').addEventListener('click', function() {
    togglePopup('broken-message');
});

document.getElementById('missus-button').addEventListener('click', function() {
    togglePopup('missus-message');
});

document.getElementById('celebrate-button').addEventListener('click', function() {
    togglePopup('celebrate-message');
});

function togglePopup(message)
{
    var content = document.getElementById(message);
    var funPops = document.getElementsByClassName("showing");
    console.log(funPops);
    if(funPops.length>0)
    {
        funPops[0].classList.add("hidden");
        funPops[0].classList.remove("showing");
    }
        
    content.classList.remove('hidden');
    content.classList.add("showing");
}




