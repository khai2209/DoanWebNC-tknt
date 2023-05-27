function Validator(options) {
    // hàm kiểm tra xem có undefine hay không
    var selectorRules = {};
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage;

        if (errorElement) {
            var rules = selectorRules[rule.selector];

            for (var i = 0; i < rules.length; ++i) {
                errorMessage = rules[i](inputElement.value);
                if (errorMessage) break;
            }

            if (errorMessage) {
                errorElement.innerText = errorMessage;
                inputElement.classList.add('invalid');
            } else {
                errorElement.innerText = '';
                inputElement.classList.remove('invalid');
            }
        }

        return !errorMessage;
    }


    // Lấy element của form cần validate

    var formElement = document.querySelector(options.form);
    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();
            // lặp qua từng rules và validate
            var isFormValid = true;

            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });
            var enableInputs = formElement.querySelectorAll('[name]');
            console.log(enableInputs);
            if (isFormValid) {
                if (typeof options.onSubmit == 'function') {
                    options.onSubmit({
                    })
                }
            }

        }
        //Xử lý lắng nghe sự kiện (blur, input...)
        options.rules.forEach(function (rule) {
            // lưu lại các rules

            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }
            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }
                // Khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.classList.remove('invalid');
                }
            }
        });
    }
}

Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng không để trống';
        }
    }
}

Validator.isName = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^[\p{L}\s]+$/u;
            return regex.test(value) ? undefined : 'Tên không đúng định dạng';
        }
    }
}

Validator.isPhone = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\d{10}$/;
            return regex.test(value) ? undefined : 'Số điện thoại không đúng định dạng';
        }
    }
}

// Validator.isName = function (selector) {
//     return {
//         selector: selector,
//         test: function (value) {
//             var regex = /^[\p{L}\s]+$/u;
//             if (value === undefined || value.trim() === '') {
//                 return 'Vui lòng không để trống';
//             }
//             if (regex.test(value)) {
//                 return undefined;
//             } else {
//                 return 'Tên không đúng định dạng';
//             }
//         }
//     }
// }

// Validator.isPhone = function (selector) {
//     return {
//         selector: selector,
//         test:

//             function (value) {
//                 var regex = /^\d{10}$/;
//                 if (value === undefined || value.trim() === '') {
//                     return 'Vui lòng không để trống';
//                 }
//                 if (regex.test(value)) {
//                     return undefined;
//                 } else {
//                     return 'Số điện thoại không đúng định dạng';
//                 }

//             }

//     }
// }




