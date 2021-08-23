(function () {
    var whitePlasticInput = $("#whitePlasticInput");
    var blackPlasticInput = $("#blackPlasticInput");
    var metalInput = $("#metalInput");

    var setBtn = $("#setBtn");
    var clearBtn = $("#clearBtn");

    setBtn.click(set);

    clearBtn.click(clear);

    function set() {
        var dataObj = {
            whitePlasticInput: whitePlasticInput.val(),
            blackPlasticInput: blackPlasticInput.val(),
            metalInput: metalInput.val(),
        }

        console.log(dataObj);
    }

    function clear() {
        whitePlasticInput.val(0);
        blackPlasticInput.val(0)
        metalInput.val(0)
    }

})();