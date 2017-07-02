$(document).ready(function(){
    $("#browseBtn").click(function () {
        $("#toEnter").click();
    });
    $("#toEnter").change(function() {
        $("#browserBox").val($(this).val());
    });
     $("#formItself").submit(function(e){
        e.preventDefault();
    });


});
/*hide the original 'type="file"'button cuz it cant be moved and eyesore af.
replaced with a normal inline browse button. Made it such that the normal
 inline button now has 'type="file"'button property as well, which is to 
 bring up the browser window  Also made it such that normal textbox now reflects 
 path */
 /* once uploaded, clicking refresh will prevent submittion of form to give CannotGET*/