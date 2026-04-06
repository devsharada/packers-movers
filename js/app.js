function changeDiv(httpHost, controller, actionMethod, dataParaOrForm, outputDiv, keyCode, suggetionSelectId, loadingDiv) {
    //
    $(document).bind("ajaxStart.func", function () {
        if (loadingDiv !== 'DoNotShow' && loadingDiv !== 'DoNotShowDoNotLoad') {
            $("#loadingDiv").css('display', 'block');
        }
    });
    //
    $(document).bind("ajaxStop.func", function () {
        if (loadingDiv !== 'DoNotShow') {
            $("#loadingDiv").css('display', 'none');
        }
        if (keyCode != '' && suggetionSelectId != '') {
            if (keyCode == 40 || keyCode == 38) {
                document.getElementById(suggetionSelectId).focus();
                document.getElementById(suggetionSelectId).options[0].selected = true;
            }
            $(document).unbind(".func");
        }
    });
    //
    var url = httpHost + '/' + controller + '/' + actionMethod;
    //
    if (dataParaOrForm != '') {
        $.post(url, dataParaOrForm, function (data) {
            $("#" + outputDiv).html(data);
        });
    } else {
        $.post(url, function (data) {
            $("#" + outputDiv).html(data);
        });
    }
    //
    if (loadingDiv != 'donotscroll' && loadingDiv != 'DoNotShowDoNotLoad') {
        window.scrollTo({top: 0});
    }
}
//
function showtoggle(hide, show) {
    document.getElementById(show).style.display = 'block';
    document.getElementById(hide).style.display = 'none';
}
function validate_visitor_form_data()
{ 
    if (document.getElementById("form_name").value == 'city_form') {
        if (document.getElementById("pac_input_city").value.trim() == '' || document.getElementById("pac_input_city").value.length == 0)
        {
//        alert("Please Enter City ");
            document.getElementById("messageDiv").innerHTML = 'Please Enter City!';
            document.getElementById("pac_input_from").focus();
            return false;
        }else if (document.getElementById("pac_input_from").value.trim() == '' || document.getElementById("pac_input_from").value.length == 0)
        {
//        alert("Please Enter Moving From Location ");
            document.getElementById("messageDiv").innerHTML = 'Please Enter Moving From Location!';
            document.getElementById("pac_input_to").focus();
            return false;
        }else if (document.getElementById("pac_input_to").value.trim() == '' || document.getElementById("pac_input_to").value.length == 0)
        {
//        alert("Please Enter Moving To Location ");
            document.getElementById("messageDiv").innerHTML = 'Please Enter Moving To Location!';
            document.getElementById("pac_input_city").focus();
            return false;
        }
    }else if (document.getElementById("form_name").value.trim() == 'visitor_detail_form') {
        if (document.getElementById("visitor_fname").value == '' || document.getElementById("visitor_fname").value.length == 0)
        {
//        alert("Please Enter City ");
            document.getElementById("messageVisitorDiv").innerHTML = 'Please Enter Name!';
            document.getElementById("visitor_name").focus();
            return false;
        }
        if (document.getElementById("visitor_email").value.trim() == '' || document.getElementById("visitor_email").value.length == 0)
        {
//        alert("Please Enter Moving From Location ");
            document.getElementById("messageVisitorDiv").innerHTML = 'Please Enter Email ID!';
            document.getElementById("visitor_email").focus();
            return false;
        }
        if ((document.getElementById("visitor_mobile").value.trim() == '') || (document.getElementById("visitor_mobile").value.length == 0) || (document.getElementById("visitor_mobile").value.length != 10))
        {
//        alert("Please Enter Moving To Location verification_form ");
            document.getElementById("messageVisitorDiv").innerHTML = 'Please Enter Valid Mobile NO.!';
            document.getElementById("visitor_mobile").focus();
            return false;
        }
         return true;
    }else if (document.getElementById("form_name").value.trim() == 'verification_form') {
        if (document.getElementById("visitor_otp").value == '' || document.getElementById("visitor_otp").value.length == 0)
        {
//        alert("Please Enter City ");
            document.getElementById("messageVisitorDiv").innerHTML = 'Please Enter OTP!';
            document.getElementById("visitor_otp").focus();
            return false;
        }
    return true;
}
}
//
function validate_visitor_iindform_data() {
    if (document.getElementById("form_name1").value == 'city_form') {
        if (document.getElementById("pac_input_from_ii").value.trim() == '' || document.getElementById("pac_input_from_ii").value.length == 0) {
            //        alert("Please Enter Moving From Location!");
            document.getElementById("messageDiv").innerHTML = 'Please Enter Moving From Location!';
            document.getElementById("pac_input_from_ii").focus();
            return false;
        }
        if (document.getElementById("pac_input_to_ii").value.trim() == '' || document.getElementById("pac_input_to_ii").value.length == 0) {
            //        alert("Please Enter Moving To Location!");
            document.getElementById("messageDiv").innerHTML = 'Please Enter Moving To Location!';
            document.getElementById("pac_input_to_ii").focus();
            return false;
        }
    }
    return true;
}
