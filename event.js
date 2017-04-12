
    //处理逻辑：1秒内，连续两次触发
    var first = null;
    function isTwice() {
     if (!first) {
          first = new Date().getTime();
          // do something  第一次提醒
          setTimeout(function() {
            first = null;
          }, 1000);
        } else {
          if (new Date().getTime() - first < 1000) {
            // 1秒内连续两次触发
          }
        }
    };
