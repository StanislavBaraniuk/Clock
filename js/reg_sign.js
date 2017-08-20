/**
 * Created by cktuser on 25.03.2017.
 */

function SignForm() {
    $("#RegForm").hide();
    $('#SignForm').removeClass("SignFormDis");
    $('#SignForm').addClass("SignFormAct");
}

function RegForm() {
    $("#RegForm").show();
    $('#SignForm').removeClass("SignFormAct");
    $('#SignForm').addClass("SignFormDis");
}