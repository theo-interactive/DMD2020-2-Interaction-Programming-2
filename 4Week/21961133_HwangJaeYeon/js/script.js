(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        my-name 아이디를 가진 span 요소를 생성하고 ‘제 이름은 본인이름입니다.’ 의 내용을 추가하여 hello 아이디를 가진 div 노드의 첫 번째 자식노드로 추가합니다.
        */
        //Answer 1.
        $('div').eq(0).append("<span id = 'my-name'>제 이름은 황재연 입니다.</span>");

        //Quest 2.
        /*
        1. images 배열의 원소 수 만큼 banner-item 클래스를 가지는 div 요소를 생성합니다.
        2. 배열의 원소를 src 속성으로 가지는 img 노드를 생성하고, 1 에서 생성한 div 노드에 추가합니다.
        3. 1 과 2 에서 생성된 div 요소를 banner-container 클래스를 가지는 div 노드에 추가합니다.
        */
        //Answer 2.
        var images = ['./img/banner/01.jpg', './img/banner/02.jpg', './img/banner/03.jpg'];
        for(var i = 0; i <= images.length-1; i++){
            $('div.banner-container').prepend("<div class = 'banner-item'></div>");
        }
        $('div.banner-item').eq(0).prepend("<img src = './img/banner/01.jpg'></div>");
        $('div.banner-item').eq(1).prepend("<img src = './img/banner/02.jpg'></div>");
        $('div.banner-item').eq(2).prepend("<img src = './img/banner/03.jpg'></div>");


        //Quest 3.
        /*
        1. p.move-top 노드를 body 의 가장 위로 이동시킵니다.
        2. p.move-top 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘위로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 3.
        $('body').prepend($('p.move-top'));
        $('p.move-top').addClass('move');
        $('p.move-top').html('위로 이동했습니다');


        //Quest 4.
        /*
        1. p.move-bottom 노드를 body 의 가장 아래로 이동시킵니다.
        2. p.move-bottom 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘아래로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 4.
        $('body').append($('p.move-bottom'));
        $('p.move-bottom').addClass('move');
        $('p.move-bottom').html('아래로 이동했습니다');

        //Quest 5.
        /*
        p.error 노드를 삭제합니다.
        */
        //Answer 5.
        $('p.error').detach();

        //Quest 6.
        /*
        p.modify 노드의 내용을 ‘수정되었습니다.’ 로 수정합니다.
        */
        //Answer 6.
        $('p.modify').html('수정되었습니다.');

        //Quest 7.
        /*
        p.modify 노드의 내용을 비우고 문서에서 삭제합니다.
        */
        //Answer 7.
        $('p.modify').empty();

        //Quest 8.
        /*
        ul.list-1 의 첫번 째 li 자식노드의 뒤에 반복문을 이용하여 ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 8.
        for(var i = 2; i < 5; i++){
            $('ul.list-1').append("<li>리스트 " + i + "</li>");
        }

        //Quest 9.
        /*
        ul.list-2 의 첫번 째 li 자식노드의 앞에 반복문을 이용하여 ‘리스트 1’, ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 9.
        for(var i = 4; i >= 1; i--){
            $('ul.list-2').prepend("<li>리스트 " + i + "</li>");
        }


        //Quest 10.
        /*
        button.btn-1 요소를 클릭하여 div.box-1 노드의 스타일 width 를 아래 조건에 따라 100px 씩 증감시키는 함수를 만듭니다.
        
        1. div.box-1 노드의 스타일 width 는 100px 부터 시작됩니다.
        2. div.box-1 노드의 스타일 width 의 값이 500px 이상이 될 때까지 클릭 1회 당 100px 씩 증가시킵니다.
        3. div.box-1 노드의 스타일 width 의 값이 500px 이상이 되면 0px 이 될 때까지 클릭 1회 당 100px  씩 감소시킵니다.
        4. div.box-1 노드의 스타일 width 의 값이 0px 이 되면 2 의 조건과 3 의 조건을 반복시킵니다.
        
        힌트 - Boolean 또는 Class 를 조건문에 함께 이용합니다.
        */
        //Answer 10.
        var $box = $('.box-1');
        var width = 100;
        var max = false;
        $('.btn-1').click(function(){
            if(max == false){
                width += 100;
                $box.width(width);
                if(width >= 500){
                    max = true;
                }else if(width == 0){
                    width += 100;
                    $box.width(width);
                }
            }
           if(max == true){
                width -= 100;
                $box.width(width);
                if(width == 0){
                    max = false;
                }
            }
        })
    });
    //교수님, 질문이 있습니다.
    //코드 상으론 500px 이하라 작성하였지만, 웹 상에선 400px까지만 구현되고 더이상 늘어나지 않습니다.
    //하지만 5클릭 후엔 500px로 인식하여 다시 길이가 감소하는데 문제가 무엇인지 궁금합니다.
})(jQuery);