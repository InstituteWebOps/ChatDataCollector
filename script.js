var chatID;
$.get("fetch.php", function(data, status) {
    // console.log(data);
    var chat = [];
    chat = JSON.parse(data);
    $("#name").text(chat.name);
    chat.chat.forEach(function(item) {
        ($(".content").html($(".content").html() + "<div class=\"box " + item[0] + "\">" + item[1] + "</div>\n"));
    }, this);
    chatID = chat.id;
});

function submittext() {
    ($(".content").html($(".content").html() + "<div class=\"box user2\">" + $(".userinput").val() + "</div>\n"));
    $(".content").scrollTop($(".content")[0].scrollHeight);
    $.post("store.php", { chatID: chatID, response: $(".userinput").val() }, function(data) {
        console.log(data);
    });
    showSnackBar()
    return false;
}

function showSnackBar() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
}