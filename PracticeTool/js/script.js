const selectExam = (selector) => {
    switch(selector.value){
        case 'architect': {
            questionList = architectList
            break;
        }
        case 'AD0E116': {
            questionList = developer
            break;
        }   
    }
    // create ids
    questionList = questionList.map((question, index) => {
        question.id = index
        return question
    } )
    // randomize
    allQuestions = questionList.sort(() => 0.5 - Math.random())
    lastQuestionNumber = 1;
    $('label[for="nQuestions"]>span').text(`(${questionList.length} en total)`);
    document.querySelectorAll('button').forEach(button => {
        button.removeAttribute('disabled')
    })
}
function jsonToForm(list) {
    $('.question-result').addClass('hidden');
    let ii = lastQuestionNumber;
    let _questions = []
    if(list != null){
        _questions = list.slice(0, parseInt($('[name=nQuestions]').val()))
        allQuestions = allQuestions.filter(question => !_questions.includes(question))
    }else {
        _questions = allQuestions.slice(0, $('[name=nQuestions]').val());
        allQuestions = allQuestions.filter(question => !_questions.includes(question))
    }
    for (let question of _questions) {
        html = $(document.importNode($('#template')[0].content, true));
        html.find('.question').prop('id', question.id);
        html.find('.question-number').text(`${ii}.`);
        html.find('.question-title').text(question.title);
        let ul = html.find('ul');
        for (let ii = 0; ii < question.options.length; ii++) {
            let li = $(`<li><input id="${question.id}-${ii}"><label for="${question.id}-${ii}"></label></li>`);
            if (question.answers.length === 1) {
                li.find('input').attr('type', 'radio');
                li.find('input').attr('name', `radio_${question.id}`);
            } else {
                li.find('input').attr('type', 'checkbox');
                li.find('input').attr('name', `check_${question.id}-${ii}`);
            }
            li.find('label').text(question.options[ii]);
            ul.append(li);
        }
        html.find('.question-answer').text(`Respuesta correcta: ${question.answers.join(', ')}`);
        html.find('.question-docs').attr('href', question.docs).text(question.docs);
        $('section').append(html);
        ii++;
        lastQuestionNumber++;
    }
    $('button.submit').removeClass('hidden');
}

function validateForm() {
    const questions = $('.question');
    let nSuccess = 0;
    let nError = 0;
    for (let question of questions) {
        const correctAnswers = questionList.find(e => e.id == $(question).prop('id')).answers;
        const responses = $(question).find('input:checked').map((i, e) => {
            let index = $(e).prop('id').split('-')[1];
            let char = String.fromCharCode(97 + parseInt(index)).toUpperCase();
            return char;
        }).toArray();
        let success = areEquals(correctAnswers, responses);
        if (success) {
            $(question).removeClass('error').addClass('success');
            nSuccess++;
        }
        else {
            $(question).removeClass('success').addClass('error');
            nError++;
        }
        $(question).find('input').map((i,e) => {
            let index = $(e).prop('id').split('-')[1];
            let char = String.fromCharCode(97 + parseInt(index)).toUpperCase();
            if(correctAnswers.includes(char)){
                $(e).parent().addClass('resolved')
            }
        })
    }
    $('.question-result').removeClass('hidden');
    $('.question-result.nSuccess>span').text(nSuccess);
    $('.question-result.nError>span').text(nError);
    $('input').attr('disabled', true);
    window.scrollTo(0, 0);
}

function areEquals(arr1, arr2) {
    return arr1.sort().toString() === arr2.sort().toString();
}