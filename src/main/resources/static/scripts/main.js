// 监听 nav-toggle 的变化
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navbarButton2Toggle = document.getElementById('navbar-button-2-toggle');

    if (navToggle && navbarButton2Toggle) {
        navToggle.addEventListener('change', function() {
            // 当 nav-toggle 取消选中时，取消选中 navbar-button-2-toggle
            if (!this.checked) {
                navbarButton2Toggle.checked = false;
            }
        });
    }
});

// 伪加载进度条
(function() {
    // 获取进度条元素
    function getProgressBar() {
        return document.querySelector('.progress-bar-inner');
    }

    // 获取错误提示容器
    function getErrorContainer() {
        return document.querySelector('div.between-navbar-and-content');
    }

    // 获取错误提示文字
    function getErrorText() {
        return document.querySelector('h3.between-navbar-and-content');
    }

    // 显示错误提示
    function showError() {
        const errorContainer = getErrorContainer();
        const errorText = getErrorText();

        if (errorContainer) {
            errorContainer.style.height = '30px';
        }

        if (errorText) {
            errorText.style.fontSize = '1rem';
        }
    }

    // 隐藏错误提示
    function hideError() {
        const errorContainer = getErrorContainer();
        const errorText = getErrorText();

        if (errorContainer) {
            errorContainer.style.height = '';
        }

        if (errorText) {
            errorText.style.fontSize = '';
        }
    }

    // 完成进度条的函数（正常完成或错误时都调用）
    function completeProgress() {
        const progressBarInner = getProgressBar();
        if (progressBarInner) {
            progressBarInner.classList.remove('loading');
            progressBarInner.classList.add('complete');

            // 重置进度条状态，以便下次使用
            setTimeout(function() {
                progressBarInner.classList.remove('complete');
            }, 400);
        }
    }

    // 开始进度条动画
    function startProgress() {
        const progressBarInner = getProgressBar();
        if (progressBarInner) {
            // 移除之前的类
            progressBarInner.classList.remove('loading');
            progressBarInner.classList.remove('complete');

            // 强制重排
            void progressBarInner.offsetWidth;

            // 添加 loading 类启动动画
            progressBarInner.classList.add('loading');
        }
    }

    // 监听 HTMX 请求开始事件
    document.addEventListener('htmx:beforeRequest', function() {
        startProgress();
        // 开始新请求时隐藏之前的错误提示
        hideError();
    });

    // 监听 HTMX 请求完成事件
    document.addEventListener('htmx:afterSettle', function() {
        setTimeout(function() {
            completeProgress();
            // 请求完成后隐藏错误提示
            hideError();
        }, 300);
    });

    // 监听 HTMX 请求错误事件
    document.addEventListener('htmx:responseError', function() {
        completeProgress();
        showError();
    });

    document.addEventListener('htmx:sendError', function() {
        completeProgress();
        showError();
    });
})();
