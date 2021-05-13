//human choice, bot choice, result, text, frontend

function rps(yourchoice) {
    console.log(yourchoice);
    var humanchoice, botchoice;

    humanchoice = yourchoice.id;

    botchoice = rpslist(rpsmathformula());
    console.log(botchoice);

    result = findingwinner(humanchoice, botchoice);
    console.log(result);

    message = endmsg(result);
    console.log(message);

    rpsfrontend(humanchoice, botchoice, message);
}

function rpsmathformula() {
    return Math.floor(Math.random() * 3);
}

function rpslist(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function findingwinner(yourchoice, botchoice) {
    var rpsdatabase = {
        'rock': {
            'scissors': 1,
            'rock': 0.5,
            'paper': 0
        },
        'paper': {
            'rock': 1,
            'paper': 0.5,
            'scissors': 0
        },
        'scissors': {
            'paper': 1,
            'scissors': 0.5,
            'rock': 0
        },
    };

    var yourscore = rpsdatabase[yourchoice][botchoice];
    var botscore = rpsdatabase[botchoice][yourchoice];

    return [yourscore, botscore];
}

function endmsg([yourscore, botscore]) {
    if (yourscore === 0) {
        return {
            'msg': 'You Lost',
            'color': 'red'
        };
    } else if (yourscore === 0.5) {
        return {
            'msg': 'You Tied',
            'color': 'yellow'
        };
    } else {
        return {
            'msg': 'You Won',
            'color': 'green'
        };
    }
}

function rpsfrontend(humanimagechoice, botimagechoice, endmsg) {
    var imagedb = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src

    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humandiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var msgdiv = document.createElement('div');

    humandiv.innerHTML = "<img src = '" + imagedb[humanimagechoice] + " ' height=200, width=200 style='box-shadow: -42px 37px 78px 14px rgba(38,204,88,0.74);-webkit-box-shadow: -42px 37px 78px 14px rgba(38,204,88,0.74);-moz-box-shadow: -42px 37px 78px 14px rgba(38,204,88,0.74);';>"
    msgdiv.innerHTML = "<h1 style='color: " + endmsg['color'] + "; font-size: 60px; padding: 30px; '>" + endmsg['msg'] + "</h1>"
    botdiv.innerHTML = "<img src = '" + imagedb[botimagechoice] + " ' height=200, width=200 style ='box-shadow: -39px 31px 53px 1px rgba(217,27,27,0.75);-webkit-box-shadow: -39px 31px 53px 1px rgba(217,27,27,0.75);-moz-box-shadow: -39px 31px 53px 1px rgba(217,27,27,0.75)';>"

    document.getElementById('flexboxid').appendChild(humandiv);
    document.getElementById('flexboxid').appendChild(msgdiv);
    document.getElementById('flexboxid').appendChild(botdiv);




}