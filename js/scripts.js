//adding code for what we do
    $(document).ready(function(){
        $("button").click(function(){
            $(this).text($(this).text() == 'DESIGN' ? 'Our design practice offers a full range of services including branding strategy,interaction and visual design and user experience testing. Throughout your project, our designers create and implement visual designs and workflows solicit user feedback, and work with you to make sure what gets built is what is needed.' : 'DESIGN');
        });
    });

