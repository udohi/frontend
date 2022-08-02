$(document).ready(function()
{
    var target = 0;
    var next = 2;
    var nextIndex = [1,2,3,4,5,6,7,8,9,10];
    var prevIndex = [1,2,3,4,5,6,7,8,9,10];

    $(".rec-right-arrow").click(function(){

        $(".slide-page").removeClass("active");

        if(!$(".slide-page:last-child").hasClass("active"))
        {
            var val = parseInt($(".slide-page:eq(2)").text());
           
            if((val == 6 ))
            {
                target++;

                if(target >= 6)
                {
                    target = 5;
                }

                $(".slide-page:eq("+target+")").text(8);

                if( (target >= 2) )
                {
                    target = 2;
                    next++;
                    $(".slide-page:eq(0)").text(nextIndex[next-2]);
                    $(".slide-page:eq(1)").text(nextIndex[next-1] );
                    $(".slide-page:eq("+target+")").addClass("active").text(nextIndex[next]);
                }
                else
                {
                    target++;

                    if(target >= 6)
                    {
                        target = 5;
                    }
                    
                    $(".slide-page:eq("+target+")").addClass("active");
                }
            }
            else
            {
                var val = parseInt($(".slide-page:eq(2)").text());
                if(val == 7)
                {
                    target++;
                    if(target >= 6)
                    {
                        target = 5;
                    }
                    $(".slide-page:eq("+target+")").addClass("active");
                }
                else
                {
                    if( (target >= 2))
                    {
                        target = 2;
                        next++;
                        $(".slide-page:eq(0)").text(nextIndex[next-2]);
                        $(".slide-page:eq(1)").text(nextIndex[next-1] );
                        $(".slide-page:eq("+target+")").addClass("active").text(nextIndex[next]);
                    }
                    else
                    {
                        target++;
                        if(target >= 6)
                        {
                            target = 5;
                        }
                        $(".slide-page:eq("+target+")").addClass("active");
                    }
                }
                
            }
           
        }
    });

    $(".rec-left-arrow").click(function(){

        $(".slide-page").removeClass("active");

        var val = parseInt($(".slide-page:eq(0)").text());
        
        if(val == 1)
        {
            target = 0;
            next = 2;
        }
        else
        { 
            
            target--;
            next = 2;
            if(target <= 0)
            {
                target = 0;
            }
            if(target == 0)
            {
                var thirdVal = parseInt($(".slide-page:eq(2)").text());
                $(".slide-page:eq(0)").text(prevIndex[thirdVal-4]);
                $(".slide-page:eq(1)").text(prevIndex[thirdVal-3]);
                $(".slide-page:eq(2)").text(prevIndex[thirdVal-2]);
            }
            
        }
        
        $(".slide-page:eq("+target+")").addClass("active");
        val = parseInt($(".slide-page:eq(0)").text());

        if(val == 1)
        {
            target = 0;
            next = 2;
        }

        if(val == 4)
        {
            $(".slide-page:eq(3)").text("...");
        }

    });

  
})