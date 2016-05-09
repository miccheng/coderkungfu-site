$(document).ready(function(){
    if ($('#decks').length === 1)
    {
        $('#decks').empty();
        $.ajax({
            url: "/sdeckrss.php",
            success: function(data){
                var entries = $(data).find('entry');
                entries.each(function(idx, entry){
                    var slide = $(entry);
                    var slide_name = $('<h4>');
                    var link = $('<a>').attr('target', '_blank').attr('href', slide.find('link').attr('href')).text(slide.find('title').text());
                    slide_name.append(link);
                    $('#decks').append(slide_name).append(slide.find('content').text()).append('<hr/>');
                });
            },
            dataType: 'xml'
        });
    }
});