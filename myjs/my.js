function dialog() {
    $("#spa").html("")
    $("#span").html("")
    var a = $("#dialog").dialog({
        autoOpen: false,
        resizable: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: { effect: "explode", duration: 500 },
        modal: true,
        buttons: {
            " dong y ": function() {
                $("#span").html("ban da dong y cua so chuan bi  dong bam tat")
                $("#spa").html("ban da dong y cua so chuan bi  dong bam tat")
                console.log("ban da dong y cua so chuan bi  dong bam tat")
                alert("ban da dong y cua so chuan bi  dong bam tat")
            },
            "tat": function() {
                alert("dong cua so")
                $(this).dialog("close")
            }
        }
    });
    $("#spa").html("")
    $("#span").html("")
    console.log(a)
    $("#dialog").dialog("open")
    $("#spa").html("")
    $("#span").html("")
}