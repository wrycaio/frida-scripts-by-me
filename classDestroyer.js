Java.perform(function () {
    var SSLPinningInterceptor = Java.use("android.security.net.config.NetworkSecurityTrustManager");
    SSLPinningInterceptor.intercept.implementation = function (chain) {
        console.log("BYPASS RODANDO CARALHOOOOO");
        return chain.proceed(chain.request());
    };
});
