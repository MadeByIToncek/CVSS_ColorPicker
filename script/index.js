let teamName = "Jméno týmu";
let primary = "#111111";
let secondary = "#111111";

function changeTeamNameColor(color) {
    primary = color;
    $(".teamName").css({"background": color});
}
function changeTeamMemberColor(color) {
    secondary = color;
    $(".teamMember").css({"background": color});
}

function changeTeamName(name) {
    teamName = name;
    $('#teamName').html(name);
    $(".teamName").css({"background": primary});
}

function changeTeamMembers(input) {
    $("#members").empty()
    input.split(";").sort((a, b) => b.length - a.length).forEach((e) => {
        $("#members").append("<div class=\"teamBox\">\n" +
            "            <p class=\"teamMember\">" + e + "</p>\n" +
            "        </div>")
    })
    $(".teamMember").css({"background": secondary});
}

function results() {
    const out =
        "<div class=\"box\" style=\"margin: 10px;\">\n<p>Tyto hodnoty prosíme napište do tabulky k vašemu týmu.</p><br>\n<pre>Team: "+ teamName +"\nPrimary: " + primary
        +"\nSecondary: " + secondary
        +"</pre>\n</div>";
    $("#results").empty().html(out);
}