// let surveySteps = document.querySelectorAll('.mssf-step-single');

// surveySteps.forEach((surveyStep, index, arr)=> {
//     let singleSteps = surveyStep.querySelectorAll('.mssf-radio-single');

//     singleSteps.forEach(singleForm => {
//         singleForm.addEventListener('click', function(e) {
//             let currentRadioItem = e.currentTarget;

//             let parentStep = currentRadioItem.closest('.mssf-step-single');
//             parentStep.classList.remove('active');

//             let nextStepNum = parentStep.dataset.mssf +1;
//             console.log(nextStepNum);
//         });
//     });
// });

let surveyRadioInputs = document.querySelectorAll('.mssf-radio-single');

surveyRadioInputs.forEach(radioInput => {

    radioInput.addEventListener('click', function(e) {
        let currentRadioInput = e.currentTarget;
        let parentStep = currentRadioInput.closest('.mssf-step-single');

        
    console.log(parentStep);
    });

});