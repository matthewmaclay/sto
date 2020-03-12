import React from 'react'

export default () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">




<meta name="revisit-after" content="2 days">
<link rel="shortcut icon" href="i/img/favicon.png">

<title>заглушка на сайт - сайт на реконструкции</title>

<!-- Bootstrap -->
<link href="i/css/bootstrap.css" rel="stylesheet">
<link href="i/css/font-awesome.css" rel="stylesheet">
<link href="i/css/bootstrap-theme.css" rel="stylesheet">
<link rel="stylesheet" href="i/css/animations.css">

<!-- siimple style -->
<link href="i/css/style.css" rel="stylesheet">

<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
<![endif]-->
<style>
    .home-ad{
        position: fixed;
        right: 20px;
        top:200px;
        border: 1px solid #f2f2f2;
        background: rgb(255, 255, 255);
        border-radius: 0;
        z-index: 9999;
    }
    .home-ad .close{
        float: right;
        color: #FFF;
        background: #6B6B6B;
        width: 20px;
        height: 20px;
        line-height: 16px;
        display: inline-block;
        font-size: 12px;
        font-weight: normal;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        margin-bottom: 5px;
    }
    .home-ad div#carbonads {
          padding: 10px;
          max-width: 150px;
    }
    .home-ad div#carbonads a.carbon-img {
        display: inline-block;
        float: left; 
    }
    .home-ad div#carbonads .carbon-wrap:after {
        content: "";
        display: block;
        clear: both; 
    }
    .home-ad div#carbonads .carbon-text {
        font-size: 12px;
        text-align: left;
        color: #333;
        display: block;
        padding-top: 10px;
        padding-bottom: 10px;
        clear: both;
    }
    .home-ad div#carbonads .carbon-text:hover {
        text-decoration: none; 
    }
    .home-ad div#carbonads .carbon-poweredby {
        font-size: 75%;
        color: #bebebe; 
    }
</style>
</head>

<body>



<div class="cloud floating">
    <img src="i/img/cloud.png" alt="Заглушка">
</div>

<div class="cloud pos1 fliped floating">
    <img src="i/img/cloud.png" alt="Заглушка">
</div>

<div class="cloud pos2 floating">
    <img src="i/img/cloud.png" alt="Заглушка">
</div>

<div class="cloud pos3 fliped floating">
    <img src="i/img/cloud.png" alt="Заглушка">
</div>


<div style="height:100vh" id="wrapper">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <br/>
                <br/>
                <h1 class="subtitle">Сайт на реконструкции</h2>
                <br/>
         
            </div>

        </div>
    </div>
</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="http://downloads.mailchimp.com/js/jquery.form-n-validate.js"></script>
<script>
    
$(document).ready( function () {
$('#wrapper').height($(document).height());
// I only have one form on the page but you can be more specific if need be.
var $form = $('form');

if ( $form.length > 0 ) {
    $('form input[type="submit"]').bind('click', function ( event ) {
        if ( event ) event.preventDefault();
        // validate_input() is a validation function I wrote, you'll have to substitute this with your own.
        if ( $form.validate() ) { register($form); }
    });
}

$('.home-ad .close').on('click', function(){
    $(this).parent().toggle('fast');
});
});

function appendResult(userText , className, iconClass){
var resultHTML = "<div class='stretchLeft result "+ className + "'>" + userText + " <span class='fa fa-" + iconClass + "'></span>" + "</div>";
$('body').append(resultHTML);
$('.result').delay(10000).fadeOut('1000');
}


function register($form) {
$.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    cache       : false,
    dataType    : 'json',
    contentType: "application/json; charset=utf-8",
    error       : function(err) { alert("Ваш емайл добавлен."); },
    success     : function(data) {
        if (data.result != "success") {
            appendResult('Wrong Email Or You Are Already Registered, Try Again', 'error', 'exclamation');
        } else {
            // It worked, carry on...
            appendResult('Successful, Check Your Email For Confirmation ', 'success', 'check');
        }
    }
});
}
</script>

<script type="text/javascript"><!--
document.write("<a href='//script.xn--41a.ws/click;xn--41a-ws' "+
"target=_blank><img src='//counter.yadro.ru/hit;xn--41a-ws?t14.6;r"+
escape(document.referrer)+((typeof(screen)=="undefined")?"":
";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
";"+Math.random()+
"' alt='' title='LiveInternet: показано число просмотров за 24"+
" часа, посетителей за 24 часа и за сегодня' "+
"border='0' width='0' height='0'><\/a>")
//--></script>`,
    }}
  ></div>
)
