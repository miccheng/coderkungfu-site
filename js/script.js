// Twitter Widget
$(".tweet").tweet({
    username: "coderkungfu",
    // Change your Twitter username here
    join_text: "auto",
    avatar_size: 0,
    count: 2,
    template: "{text} {time}",
    auto_join_text_default: "", 
    auto_join_text_ed: "",
    auto_join_text_ing: "",
    auto_join_text_reply: "",
    auto_join_text_url: "",
    loading_text: "Loading tweets..."
});

// Search popup
$('.search > .icon-search').click(function(){
   	$('.search_popup').slideDown('', function() {});
 	$('.search > .icon-search').toggleClass('active');
 	$('.search > .icon-remove').toggleClass('active');
 });

 $('.search > .icon-remove').click(function(){
   	$('.search_popup').slideUp('', function() {});
 	$('.search > .icon-search').toggleClass('active');
 	$('.search > .icon-remove').toggleClass('active');
 });

// Mobile menu
 $('.menubutton').click(function(){
   	$('header nav').slideToggle('', function() {});
 });

// Responsive videos
 $(".post_video").fitVids();

// Contact form validation
$("#contact_form").validate();
        
setTimeout(function() {
    $("#contact_form").submit(function(e){
        e.preventDefault();
        if ( !$('input, textarea').hasClass('error') ) {
            $('#contact #contact_form').slideUp(250);
            $('#contact .message').slideDown(250);
            $.post('js/send.php', $('#contact_form').serialize());
        } else { return false; }
    });
},500);