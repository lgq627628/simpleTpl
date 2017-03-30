(function (name, definition, context) {
    if (typeof module != 'undefined' && module.exports) {
        // in node env
        module.exports = definition();
    } else if (typeof context['define'] == 'function' && (context['define']['amd'] || context['define']['cmd'])  ) {
        //in requirejs seajs env
        define(definition);
    } else {
        //in client evn
        context[name] = definition();
    }
})('simpleTpl', function () {
    return function simpleTpl(str,data){
        var reg = /{{([^{}]+)?}}/g;
        return str.replace(reg,function(raw,key,offset,string){
            var _data=data;
            var paths = key.split('.');
            for (var i = 0; i < paths.length; i++) {
                _data = _data[paths[i]];
                if (_data === undefined){
                    throw "template error: '" + paths[i] + "' not found in " + raw;
                }
            };
            return _data || raw
        })
    }
}, this);