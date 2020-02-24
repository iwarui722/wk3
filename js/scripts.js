//adding code for what we do
    $(document).ready(function(){
        $("#btn1").click(function(){
            $(this).text($(this).text() == 'DESIGN' ? 'Our design practice offers a full range of services including branding strategy,interaction and visual design and user experience testing. Throughout your project, our designers create and implement visual designs and workflows solicit user feedback, and work with you to make sure what gets built is what is needed.' : 'DESIGN');
        });
    });
//adding code for   development 
    $(document).ready(function(){
        $("#btn2").click(function(){
            $(this).text($(this).text() == 'DEVELOPMENT' ? 'All engineers are fluent in the latest enterprise, mobile and web development technologies. They collaborate with your team to write, test, and improve code on a daily basis, using proven practices such as test-driven development and pair programming' : 'DEVELOPMENT');
        });
//adding code for product    
    });
    $(document).ready(function(){
        $("#btn3").click(function(){
            $(this).text($(this).text() == 'PRODUCT' ? 'Planning and development is iterative. Because we are constantly coding and testing, the products we build are always ready to go live.This iterative process allows for changes as business requirements eveolve.' : 'PRODUCT');
        });
    });
