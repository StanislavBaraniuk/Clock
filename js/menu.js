/**
 * Created by cktuser on 26.03.2017.
 */

var colEv = 0, coLId = 0, colIdBlock = 0, colEvBlock = 0, coLComBlock = 0;

function OnStart() {
    $('img').attr({
        "ondrag":"return false",
        "ondragdrop":"return false",
        "ondragstart":"return false"
    });
}

function CompletedBlock() {
    document.getElementById("TasksComplet").style.overflowY = "visible";
    document.getElementById("TasksComplet").style.overflowX = "hidden";
    if ($('#IdeasBlock').hasClass("IdeasBlockAct")) {
        $('#IdeasBlock').removeClass("IdeasBlockAct");
        $('#IdeasBlock').addClass("IdeasBlockDes");
    } else if ($('#TasksProces').hasClass("TasksProcesAct")) {
        $('#TasksProces').removeClass("TasksProcesAct");
        $('#TasksProces').addClass("TasksProcesDes");
    }
    $('#TasksComplet').removeClass("TasksCompletDes");
    $('#TasksComplet').addClass("TasksCompletAct");
    $('#Ideas').removeClass("IdeasAct");
    $('#ProcP').removeClass("ProcPAct");
    $('#ComP').addClass("ComPAct");
    if (coLComBlock < 7) {
        document.getElementById("TasksComplet").style.overflowY = "hidden";
        document.getElementById("TasksComplet").style.overflowX = "hidden";
    }
}

function ProcesBlock() {
    document.getElementById("TasksProces").style.overflowY = "visible";
    document.getElementById("TasksProces").style.overflowX = "hidden";
    if ($('#IdeasBlock').hasClass("IdeasBlockAct")) {
        $('#IdeasBlock').removeClass("IdeasBlockAct");
        $('#IdeasBlock').addClass("IdeasBlockDes");
    } else if ($('#TasksComplet').hasClass("TasksCompletAct")) {
        $('#TasksComplet').removeClass("TasksCompletAct");
        $('#TasksComplet').addClass("TasksCompletDes");
    }
    $('#TasksProces').removeClass("TasksProcesDes");
    $('#TasksProces').addClass("TasksProcesAct");
    $('#ComP').removeClass("ComPAct");
    $('#Ideas').removeClass("IdeasAct");
    $('#ProcP').addClass("ProcPAct");
    if (colEvBlock < 7) {
        document.getElementById("TasksProces").style.overflowY = "hidden";
        document.getElementById("TasksProces").style.overflowX = "hidden";
    }
}

function IdeasBlock() {
    document.getElementById("IdeasBlock").style.overflowY = "visible";
    document.getElementById("IdeasBlock").style.overflowX = "hidden";
    if ($('#TasksProces').hasClass("TasksProcesAct")) {
        $('#TasksProces').removeClass("TasksProcesAct");
        $('#TasksProces').addClass("TasksProcesDes");
    } else if ($('#TasksComplet').hasClass("TasksCompletAct")) {
        $('#TasksComplet').removeClass("TasksCompletAct");
        $('#TasksComplet').addClass("TasksCompletDes");
    }

    $('#IdeasBlock').removeClass("IdeasBlockDes");
    $('#IdeasBlock').addClass("IdeasBlockAct");
    $('#ProcP').removeClass("ProcPAct");
    $('#ComP').removeClass("ComPAct");
    $('#Ideas').addClass("IdeasAct");
    if (colIdBlock < 7) {
        document.getElementById("IdeasBlock").style.overflowY = "hidden";
        document.getElementById("IdeasBlock").style.overflowX = "hidden";
    }
}

function CreateBut() {
    $('#NewEvent').hide();

    $('#IFCreateNewEvent').removeClass("IFCreateNewEventDes");
    $('#IFCreateNewEvent').addClass("IFCreateNewEventAct");
}

function CreateNewEvent() {
    var TextEvent = document.getElementById('NewEventText').value;
    var TimeEvent = document.getElementById('TimeC').value;
    var DateEvent = document.getElementById('Calendar').value;
    // alert(DateEvent);
    var Prov = false;
    if (TextEvent.length > 30) {}
    if (TextEvent.length > 0 && TimeEvent.length !== 0 && DateEvent.length !== 0) {

        colEv++;
        colEvBlock++;
        var TXTEv = $("p.TaskText")[0];
        $("div.TaskBlockStanadart").find(TXTEv).text(TextEvent);
        var TIMEv = $("p.TaskDateTime")[0];
        $("div.TaskBlockStanadart").find(TIMEv).text(TimeEvent);
        var DATEv = $("p.TaskDateNumb")[0];
        $("div.TaskBlockStanadart").find(DATEv).text(DateEvent);

        var Delete = $("div.DeleteImg")[0];
        $("div.TaskBlockStanadart").find(Delete).addClass("ent" + colEv);

        $(".TaskBlockStanadart").clone().appendTo(".ForTasksProces").removeClass("TaskBlockStanadart").addClass("TaskBlock").addClass("Event" + colEv);
        Prov = true;

        var name = "div." + "ent" + colEv;
        var Delete = $(name)[0];
        $("div.TaskBlockStanadart").find(Delete).removeClass("ent" + colEv);

        if (colEvBlock == 7) {
            document.getElementById("TasksProces").style.overflowY = "visible";
            document.getElementById("TasksProces").style.overflowX = "hidden";
        }
        document.getElementById('NewEventText').value = "";
        document.getElementById('TimeC').value = "";
        document.getElementById('Calendar').value = "";
    } else if (TextEvent.length == 0 && TimeEvent.length == 0 && DateEvent.length == 0) {
        $('#NewEventText').addClass("NewEventTextER");
        $('#NewEventText').attr("placeholder", "Enter event please");
        // alert("problem");
    } else if (TextEvent.length > 0 && TimeEvent.length == 0 && DateEvent.length == 0) {

        coLId++;

        var NowTimeY = new Date().getFullYear();
        var NowTimeMon = new Date().getMonth();
        var NowTimeD = new Date().getDay();
        var NowTimeH = new Date().getHours();
        var NowTimeM = new Date().getMinutes();

        var TXTId = $("p.TaskText")[0];
        $("div.TaskBlockStanadart").find(TXTId).addClass("IdBl").text(TextEvent);
        var TIMId = $("p.TaskDateTime")[0];

        var Delete = $("div.DeleteImg")[0];

        var Delete = $("div.DeleteImg")[0];
        $("div.TaskBlockStanadart").find(Delete).addClass("eas" + coLId);

        var DelEl = $("div.TaskBlockStanadart").find(".TaskDate").remove();

        $(".TaskBlockStanadart").clone().appendTo(".ForIdeas").removeClass("TaskBlockStanadart").addClass("TaskBlock").addClass("Ideas" + coLId);

        DelEl.appendTo('.TaskBlockStanadart');

        var TXTId = $("p.TaskText")[0];
        $("div.TaskBlockStanadart").find(TXTId).removeClass("IdBl");

        var name = "div." + "eas" + coLId;
        var Delete = $(name)[0];
        $("div.TaskBlockStanadart").find(Delete).removeClass("eas" + coLId);
        
        colIdBlock++;
        
        if (colIdBlock == 7) {
            document.getElementById("IdeasBlock").style.overflowY = "visible";
            document.getElementById("IdeasBlock").style.overflowX = "hidden";
        }
        Prov = true;
        document.getElementById('NewEventText').value = "";
    }
    if (Prov == true) {
        $('#IFCreateNewEvent').removeClass("IFCreateNewEventAct");
        $('#IFCreateNewEvent').addClass("IFCreateNewEventDes");

        $('#NewEvent').show();
    }
}



function TextAreaClick() {
    $('#NewEventText').removeClass("NewEventTextER");
    $('#NewEventText').attr("placeholder", "Text is here...");
}

function UndoCreate() {
    document.getElementById('NewEventText').value = "";
    document.getElementById('TimeC').value = "";
    document.getElementById('Calendar').value = "";
    $('#IFCreateNewEvent').removeClass("IFCreateNewEventAct");
    $('#IFCreateNewEvent').addClass("IFCreateNewEventDes");
    $('#NewEvent').show();
}

function deleteTask() {
    var inputs = document.getElementsByClassName("DeleteImg");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", myFunction);
    }
}
function myFunction() {
    if ($("#IdeasBlock").hasClass("IdeasBlockAct")) {
        var name = "." + "Id" + this.classList[1];
    } else if ($("#TasksProces").hasClass("TasksProcesAct")) {
        var name = "." + "Ev" + this.classList[1];
    }
    $(name).empty(); // Очичащем содержимое элементов с class="block_1"
    $(name).remove(); // Удалем полностью элементы с class="block_2"
    // if ($(name).parent(".DeleteBlock").parent(".TaskBlock").parent(".ForTasksProces")) {
    //     alert("Block can be delete");
    // } else {
    //     $(name).appendTo(".ForTasksComled");
    // }
    // alert(name);
}