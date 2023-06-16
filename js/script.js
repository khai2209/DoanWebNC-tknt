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

            if (isFormValid) {
                // sbmit với JS
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name], textarea[name]');

                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        values[input.name] = input.value;
                        return values;
                    }, {});
                    options.onSubmit(formValues);
                } 
                // sbmit với hành vi mặc định
                else {
                    formElement.submit();
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
                    var errorElement = inputElement.nextElementSibling;
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





