
$(document).ready(function() {
   console.log("privet");
    $.get("/api/user_data").then(function(data){
        console.log(data);
        if(JSON.stringify(data)!=='{}'){
            /// show name
            let fullName = data.firstName + ' '+data.lastName;
            let el = $("#firstLast")
            el.text(fullName);
        }
        
    })
});