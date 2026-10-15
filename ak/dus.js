
(function(){
    const _0x1a = document;
    _0x1a.addEventListener("contextmenu", e => e.preventDefault());

    _0x1a.onkeydown = function(_0xb){
        const _0xc = _0xb.keyCode;
        if(_0xc==123 || (_0xb.ctrlKey && _0xb.shiftKey && (_0xc==73 || _0xc==74)) || (_0xb.ctrlKey && _0xc==85)){
            return false;
        }
    };
})();

