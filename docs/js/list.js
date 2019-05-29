webpackJsonp([5],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(58);


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

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

	var _mm = __webpack_require__(8);
	var _product = {
	    // 获取商品列表
	    getProductList : function(listParam, resolve, reject){
	        _mm.request({
	            url     : _mm.getServerUrl('/product/list.do'),
	            data    : listParam,
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 获取商品详细信息
	    getProductDetail : function(productId, resolve, reject){
	        _mm.request({
	            url     : _mm.getServerUrl('/product/detail.do'),
	            data    : {
	                productId : productId
	            },
	            success : resolve,
	            error   : reject
	        });
	    }
	}
	module.exports = _product;

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	__webpack_require__(12);
	__webpack_require__(2);
	var _mm= __webpack_require__(8);
	var _product= __webpack_require__(39);
	var Pagination= __webpack_require__(61);
	var templateIndex= __webpack_require__(65);

	var page = {
	    data : {
	        listParam : {
	            keyword: _mm.getUrlParam('keyword')|| '',
	            categoryId: _mm.getUrlParam('categoryId')|| '',
	            orderBy: _mm.getUrlParam('orderBy')|| 'default',
	            pageNum: _mm.getUrlParam('pageNum')|| 1,
	            pageSize: _mm.getUrlParam('pageSize')|| 20
	        }
	    },
	    init : function(){
	        this.onLoad();
	        this.bindEvent();
	    },
	    onLoad : function(){
	        this.loadList();
	    },
	    bindEvent : function(){
	        var _this = this;
	        $('.sort-item').click(function(){
	            var $this = $(this);
	            _this.data.listParam.pageNum = 1;
	            if($this.data('type') === 'default'){
	                if($this.hasClass('active')) {
	                    return;
	                }
	                else{
	                    $this.addClass('active').siblings('.sort-item')
	                        .removeClass('active asc desc');
	                    _this.data.listParam.orderBy = 'default';
	                }
	            }
	            // 点击价格排序
	            else if($this.data('type') === 'price'){
	                // active class 的处理
	                $this.addClass('active').siblings('.sort-item')
	                        .removeClass('active asc desc');
	                // 升序、降序的处理
	                if(!$this.hasClass('asc')){
	                    $this.addClass('asc').removeClass('desc');
	                    _this.data.listParam.orderBy = 'price_asc';
	                }else{
	                    $this.addClass('desc').removeClass('asc');
	                    _this.data.listParam.orderBy = 'price_desc';
	                }
	            }
	            // 重新加载列表
	            _this.loadList();
	        });
	    },
	    // 加载list数据
	    loadList : function(){
	        var _this       = this,
	            listHtml    = '',
	            listParam   = this.data.listParam,
	            $pListCon   = $('.p-list-con');
	        $pListCon.html('<div class="loading"></div>');
	        // 删除参数中不必要的字段
	        listParam.categoryId 
	            ? (delete listParam.keyword) : (delete listParam.categoryId);
	        // 请求接口
	        _product.getProductList(listParam, function(res){
	            listHtml = _mm.renderHtml(templateIndex, {
	                list :  res.list
	            });
	            $pListCon.html(listHtml);
	            _this.loadPagination({
	                hasPreviousPage : res.hasPreviousPage,
	                prePage         : res.prePage,
	                hasNextPage     : res.hasNextPage,
	                nextPage        : res.nextPage,
	                pageNum         : res.pageNum,
	                pages           : res.pages
	            });
	        }, function(errMsg){
	            _mm.errorTips(errMsg);
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
	                _this.loadList();
	            }
	        }));
	    }
	};
	$(function(){
	    page.init();
	})

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

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

/***/ 65:
/***/ (function(module, exports) {

	module.exports = "{{#list}} <li class=\"p-item\"> <div class=\"p-img-con\"> <a class=\"link\" href=\"./detail.html?productId={{id}}\" target=\"_blank\"> <img class=\"p-img\" src=\"{{imageHost}}{{mainImage}}\" alt=\"{{name}}\"/> </a> </div> <div class=\"p-price-con\"> <span class=\"p-price\">￥{{price}}</span> </div> <div class=\"p-name-con\"> <a class=\"p-name\" href=\"./detail.html?productId={{id}}\" target=\"_blank\">{{name}}</a> </div> </li> {{/list}} {{^list}} <p class=\"err-tip\">很抱歉，实在找不到您要的商品。</p> {{/list}}";

/***/ })

});