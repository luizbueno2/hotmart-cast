var webPage = requirejs(['webPage'], function(webPage) {
    return webPage;
});

var page = webPage.create();

$("#startRecording").click(function(){
    alert("Start Recording");
});

$("#stopRecording").click(function(){
    alert("Stop Recording");
});

$("#goToSite").click(function(){

    var url = $("#pageUrl").val();

    page.open('http://www.google.com/', function(status) {
        console.log('Status: ' + status);
        // Do other things here...
    });
    
});