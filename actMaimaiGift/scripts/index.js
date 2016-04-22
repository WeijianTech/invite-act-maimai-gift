/**
 * Created by kangkang on 2016/04/21.
 */
$(function () {

    var RegExpMobile = new RegExp(/(^(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7})$/),
        iptPhone = $('.J_IPT_Phone'),
        btnGetGift = $('.J_BTN_GetGift');

    btnGetGift.on('click', function () {
        var phone = iptPhone.val();

        debugger;
        // 验证手机号合法性 (大陆手机号段)
        if(!RegExpMobile.test(phone)){
            alert('请输入您的手机号码领取哟 :)');
            return false;
        }

        $.ajax({
            url:'http://app.api.qingniwan.love/interface?interface=user&api=mmaimaiUser&version=2.0',
            method:'post',
            data:{
                phone:phone
            },
            success: function (response) {

                console.log(response)

            },
            error: function (err) {

                console.warn(err)

            }
        })
    })

});