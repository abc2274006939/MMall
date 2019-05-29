webpackJsonp([11],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(95);


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	var _mm= __webpack_require__(8);
	var header = {
	    init : function(){
	        this.onLoad();
	        this.bindEvent();
	    },
	    onLoad: function(){
	        var keyword = _mm.getUrlParam('keyword');
	        if(keyword){
	            $('#search-input').val(keyword);
	        };
	    },
	    bindEvent : function(){
	        var _this = this;
	        $('#search-btn').click(function(){
	            _this.searchSubmit();
	        });
	        $('#search-input').keyup(function(e){
	            if(e.keyCode === 13){
	                _this.searchSubmit();
	            }
	        });
	    },
	    searchSubmit:function(){
	        var keyword = $.trim($('#search-input').val());
	        if(keyword){
	            window.location.href='./list.html?keyword=' + keyword;
	        }
	        else{
	            _mm.goHome();
	        }
	    }
	};

	header.init();

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(13);
	var _mm= __webpack_require__(8);
	var _user= __webpack_require__(15);
	var _cart= __webpack_require__(16);
	var nav = {
	    init:function(){
	        this.bindEvent();
	        this.loadUserInfo();
	        this.loadCartCount();
	        return this;
	    },
	    bindEvent : function(){
	        $('.js-login').click(function(){
	            _mm.doLogin();
	        });
	        // 注册点击事件
	        $('.js-register').click(function(){
	            window.location.href = './user-register.html';
	        });
	        // 退出点击事件
	        $('.js-logout').click(function(){
	            _user.logout(function(res){
	                window.location.reload();
	            }, function(errMsg){
	                _mm.errorTips(errMsg);
	            });
	        });
	    },
	    // 加载用户信息
	    loadUserInfo:function(){
	        _user.checkLogin(function(res){
	            $('.user.not-login').hide().siblings('.user.login').show()
	                .find('.username').text(res.username);
	        }, function(errMsg){
	        });
	    },
	    // 加载购物车数量
	    loadCartCount : function(){
	        _cart.getCartCount(function(res){
	            $('.nav .cart-count').text(res || 0);
	        }, function(errMsg){
	            $('.nav .cart-count').text(0);
	        });
	    }
	};

	module.exports = nav.init();

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

	var _mm = __webpack_require__(8);
	var _user = {
	    // 用户登录
	    login : function(userInfo, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/login.do'),
	            data: userInfo,
	            method: 'POST',
	            success: resolve,
	            error: reject
	        });
	    },
	    // 检查用户名
	    checkUsername: function(username, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/check_valid.do'),
	            data: {
	                type: 'username',
	                str: username
	            },
	            method:'POST',
	            success:resolve,
	            error: reject
	        });
	    },
	    // 用户注册
	    register : function(userInfo, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/register.do'),
	            data:userInfo,
	            method:'POST',
	            success:resolve,
	            error: reject
	        });
	    },
	    // 检查登录状态
	    checkLogin:function(resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/get_user_info.do'),
	            method:'POST',
	            success:resolve,
	            error:reject
	        });
	    },
	    // 获取用户密码提示问题
	    getQuestion:function(username, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/forget_get_question.do'),
	            data: {
	                username:username
	            },
	            method:'POST',
	            success:resolve,
	            error:reject
	        });
	    },
	    // 检查密码提示问题答案
	    checkAnswer:function(userInfo, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/forget_check_answer.do'),
	            data:userInfo,
	            method:'POST',
	            success:resolve,
	            error: reject
	        });
	    },
	    // 重置密码
	    resetPassword:function(userInfo, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/forget_reset_password.do'),
	            data:userInfo,
	            method:'POST',
	            success:resolve,
	            error: reject
	        });
	    },
	    // 获取用户信息
	    getUserInfo:function(resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/get_information.do'),
	            method:'POST',
	            success:resolve,
	            error:reject
	        });
	    },
	    // 更新个人信息
	    updateUserInfo:function(userInfo, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/update_information.do'),
	            data: userInfo,
	            method:'POST',
	            success:resolve,
	            error:reject
	        });
	    },
	    // 登录状态下更新密码
	    updatePassword:function(userInfo, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/reset_password.do'),
	            data:userInfo,
	            method:'POST',
	            success:resolve,
	            error: reject
	        });
	    },
	    // 登出
	    logout:function(resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/logout.do'),
	            method:'POST',
	            success:resolve,
	            error:reject
	        });
	    }
	}
	module.exports = _user;

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

	var _mm = __webpack_require__(8);
	var _cart = {
	    // 获取购物车数量
	    getCartCount : function(resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/cart/get_cart_product_count.do'),
	            success:resolve,
	            error: reject
	        });
	    },
	    // 添加到购物车
	    addToCart : function(productInfo, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/cart/add.do'),
	            data: productInfo,
	            success: resolve,
	            error: reject
	        });
	    },
	    // 获取购物车列表
	    getCartList : function(resolve, reject){
	        _mm.request({
	            url     : _mm.getServerUrl('/cart/list.do'),
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 选择购物车商品
	    selectProduct : function(productId, resolve, reject){
	        _mm.request({
	            url     : _mm.getServerUrl('/cart/select.do'),
	            data    : {
	                productId : productId
	            },
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 取消选择购物车商品
	    unselectProduct : function(productId, resolve, reject){
	        _mm.request({
	            url     : _mm.getServerUrl('/cart/un_select.do'),
	            data    : {
	                productId : productId
	            },
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 选中全部商品
	    selectAllProduct : function(resolve, reject){
	        _mm.request({
	            url     : _mm.getServerUrl('/cart/select_all.do'),
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 取消选中全部商品
	    unselectAllProduct : function(resolve, reject){
	        _mm.request({
	            url     : _mm.getServerUrl('/cart/un_select_all.do'),
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 更新购物车商品数量
	    updateProduct : function(productInfo, resolve, reject){
	        _mm.request({
	            url     : _mm.getServerUrl('/cart/update.do'),
	            data    : productInfo,
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 删除指定商品
	    deleteProduct : function(productIds, resolve, reject){
	        _mm.request({
	            url     : _mm.getServerUrl('/cart/delete_product.do'),
	            data    : {
	                productIds : productIds
	            },
	            success : resolve,
	            error   : reject
	        });
	    },
	}
	module.exports = _cart;

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(49);
	var _mm= __webpack_require__(8);
	var templateIndex= __webpack_require__(51);
	var navSide = {
	    option: {
	        name: '',
	        navList : [
	            {name:'user-center', desc: '个人中心', href: './user-center.html'},
	            {name:'order-list', desc: '我的订单', href: './order-list.html'},
	            {name:'user-pass-update', desc: '修改密码', href: './user-pass-update.html'},
	            {name:'about', desc: '关于MMall', href: './about.html'}
	        ]
	    },
	    init:function(option){
	        $.extend(this.option, option);
	        this.renderNav();
	    },
	    renderNav:function(){
	        for(var i = 0, iLength = this.option.navList.length; i < iLength; i++){
	            if(this.option.navList[i].name === this.option.name){
	                this.option.navList[i].isActive = true;
	            }
	        };
	        var navHtml= _mm.renderHtml(templateIndex, {
	            navList:this.option.navList
	        });
	        $('.nav-side').html(navHtml);
	    }
	};
	module.exports = navSide;

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

	module.exports = "{{#navList}} {{#isActive}} <li class=\"nav-item active\"> {{/isActive}} {{^isActive}} </li><li class=\"nav-item\"> {{/isActive}} <a class=\"link\" href=\"{{href}}\">{{desc}}</a> </li> {{/navList}} ";

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

	/*
	* @Author: Rosen
	* @Date:   2017-05-23 19:33:33
	* @Last Modified by:   Rosen
	* @Last Modified time: 2017-05-23 22:30:31
	*/

	'use strict';
	__webpack_require__(96);
	__webpack_require__(12);
	__webpack_require__(2);
	var navSide         = __webpack_require__(48);
	var _mm             = __webpack_require__(8);
	var _user           = __webpack_require__(15);
	var templateIndex   = __webpack_require__(98);

	// page 逻辑部分
	var page = {
	    init: function(){
	        this.onLoad();
	    },
	    onLoad : function(){
	        // 初始化左侧菜单
	        navSide.init({
	            name: 'user-center'
	        });
	        // 加载用户信息
	        this.loadUserInfo();
	    },
	    // 加载用户信息
	    loadUserInfo : function(){
	        var userHtml = '';
	        _user.getUserInfo(function(res){
	            userHtml = _mm.renderHtml(templateIndex, res);
	            $('.panel-body').html(userHtml);
	        }, function(errMsg){
	            _mm.errorTips(errMsg);
	        });
	    }
	};
	$(function(){
	    page.init();
	});

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

	module.exports = "<div class=\"user-info\"> <div class=\"form-line\"> <span class=\"label\">用户名：</span> <span class=\"text\">{{username}}</span> </div> <div class=\"form-line\"> <span class=\"label\">电 话：</span> <span class=\"text\">{{phone}}</span> </div> <div class=\"form-line\"> <span class=\"label\">邮 箱：</span> <span class=\"text\">{{email}}</span> </div> <div class=\"form-line\"> <span class=\"label\">问 题：</span> <span class=\"text\">{{question}}</span> </div> <div class=\"form-line\"> <span class=\"label\">答 案：</span> <span class=\"text\">{{answer}}</span> </div> <a class=\"btn btn-submit\" href=\"./user-center-update.html\">编辑</a> </div>";

/***/ })

});