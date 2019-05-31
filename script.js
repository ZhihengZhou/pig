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

    let code = `body {
  background: #fff;
  position: relative;
  margin: 0;
}

.Pig {
  position: relative;
  background: #fbd3d2;
  width: 170px;
  height: 125px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  margin: 70px 45%;
}

.left-ear,
.right-ear {
  position: absolute;
  width: 30px;
  height: 70px;
  background: #fde2e0;
  border: 7px solid #fbd3d2;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  top: -10px;
  z-index: -99;
}

.left-ear {
  left: 7px;
  -webkit-transform: rotate(-30deg);
  -moz-transform: rotate(-30deg);
  -ms-transform: rotate(-30deg);
  -o-transform: rotate(-30deg);
  transform: rotate(-30deg);
}

.right-ear {
  left: 120px;
  -webkit-transform: rotate(30deg);
  -moz-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  -o-transform: rotate(30deg);
  transform: rotate(30deg);
}

.eye {
  position: relative;
}

.eye-left,
.eye-right {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #2e1711;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  top: 55px;
}

.eye-left {
  left: 35px;
}

.eye-right {
  right: 35px;
}

.eye-left:before,
.eye-right:before {
  content: '';
  position: absolute;
  width: 7px;
  height: 7px;
  background: #fff;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  top: 8px;
  left: 12px;
}

.mouth {
  position: absolute;
  width: 60px;
  height: 35px;
  background: #ef9ca1;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  top: 75px;
  left: 55px;
}

.mouth:before,
.mouth:after {
  content: '';
  position: absolute;
  background: #512c22;
  width: 12px;
  height: 12px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  top: 12px;
}

.mouth:before {
  left: 10px;
}

.mouth:after {
  right: 10px;
}
`
    writeCode('', code)
}.call()
