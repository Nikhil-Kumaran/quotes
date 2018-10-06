$(document).ready(function(){
    var color = ['#5DADE2','#3498DB','#2E86C1','#21618C','#154360','#2874A6','#2980B9','#7FB3D5','#5499C7'];
    var quote = ['"What one programmer can do in one month, two programmers can do in two months." - Fred Brooks','"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - Patrick McKenzie','"One of the best programming skills you can have is knowing when to walk away for awhile." - Oscar Godson','“Code is like humor. When you have to explain it, it’s bad.” – Cory House','"Give someone a program, you frustrate them for a day; teach them how to program, you frustrate them for a lifetime." - David Leinweber','“Falling in love with code means falling in love with problem solving and being a part of a forever ongoing conversation.” - Kathryn Barrett'];
    var count1 = -1,count2 = -1;
    $('.btn').click(function(){
        
        
        console.log(count1%color.length);
        count1 = count1+1;
        count2  = count2+1;
        $('.quote').text(quote[count2%quote.length]);
        $('body').css({
            'background-color':color[count1%color.length]
        },300);
    });
});