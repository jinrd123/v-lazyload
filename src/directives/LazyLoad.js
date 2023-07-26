const ob_config = {
	threshold: [1] // 1代表当图片完全出现在视口中时在加载
};
const observer = new IntersectionObserver((infoArr) => {
    if(infoArr[0].isIntersecting) {
        infoArr[0].target.src = infoArr[0].target._src;
        observer.unobserve(infoArr[0].target);
    }
}, ob_config)
const LazyLoad = {
    install(Vue, options) {
        console.log(Vue, options);
        Vue.directive('lazy', {
            mounted(el, {arg, value}) {
                el._src = value;
                observer.observe(el);
            }
        })
    }
}

export default LazyLoad;