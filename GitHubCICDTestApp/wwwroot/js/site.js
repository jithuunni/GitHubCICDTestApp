// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function GetCourses() {
    var _url = 'https://az-204-lab-course-api.azurewebsites.net/api/Course';

    $.ajax({
        url: _url,
        type: 'GET',
        dataType: 'json',
        success: function (result) {            
            $(result).each(function (index, item) {                
                $("<p>").html(item.Name).appendTo($("#dvCourseList"));
            });
        },
        error: function (err) {
            console.log(err);
        }
    });
}