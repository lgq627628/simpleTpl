function simpleTpl (str, data){
    var reg = /{{([^{}]+)?}}/g,
        _data, raw, key, paths;

    return str.replace(reg, function (raw,key){
        _data = data;
        paths = key.split('.');
        for (var i = 0; i < paths.length; i++) {
            _data = _data[paths[i]];
            if (_data === void 0){
                // void其实是JavaScript中的一个函数，接受一个参数，返回值永远是undefined。
                // 可以说，使用void目的就是为了得到javascript中的undefined。
                // So void 0 is a correct and standard way to produce undefined.
                // 1、使用void 0比使用undefined能够减少3个字节。虽然这是个优势，个人但感觉意义不大，牺牲了可读性和简单性。
                // 2、undefined并不是javascript中的保留字，我们可以使用undefined作为变量名字，然后给它赋值。
                throw "template error: '" + paths[i] + "' not found in " + raw;
            }
        };
        //也可用while判断
        // while(paths.length>0){
        //     _data = _data[paths.shift()];
        // }
        return _data || raw
    })
}