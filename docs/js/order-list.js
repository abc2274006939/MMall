webpackJsonp([8],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(80);


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

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(62);
	var _mm= __webpack_require__(8);
	var templatePagination= __webpack_require__(64);

	var Pagination = function(){
	    var _this = this;
	    this.defaultOption = {
	        container: null,
	        pageNum: 1,
	        pageRange: 3,
	        onSelectPage: null
	    };
	    $(document).on('click', '.pg-item', function(){
	        var $this = $(this);
	        if($this.hasClass('active') || $this.hasClass('disabled')){
	            return;
	        }
	        typeof _this.option.onSelectPage === 'function' 
	            ? _this.option.onSelectPage($this.data('value')) : null;
	    });
	};
	Pagination.prototype.render = function(userOption){
	    this.option = $.extend({}, this.defaultOption, userOption);
	    if(!(this.option.container instanceof jQuery)){
	        return;
	    }
	    if(this.option.pages <= 1){
	        return;
	    }
	    this.option.container.html(this.getPaginationHtml());
	};
	Pagination.prototype.getPaginationHtml = function(){
	    var html = '',
	        option = this.option,
	        pageArray= [],
	        start= option.pageNum - option.pageRange > 0 
	            ? option.pageNum - option.pageRange : 1,
	        end= option.pageNum + option.pageRange < option.pages
	            ? option.pageNum + option.pageRange : option.pages;
	    pageArray.push({
	        name : '上一页',
	        value : this.option.prePage,
	        disabled : !this.option.hasPreviousPage
	    });
	    for(var i = start; i <= end; i++){
	        pageArray.push({
	            name : i,
	            value : i,
	            active : (i === option.pageNum)
	        });
	    };
	    pageArray.push({
	        name : '下一页',
	        value : this.option.nextPage,
	        disabled : !this.option.hasNextPage
	    });
	    html = _mm.renderHtml(templatePagination, {
	        pageArray: pageArray,
	        pageNum: option.pageNum,
	        pages: option.pages
	    });
	    return html;
	};

	module.exports = Pagination;

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	module.exports = "<div class=\"pg-content\"> {{#pageArray}} {{#disabled}} <span class=\"pg-item disabled\" data-value=\"{{value}}\">{{name}}</span> {{/disabled}} {{^disabled}} {{#active}} <span class=\"pg-item active\" data-value=\"{{value}}\">{{name}}</span> {{/active}} {{^active}} <span class=\"pg-item\" data-value=\"{{value}}\">{{name}}</span> {{/active}} {{/disabled}} {{/pageArray}} <span class=\"pg-total\">{{pageNum}} / {{pages}}</span> </div>";

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

	var _mm = __webpack_require__(8);
	var _order = {
	    // 获取商品列表
	    getProductList : function(resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/order/get_order_cart_product.do'),
	            success: resolve,
	            error: reject
	        });
	    },
	    // 提交订单
	    createOrder: function(orderInfo, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/order/create.do'),
	            data: orderInfo,
	            success: resolve,
	            error: reject
	        });
	    },
	    // 获取订单列表
	    getOrderList : function(listParam, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/order/list.do'),
	            data: listParam,
	            success: resolve,
	            error: reject
	        });
	    },
	    // 获取订单详情
	    getOrderDetail:function(orderNumber, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/order/detail.do'),
	            data:{
	                orderNo:orderNumber
	            },
	            success:resolve,
	            error:reject
	        });
	    },
	    // 取消订单
	    cancelOrder:function(orderNumber, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/order/cancel.do'),
	            data:{
	                orderNo:orderNumber
	            },
	            success:resolve,
	            error:reject
	        });
	    }
	}
	module.exports = _order;

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

	/*
	* @Author: Rosen
	* @Date:   2017-06-09 09:42:22
	* @Last Modified by:   Rosen
	* @Last Modified time: 2017-06-09 16:38:02
	*/

	'use strict';
	__webpack_require__(81);
	__webpack_require__(12);
	__webpack_require__(2);
	var navSide         = __webpack_require__(48);
	var _mm             = __webpack_require__(8);
	var _order          = __webpack_require__(69);
	var Pagination      = __webpack_require__(61);
	var templateIndex   = __webpack_require__(83);

	// page 逻辑部分
	var page = {
	    data: {
	        listParam : {
	            pageNum     : 1,
	            pageSize    : 10
	        }
	    },
	    init: function(){
	        this.onLoad();
	    },
	    onLoad : function(){
	        this.loadOrderList();
	        // 初始化左侧菜单
	        navSide.init({
	            name: 'order-list'
	        });
	    },
	    // 加载订单列表
	    loadOrderList: function(){
	        var _this           = this,
	            orderListHtml   = '',
	            $listCon        = $('.order-list-con');
	        $listCon.html('<div class="loading"></div>');
	        _order.getOrderList(this.data.listParam, function(res){
	            // 渲染html
	            orderListHtml = _mm.renderHtml(templateIndex, res);
	            $listCon.html(orderListHtml);
	            _this.loadPagination({
	                hasPreviousPage : res.hasPreviousPage,
	                prePage         : res.prePage,
	                hasNextPage     : res.hasNextPage,
	                nextPage        : res.nextPage,
	                pageNum         : res.pageNum,
	                pages           : res.pages
	            });
	        }, function(errMsg){
	            $listCon.html('<p class="err-tip">加载订单失败，请刷新后重试</p>');
	        });
	    },
	    // 加载分页信息
	    loadPagination : function(pageInfo){
	        var _this = this;
	        this.pagination ? '' : (this.pagination = new Pagination());
	        this.pagination.render($.extend({}, pageInfo, {
	            container : $('.pagination'),
	            onSelectPage : function(pageNum){
	                _this.data.listParam.pageNum = pageNum;
	                _this.loadOrderList();
	            }
	        }));
	    }
	};
	$(function(){
	    page.init();
	});

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

	module.exports = "<table class=\"order-list-table header\"> <tr> <th class=\"cell cell-img\">&nbsp;</th> <th class=\"cell cell-info\">商品信息</th> <th class=\"cell cell-price\">单价</th> <th class=\"cell cell-count\">数量</th> <th class=\"cell cell-total\">小计</th> </tr> </table> {{#list}} <table class=\"order-list-table order-item\"> <tr> <td colspan=\"5\" class=\"order-info\"> <span class=\"order-text\"> <span>订单号：</span> <a class=\"link order-num\" href=\"./order-detail.html?orderNumber={{orderNo}}\" target=\"_blank\">{{orderNo}}</a> </span> <span class=\"order-text\">{{createTime}}</span> <span class=\"order-text\">收件人：{{receiverName}}</span> <span class=\"order-text\">订单状态：{{statusDesc}}</span> <span class=\"order-text\"> <span>订单总价：</span> <span class=\"order-total\">￥{{payment}}</span> </span> <a class=\"link order-detail\" href=\"./order-detail.html?orderNumber={{orderNo}}\" target=\"_blank\">查看详情></a> </td> </tr> {{#orderItemVoList}} <tr> <td class=\"cell cell-img\"> <a href=\"./detail.html?productId={{productId}}\" target=\"_blank\"> <img class=\"p-img\" src=\"{{imageHost}}{{productImage}}\" alt=\"{{productName}}\"/> </a> </td> <td class=\"cell cell-info\"> <a class=\"link\" href=\"./detail.html?productId={{productId}}\" target=\"_blank\">{{productName}}</a> </td> <td class=\"cell cell-price\">￥{{currentUnitPrice}}</td> <td class=\"cell cell-count\">{{quantity}}</td> <td class=\"cell cell-total\">￥{{totalPrice}}</td> </tr> {{/orderItemVoList}} </table> {{/list}} {{^list}} <p class=\"err-tip\">您暂时还没有订单</p> {{/list}}";

/***/ })

});