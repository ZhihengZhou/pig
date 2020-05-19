let id

!function () {
    let duration = 1

    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')

        let n = 0

        id = setTimeout(function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)

            container.scrollTop = container.scrollHeight

            if (n < code.length) {
                id = setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, 1)
    }

    $('.actions').on('click', 'button', function (event) {
        let container = $('#code')
        let styleTag = $('#styleTag')

        let $button = $(event.currentTarget) // Button
        let speed = $button.attr('data-speed')

        $button.addClass('active')
            .siblings('.active').removeClass('active')

        switch (speed) {
            case 'slow':
                duration = 50
                break
            case 'medium':
                duratoin = 10
                break
            case 'fast':
                duration = 1
                break
            case 'skip':
                // Stop typing
                window.clearTimeout(id)
                // Set codes to tag
                container.html(code)
                styleTag.html(code)
                break
            default:
                break
        }
    })

    let code = `html {
    height: 100%;
    background: radial-gradient(ellipse at center, #fcd7de 0%,#f9c0ca 100%);
  }
  
  .body {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
    margin-top: -100px;
  }   
  
  .stomach {
    height: 200px;
    width: 270px;
    background: #FA7590;
    border-radius: 50%;
    border: 15px solid #000;
  }
  
  .face {
    height: 180px;
    width: 180px;
    background: #FA7590;
    border-radius: 50%;
    border: 15px solid #000;
    position: absolute;
    top: -10px;
    left: -30px;
  }
  
  .eyes:before,
  .eyes:after {
    content: "";
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: #000;
    position: absolute;
    top: 35px;
  }
  
  .eyes:before {
    left: 40px;
  }
  
  .eyes:after {
    right: 40px;
  }
  
  .nose {
    background: #FCC0B6;
    height: 50px;
    width: 70px;
    border: 15px solid #000;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -35px;
    margin-top: -10px;
  }
  
  .nose:before,
  .nose:after {
    content: "";
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #000;
    position: absolute;
    top: 18px;
  }
  
  .nose:before {
    left: 8px;
    top: 5px;
  }
  
  .nose:after {
    right: 8px;
    top: 5px;
  }
  
  .left_ear,
  .right_ear {
    overflow: hidden;
    height: 70px;
    width: 60px;
    position: absolute;
    background: transparent;
  }
  
  .left_ear {
    top: -57px;
    left: -10px;
    -webkit-transform: rotate(58deg);
    transform: rotate(58deg);
  }
  
  .right_ear {
    top: -62px;
    left: 90px;
    -webkit-transform: rotate(113deg);
    transform: rotate(113deg);
  }
  
  .left_ear:before,
  .right_ear:before {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    content: "";
    height: 50px;
    width: 50px;
    position: relative;
    left: 15px;
    display: block;
    background: transparent;
    background-color: #FCC0B6;
    border: 15px solid #000;
    border-radius:5px 80px  30px 80px ;
  }
  
  .left_leg,
  .right_leg {
    height: 20px;
    width: 30px;
    position: absolute;
    background: #FCC0B6;
    border: 15px solid #000;
    position: absolute;
    border-radius: 0 0 20px 20px;
    bottom: -35px;
  }
  
  .left_leg {
    left: 90px;
    top: 190px;
  }
  
  .right_leg {
    left: 165px;
    top: 190px;
  }
  
  .left_leg:before,
  .right_leg:before {
    height: 25px;
    background: #FA7590;
    content: "";
    position: absolute;
    top: -25px;
    width: 100%;
  }
  
  .tail {
    height: 30px;
    width: 30px;
    border: 15px solid transparent;
    border-bottom: 15px solid #000;
    border-right: 15px solid #000;
    border-radius: 50%;
    position: absolute;
    right: 15px;
    top: 60px;
    -webkit-transform: rotate(-16deg);
    transform: rotate(-16deg);
  }
  
  .tail:after {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    content: "";
    height: 60px;
    width: 60px;
    border: 15px solid transparent;
    border-bottom: 15px solid #000;
    border-left: 15px solid #000;
    border-right: 15px solid #000;
    border-radius: 50%;
    position: absolute;
    right: -20px;
    top: -19px; 
  }

  .text_left{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    margin-left: -500px;
    margin-top: 100px;

  }

  #t1 {
    opacity: 1;
    color: #FF00FF;
    font-size: 50px;
  }

  #t2 {
    opacity: 1;
    color: #00AAFF;
    font-size: 50px;
  }

  .text_right{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    margin-left: 200px;
    margin-top: 150px;

  }

  #t3 {
    opacity: 1;
    color: #FFFF00;
    font-size: 50px;
  }

`
    writeCode('', code)
}.call()
