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
