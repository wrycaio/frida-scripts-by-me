//var classAndMethod = "br.com.unicredvisa.lib_common.data.interceptors.SSLPinningInterceptor";
var classAndMethod = "br.com.unicredvisa.lib_common.data.interceptors.SSLPinningInterceptor";
var loadedClasses = [];

setTimeout(function waitForClass() {
  Java.perform(function () {
    try {
      var className = classAndMethod.split(".")[0];
      var methodName = classAndMethod.split(".")[1];
      var protectionClass = Java.use(className);
      protectionClass[methodName].implementation = function () {
        console.log("[*] Hooked method: " + className + "." + methodName);
        return true;
      };
      var classLoaded = Java.enumerateLoadedClassesSync();
      classLoaded.forEach(function (className) {
        if (!loadedClasses.includes(className)) {
          console.log("[*] Loaded class: " + className);
          loadedClasses.push(className);
        }
      });
    } catch (error) {
      console.error("[*] Class not found, retrying...");
      setTimeout(waitForClass, 1000);
    }
  });
}, 1000);
